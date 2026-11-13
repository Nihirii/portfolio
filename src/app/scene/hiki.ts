import * as THREE from 'three';
import { canvasTexture, mat, sph } from './helpers';
import { HIKI } from './room-layout';

export type SpotName = keyof typeof HIKI.spots;
type Behaviour = 'walk' | 'idle' | 'sit' | 'sleep';
export type PetReaction = 'purr' | 'ear';

/** Paramètres de posture interpolés en continu. */
interface Pose {
  hip: number;
  pitch: number;
  front: number;
  hind: number;
  legScale: number;
  headPitch: number;
  headDrop: number;
  headYaw: number;
  tailLift: number;
  tailCurl: number;
  tailYaw: number;
  eyes: number;
  curl: number;
}

const POSES: Record<'stand' | 'sit' | 'sleep', Pose> = {
  stand: {
    hip: 0.175,
    pitch: 0,
    front: 0,
    hind: 0,
    legScale: 1,
    headPitch: 0,
    headDrop: 0,
    headYaw: 0,
    tailLift: 0.9,
    tailCurl: -0.18,
    tailYaw: 0,
    eyes: 1,
    curl: 0,
  },
  sit: {
    hip: 0.16,
    pitch: 0.62,
    front: -0.62,
    hind: 1.25,
    legScale: 0.8,
    headPitch: -0.55,
    headDrop: 0,
    headYaw: 0.15,
    tailLift: -0.75,
    tailCurl: 0.05,
    tailYaw: 0.5,
    eyes: 1,
    curl: 0,
  },
  sleep: {
    hip: 0.075,
    pitch: 0,
    front: -1.45,
    hind: 1.45,
    legScale: 0.55,
    headPitch: 0.25,
    headDrop: -0.06,
    headYaw: 1.15,
    tailLift: -0.15,
    tailCurl: 0.0,
    tailYaw: 1.3,
    eyes: 0,
    curl: 1,
  },
};

/**
 * Hiki : chatte low-poly qui marche, s'assoit et dort, et se laisse caresser.
 * Toutes les couleurs et les trajets viennent de `HIKI` dans room-layout.ts.
 */
export class Hiki {
  readonly root = new THREE.Group();
  private body = new THREE.Group();
  private torso!: THREE.Mesh;
  private head = new THREE.Group();
  private ears: THREE.Group[] = [];
  private eyes: THREE.Mesh[] = [];
  private legs: { pivot: THREE.Group; front: boolean }[] = [];
  private tail: THREE.Group[] = [];

  private pose: Pose = { ...POSES.sit };
  private behaviour: Behaviour = 'sit';
  private timer = 4;
  private spot: SpotName = 'rug';
  private path: SpotName[] = [];
  private hop: { from: THREE.Vector3; to: THREE.Vector3; t: number } | null = null;
  private walkPhase = 0;
  private heading = -2.4;
  private petTimer = 0;
  private earTwitch = 0;
  private destination: SpotName | null = null;
  private lookYaw = 0;
  private reducedMotion = false;
  private night = 0;
  private contactShadow: THREE.Mesh | null = null;

  constructor() {
    this.build();
    const s = HIKI.spots[this.spot];
    this.root.position.set(s.x, s.y, s.z);
    this.root.rotation.y = this.heading;
    this.root.scale.setScalar(HIKI.scale);
  }

  setReducedMotion(v: boolean) {
    this.reducedMotion = v;
  }

  /**
   * Ombre de contact douce sous Hiki : remplace l'ombre portée quand la pièce utilise
   * la lumière pré-calculée (ombres temps réel coupées).
   */
  setContactShadow(scene: THREE.Object3D, on: boolean) {
    if (!on) {
      this.contactShadow?.removeFromParent();
      return;
    }
    if (!this.contactShadow) {
      const c = document.createElement('canvas');
      c.width = c.height = 64;
      const ctx = c.getContext('2d')!;
      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, 'rgba(40,28,22,0.55)');
      grad.addColorStop(0.55, 'rgba(40,28,22,0.25)');
      grad.addColorStop(1, 'rgba(40,28,22,0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 64, 64);
      const tex = new THREE.CanvasTexture(c);
      tex.colorSpace = THREE.SRGBColorSpace;
      const m = new THREE.Mesh(
        new THREE.PlaneGeometry(0.6, 0.34),
        new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false }),
      );
      m.geometry.rotateX(-Math.PI / 2);
      m.renderOrder = 1;
      m.raycast = () => {}; // ni clic ni survol : ce n'est qu'une ombre
      this.contactShadow = m;
    }
    // objet à part (pas un enfant) : le contour de survol de Hiki ne l'entoure pas
    scene.add(this.contactShadow);
  }

  private followShadow() {
    const m = this.contactShadow;
    if (!m?.parent) return;
    m.position.set(this.root.position.x, this.root.position.y + 0.004, this.root.position.z);
    m.rotation.y = this.root.rotation.y;
    m.scale.setScalar(this.root.scale.x);
  }

  isAsleep(): boolean {
    return this.behaviour === 'sleep';
  }

  /** Point au-dessus du dos, pour l'étiquette et les cœurs. */
  anchor(target: THREE.Vector3): THREE.Vector3 {
    return this.torso.getWorldPosition(target).add(new THREE.Vector3(0, 0.16, 0));
  }

  /**
   * Une caresse (clic, toucher, clavier ou geste sur le dos).
   * Éveillée : elle s'arrête, ferme les yeux, remue doucement la queue.
   * Endormie : elle bouge simplement une oreille.
   */
  pet(cameraWorld?: THREE.Vector3): PetReaction {
    if (this.behaviour === 'sleep') {
      this.earTwitch = 0.6;
      return 'ear';
    }
    if (this.behaviour === 'walk') {
      this.behaviour = 'idle';
      this.path = [];
      this.hop = null;
    }
    this.petTimer = Math.max(this.petTimer, 2.4);
    if (cameraWorld) {
      const local = this.root.worldToLocal(cameraWorld.clone());
      this.lookYaw = THREE.MathUtils.clamp(Math.atan2(-local.z, local.x), -0.9, 0.9);
    }
    return 'purr';
  }

  /** Force un comportement (tests / démonstration). */
  debugSet(b: 'sit' | 'sleep' | 'idle', spot?: SpotName) {
    if (spot) {
      this.spot = spot;
      const s = HIKI.spots[spot];
      this.root.position.set(s.x, s.y, s.z);
    }
    this.path = [];
    this.hop = null;
    this.behaviour = b;
    this.timer = 60;
  }

  /** Rejoint un endroit précis (ex. sa gamelle), puis s'y assoit un moment. */
  goTo(spot: SpotName) {
    if (this.behaviour === 'sleep' && this.reducedMotion) return;
    if (this.spot === spot && !this.path.length) {
      this.behaviour = 'sit';
      this.timer = 6;
      return;
    }
    const path = this.route(this.spot, spot);
    if (path.length > 1) {
      this.petTimer = 0;
      this.path = path.slice(1);
      this.behaviour = 'walk';
      this.destination = spot;
    }
  }

  /** Survol : elle remarque le curseur et bouge une oreille. */
  notice() {
    if (this.earTwitch <= 0) this.earTwitch = 0.6;
  }

  /** Tant que l'on caresse, elle reste immobile. */
  isBeingPetted(): boolean {
    return this.petTimer > 0;
  }

  update(dt: number, t: number, night: number) {
    this.followShadow();
    this.night = night;
    dt = Math.min(dt, 0.1);
    if (this.petTimer > 0) this.petTimer -= dt;
    if (this.earTwitch > 0) this.earTwitch -= dt;

    if (this.petTimer <= 0) this.think(dt);
    if (this.behaviour === 'walk' && this.petTimer <= 0) this.walk(dt);

    // posture cible
    const base =
      this.behaviour === 'sleep' ? POSES.sleep : this.behaviour === 'sit' ? POSES.sit : POSES.stand;
    const target: Pose = { ...base };
    const petting = this.petTimer > 0;
    if (petting) {
      target.eyes = 0;
      target.headPitch = base.headPitch + 0.3;
      target.headYaw = this.lookYaw;
      target.pitch = base.pitch + 0.06;
    }
    const k = 1 - Math.exp(-dt * (this.reducedMotion ? 3 : 5));
    (Object.keys(target) as (keyof Pose)[]).forEach((key) => {
      this.pose[key] += (target[key] - this.pose[key]) * k;
    });
    this.applyPose(t, petting);
  }

  // ---------- comportement ----------

  private think(dt: number) {
    if (this.behaviour === 'walk') return;
    this.timer -= dt;
    if (this.timer > 0) return;

    const night = this.night > 0.5;
    const sleepSpots = (night ? HIKI.sleepSpots.night : HIKI.sleepSpots.day) as SpotName[];
    const r = Math.random();

    if (this.reducedMotion) {
      // Mouvement réduit : elle reste sur place et alterne assise / sommeil.
      this.behaviour =
        this.behaviour === 'sleep' ? 'sit' : r < (night ? 0.7 : 0.4) ? 'sleep' : 'sit';
      this.timer = this.behaviour === 'sleep' ? 20 : 10;
      return;
    }

    if (this.behaviour === 'sleep') {
      // réveil : s'asseoir un moment
      this.behaviour = 'sit';
      this.timer = 3 + Math.random() * 3;
      return;
    }
    const atSleepSpot = sleepSpots.includes(this.spot);
    if (atSleepSpot && r < (night ? 0.75 : 0.35)) {
      this.behaviour = 'sleep';
      this.timer = night ? 30 + Math.random() * 25 : 14 + Math.random() * 12;
      return;
    }
    if (r < 0.3) {
      this.behaviour = 'sit';
      this.timer = 4 + Math.random() * 5;
      return;
    }
    // choisir une destination (la nuit, de préférence près du canapé)
    const all = Object.keys(HIKI.spots) as SpotName[];
    const pool = Math.random() < (night ? 0.8 : 0.35) ? sleepSpots : all;
    const candidates = pool.filter((s) => s !== this.spot);
    const dest = candidates[Math.floor(Math.random() * candidates.length)];
    const path = this.route(this.spot, dest);
    if (path.length > 1) {
      this.path = path.slice(1);
      this.behaviour = 'walk';
    } else {
      this.behaviour = 'idle';
      this.timer = 2;
    }
  }

  private route(from: SpotName, to: SpotName): SpotName[] {
    const prev = new Map<SpotName, SpotName | null>([[from, null]]);
    const queue: SpotName[] = [from];
    while (queue.length) {
      const cur = queue.shift()!;
      if (cur === to) break;
      for (const [a, b] of HIKI.links as [SpotName, SpotName][]) {
        const next = a === cur ? b : b === cur ? a : null;
        if (next && !prev.has(next)) {
          prev.set(next, cur);
          queue.push(next);
        }
      }
    }
    if (!prev.has(to)) return [from];
    const out: SpotName[] = [];
    for (let c: SpotName | null = to; c; c = prev.get(c) ?? null) out.unshift(c);
    return out;
  }

  private walk(dt: number) {
    const next = this.path[0];
    if (!next) {
      this.behaviour = 'idle';
      this.timer = 1 + Math.random() * 2;
      return;
    }
    const s = HIKI.spots[next];
    const goal = new THREE.Vector3(s.x, s.y, s.z);
    const pos = this.root.position;

    if (this.hop) {
      this.hop.t += dt / 0.55;
      const e = Math.min(1, this.hop.t);
      pos.lerpVectors(this.hop.from, this.hop.to, e);
      pos.y += Math.sin(e * Math.PI) * 0.35;
      if (e >= 1) {
        this.hop = null;
        this.arrive(next);
      }
      return;
    }
    const flat = new THREE.Vector3(goal.x - pos.x, 0, goal.z - pos.z);
    const dist = flat.length();
    const wanted = Math.atan2(-flat.z, flat.x);
    this.heading = turnTowards(this.heading, wanted, dt * 4);
    this.root.rotation.y = this.heading;

    if (Math.abs(goal.y - pos.y) > 0.05 && dist < 0.75) {
      this.hop = { from: pos.clone(), to: goal, t: 0 };
      return;
    }
    const facing = Math.abs(angleDiff(this.heading, wanted)) < 0.6;
    const speed = facing ? 0.38 : 0.08;
    this.walkPhase += dt * speed * 22;
    if (dist < 0.03) {
      this.arrive(next);
      return;
    }
    flat.normalize().multiplyScalar(Math.min(dist, speed * dt));
    pos.add(flat);
  }

  private arrive(spot: SpotName) {
    this.spot = spot;
    this.path.shift();
    if (!this.path.length) {
      if (this.destination === spot) {
        // arrivée à la destination demandée (gamelle) : elle s'assoit et mange
        this.destination = null;
        this.behaviour = 'sit';
        this.timer = 6;
        if (spot === 'bowl') this.heading = this.root.rotation.y = Math.PI;
        if (spot === 'aquarium') this.heading = this.root.rotation.y = -Math.PI / 2; // regarde l'aquarium
        return;
      }
      this.behaviour = 'idle';
      this.timer = 0.6 + Math.random();
    }
  }

  // ---------- modèle ----------

  private build() {
    // pelage tigré : texture dessinée (rayures sur le dos, ventre plus clair) + reflet velouté
    const coatTex = tabbyTexture(HIKI.coat, HIKI.belly, 0.38);
    const headTex = tabbyTexture(HIKI.coat, HIKI.belly, 0.5);
    const fur = (map: THREE.Texture) =>
      new THREE.MeshPhysicalMaterial({
        map,
        roughness: 0.85,
        sheen: 0.8,
        sheenRoughness: 0.6,
        sheenColor: new THREE.Color('#e9d2bd'),
      });
    const coat = fur(coatTex);
    const coatPlain = new THREE.MeshPhysicalMaterial({
      color: HIKI.coat,
      roughness: 0.85,
      sheen: 0.8,
      sheenRoughness: 0.6,
      sheenColor: new THREE.Color('#e9d2bd'),
    });
    const light = mat(HIKI.belly, { roughness: 0.9 });
    const pink = mat('#e7a3a6', { roughness: 0.6 });
    this.root.name = 'hiki';
    this.root.add(this.body);

    this.torso = sph(this.body, 0.1, coat, 0, 0, 0, 1.85, 0.95, 1.0);
    sph(this.body, 0.07, light, 0.1, -0.025, 0, 1.0, 1.0, 0.9); // poitrail clair

    // tête : joues rondes, museau clair, grands yeux brillants
    this.head.position.set(0.18, 0.08, 0);
    this.body.add(this.head);
    const skull = sph(this.head, 0.074, fur(headTex), 0, 0.004, 0, 1.0, 0.92, 1.08);
    skull.rotation.z = Math.PI / 2; // rayures sur le front
    [-1, 1].forEach((s) => sph(this.head, 0.04, coatPlain, 0.035, -0.022, s * 0.032, 1, 0.85, 1));
    sph(this.head, 0.03, light, 0.064, -0.028, 0, 0.8, 0.7, 1.35); // museau
    sph(this.head, 0.009, pink, 0.091, -0.012, 0, 0.7, 0.6, 1.1); // nez
    const eyeMat = new THREE.MeshPhysicalMaterial({
      color: HIKI.eyes,
      roughness: 0.15,
      clearcoat: 1,
      clearcoatRoughness: 0.05,
    });
    [-1, 1].forEach((s) => {
      const eye = sph(this.head, 0.017, eyeMat, 0.055, 0.014, s * 0.032, 0.75, 1, 1);
      sph(eye, 0.011, mat('#15110e'), 0.01, 0, 0, 0.5, 1.05, 0.42); // pupille
      sph(eye, 0.0038, mat('#ffffff', { roughness: 0.2 }), 0.016, 0.006, -s * 0.004); // reflet
      this.eyes.push(eye);

      const ear = new THREE.Group();
      ear.position.set(-0.012, 0.052, s * 0.04);
      ear.rotation.x = s * 0.32;
      const cone = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.062, 24), coatPlain);
      cone.scale.set(1, 1, 0.55);
      cone.position.y = 0.026;
      cone.castShadow = true;
      ear.add(cone);
      const innerEar = new THREE.Mesh(new THREE.ConeGeometry(0.019, 0.042, 20), pink);
      innerEar.scale.set(0.45, 1, 0.5);
      innerEar.position.set(0.011, 0.022, 0);
      ear.add(innerEar);
      this.head.add(ear);
      this.ears.push(ear);

      // moustaches
      const whiskerMat = mat('#f4efe8', { roughness: 0.4 });
      [-0.25, 0, 0.25].forEach((tilt, k) => {
        const w = new THREE.Mesh(new THREE.CylinderGeometry(0.0007, 0.0004, 0.075, 4), whiskerMat);
        w.position.set(0.07, -0.026 + k * 0.004, s * 0.05);
        w.rotation.set(Math.PI / 2 + s * 0.15, 0, tilt * s);
        w.rotation.order = 'XZY';
        w.rotation.y = s * 0.35;
        this.head.add(w);
      });
    });

    // pattes (capsules) et coussinets clairs
    const legGeo = new THREE.CapsuleGeometry(0.02, 0.12, 8, 16);
    legGeo.translate(0, -0.075, 0);
    (
      [
        [0.12, 0.05, true],
        [0.12, -0.05, true],
        [-0.12, 0.055, false],
        [-0.12, -0.055, false],
      ] as const
    ).forEach(([x, z, front]) => {
      const pivot = new THREE.Group();
      pivot.position.set(x, -0.03, z);
      const leg = new THREE.Mesh(legGeo, coatPlain);
      leg.castShadow = true;
      pivot.add(leg);
      sph(pivot, 0.024, light, 0.008, -0.158, 0, 1.25, 0.65, 1.05);
      this.body.add(pivot);
      this.legs.push({ pivot, front });
    });

    // queue articulée, effilée, bout plus foncé
    let parent: THREE.Object3D = this.body;
    const segments = 9;
    for (let i = 0; i < segments; i++) {
      const r = 0.019 - (i / segments) * 0.007;
      const g = new THREE.CapsuleGeometry(r, 0.03, 6, 14);
      g.rotateZ(Math.PI / 2);
      g.translate(-0.019, 0, 0);
      const seg = new THREE.Group();
      seg.position.set(i === 0 ? -0.175 : -0.038, i === 0 ? 0.03 : 0, 0);
      const m = new THREE.Mesh(g, i >= segments - 2 ? mat('#4e3d33', { roughness: 0.9 }) : i % 2 ? coatPlain : mat(HIKI.coatLight, { roughness: 0.9 }));
      m.castShadow = true;
      seg.add(m);
      parent.add(seg);
      this.tail.push(seg);
      parent = seg;
    }

    // volume de clic, plus large que le corps
    const hit = new THREE.Mesh(
      new THREE.BoxGeometry(0.55, 0.32, 0.3),
      new THREE.MeshBasicMaterial({ visible: false }),
    );
    hit.position.set(0.02, 0.0, 0);
    hit.userData['hitBox'] = true;
    this.body.add(hit);
  }

  private applyPose(t: number, petting: boolean) {
    const p = this.pose;
    const walking = this.behaviour === 'walk' && !petting && !this.hop;
    const breathe =
      Math.sin(t * (this.behaviour === 'sleep' ? 1.6 : 2.6)) *
      (this.behaviour === 'sleep' ? 0.04 : 0.015);

    this.body.position.y = p.hip + (walking ? Math.abs(Math.sin(this.walkPhase)) * 0.008 : 0);
    this.body.rotation.z = p.pitch;
    this.torso.scale.set(1.85 - p.curl * 0.35, 0.95 * (1 + breathe), 1.0 + p.curl * 0.25);

    this.head.position.set(0.18 - p.curl * 0.04, 0.08 + p.headDrop, p.curl * 0.06);
    this.head.rotation.set(0, p.headYaw, p.headPitch + (petting ? Math.sin(t * 2) * 0.05 : 0));

    this.legs.forEach(({ pivot, front }, i) => {
      const swing = walking
        ? Math.sin(this.walkPhase + (i % 2 ? Math.PI : 0) + (front ? 0 : Math.PI / 2)) * 0.45
        : 0;
      pivot.rotation.z = (front ? p.front : p.hind) + swing;
      pivot.scale.y = p.legScale;
    });

    // queue : levée en marchant, enroulée en dormant, remue doucement pendant les caresses
    const wagAmp = petting ? 0.35 : walking ? 0.12 : this.behaviour === 'sleep' ? 0.03 : 0.08;
    const wagSpeed = petting ? 4 : 2;
    this.tail.forEach((seg, i) => {
      const wag = Math.sin(t * wagSpeed - i * 0.6) * wagAmp * (i / 6);
      seg.rotation.z = i === 0 ? p.tailLift : p.tailCurl;
      seg.rotation.y = (i === 0 ? 0 : (p.tailYaw / 6) * (1 + p.curl)) + wag;
    });

    // yeux (fermés pendant le sommeil et les caresses)
    const blink = p.eyes > 0.5 && t % 4.3 < 0.12 ? 0.15 : 1;
    this.eyes.forEach((e) => (e.scale.y = Math.max(0.12, p.eyes * blink)));

    // oreille qui bouge
    const tw = this.earTwitch > 0 ? Math.sin((0.6 - this.earTwitch) * 30) * 0.5 : 0;
    this.ears[0].rotation.z = tw;
    this.ears[1].rotation.z = 0;
  }
}

function angleDiff(a: number, b: number): number {
  let d = b - a;
  while (d > Math.PI) d -= Math.PI * 2;
  while (d < -Math.PI) d += Math.PI * 2;
  return d;
}
function turnTowards(a: number, b: number, step: number): number {
  const d = angleDiff(a, b);
  return a + Math.sign(d) * Math.min(Math.abs(d), step);
}

/** Pelage tigré : base brune, ventre clair en bas, rayures sombres irrégulières sur le dessus. */
function tabbyTexture(base: string, belly: string, bellyFrom: number): THREE.CanvasTexture {
  return canvasTexture(512, 256, (g, w, h) => {
    const grad = g.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, '#5e4a3d');
    grad.addColorStop(0.25, base);
    grad.addColorStop(1 - bellyFrom, base);
    grad.addColorStop(1, belly);
    g.fillStyle = grad;
    g.fillRect(0, 0, w, h);
    g.strokeStyle = 'rgba(58,42,32,0.55)';
    g.lineCap = 'round';
    for (let i = 0; i < 22; i++) {
      const x = (i / 22) * w + Math.sin(i * 7.3) * 6;
      g.lineWidth = 5 + (i % 3) * 3;
      g.beginPath();
      g.moveTo(x, 0);
      g.bezierCurveTo(x + 10, h * 0.2, x - 8, h * 0.35, x + 4, h * (0.55 - (i % 4) * 0.04));
      g.stroke();
    }
    // léger grain de poil
    for (let i = 0; i < 2500; i++) {
      g.fillStyle = i % 2 ? 'rgba(255,240,225,0.06)' : 'rgba(40,28,20,0.08)';
      g.fillRect(Math.random() * w, Math.random() * h, 1, 3);
    }
  });
}
