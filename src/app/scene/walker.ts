import * as THREE from 'three';
import { CircleCollider, colliders, INSIDE, RectCollider } from './room-layout';

export type MoveKey = 'forward' | 'back' | 'left' | 'right';

/**
 * Déplacement à la première personne : position au sol, orientation (lacet / tangage),
 * collisions avec glissement le long des obstacles, léger balancement de marche.
 */
export class Walker {
  readonly pos = new THREE.Vector2(INSIDE.start.x, INSIDE.start.z);
  yaw = 0;
  pitch = 0;
  /** Commande analogique (joystick), -1 → 1 sur chaque axe. */
  readonly stick = new THREE.Vector2();
  private keys = new Set<MoveKey>();
  private vel = new THREE.Vector2();
  private bobPhase = 0;
  private bobAmount = 0;
  private readonly rects: RectCollider[];
  private readonly circles: CircleCollider[];
  private readonly r = INSIDE.bodyRadius;

  constructor() {
    const c = colliders();
    this.rects = c.rects;
    this.circles = c.circles;
    this.lookAtPoint(new THREE.Vector3(...INSIDE.lookAt));
  }

  /** Oriente le regard vers un point de la pièce. */
  lookAtPoint(p: THREE.Vector3) {
    const dx = p.x - this.pos.x;
    const dz = p.z - this.pos.y;
    const dy = p.y - INSIDE.eyeHeight;
    this.yaw = Math.atan2(-dx, -dz);
    this.pitch = Math.atan2(dy, Math.hypot(dx, dz));
  }

  press(k: MoveKey, down: boolean) {
    if (down) this.keys.add(k);
    else this.keys.delete(k);
  }

  /** Relâche toutes les commandes et arrête net (fiche ouverte, changement de vue). */
  release() {
    this.keys.clear();
    this.stick.set(0, 0);
    this.vel.set(0, 0);
    this.bobAmount = 0;
  }

  /** Regarder autour de soi (glisser) : on « attrape » la pièce. */
  look(dx: number, dy: number) {
    this.yaw += dx * 0.0042;
    this.pitch = THREE.MathUtils.clamp(this.pitch + dy * 0.0042, -1.15, 1.0);
  }

  /** Avance d'un pas de temps. Renvoie vrai si la position a changé. */
  update(dt: number, opts: { frozen: boolean; reducedMotion: boolean }): boolean {
    let f = 0;
    let s = 0;
    if (!opts.frozen) {
      f = (this.keys.has('forward') ? 1 : 0) - (this.keys.has('back') ? 1 : 0) + this.stick.y;
      s = (this.keys.has('right') ? 1 : 0) - (this.keys.has('left') ? 1 : 0) + this.stick.x;
    }
    const len = Math.hypot(f, s);
    if (len > 1) {
      f /= len;
      s /= len;
    }
    const sin = Math.sin(this.yaw);
    const cos = Math.cos(this.yaw);
    // avant = -z de la caméra, droite = +x
    const tx = (-sin * f + cos * s) * INSIDE.walkSpeed;
    const tz = (-cos * f - sin * s) * INSIDE.walkSpeed;
    const k = 1 - Math.exp(-dt * (opts.frozen ? 20 : 9));
    this.vel.x += (tx - this.vel.x) * k;
    this.vel.y += (tz - this.vel.y) * k;
    if (this.vel.lengthSq() < 1e-6) {
      this.vel.set(0, 0);
      this.bobAmount = Math.max(0, this.bobAmount - dt * 3);
      return false;
    }
    const before = this.pos.clone();
    // sous-pas pour ne jamais traverser un obstacle fin
    const steps = Math.max(1, Math.ceil((this.vel.length() * dt) / 0.05));
    for (let i = 0; i < steps; i++) this.move((this.vel.x * dt) / steps, (this.vel.y * dt) / steps);
    const moved = before.distanceTo(this.pos);
    if (!opts.reducedMotion) {
      this.bobPhase += (moved / 0.7) * Math.PI; // un balancement par pas d'environ 70 cm
      this.bobAmount = Math.min(1, this.bobAmount + dt * 4);
    } else {
      this.bobAmount = 0;
    }
    if (moved < 1e-4) this.bobAmount = Math.max(0, this.bobAmount - dt * 3);
    return moved > 1e-5;
  }

  /** Place la caméra (position, orientation, balancement). */
  apply(camera: THREE.PerspectiveCamera, target?: THREE.Vector3) {
    const bob = this.bobAmount;
    camera.position.set(
      this.pos.x,
      INSIDE.eyeHeight + Math.abs(Math.sin(this.bobPhase)) * 0.022 * bob - 0.011 * bob,
      this.pos.y,
    );
    camera.rotation.order = 'YXZ';
    camera.rotation.set(this.pitch, this.yaw, Math.sin(this.bobPhase) * 0.004 * bob);
    if (target) target.copy(camera.position).add(this.forward());
  }

  forward(): THREE.Vector3 {
    const cp = Math.cos(this.pitch);
    return new THREE.Vector3(
      -Math.sin(this.yaw) * cp,
      Math.sin(this.pitch),
      -Math.cos(this.yaw) * cp,
    );
  }

  /** Vue (position + point regardé) sans balancement, pour les transitions. */
  view(): { position: THREE.Vector3; target: THREE.Vector3 } {
    const position = new THREE.Vector3(this.pos.x, INSIDE.eyeHeight, this.pos.y);
    return { position, target: position.clone().add(this.forward()) };
  }

  /** Vrai si un cercle de rayon `r` centré en (x, z) touche un obstacle. */
  blocked(x: number, z: number): boolean {
    const r = this.r;
    for (const b of this.rects)
      if (x > b.minX - r && x < b.maxX + r && z > b.minZ - r && z < b.maxZ + r) return true;
    for (const c of this.circles) if (Math.hypot(x - c.x, z - c.z) < c.r + r) return true;
    return false;
  }

  /**
   * Déplacement axe par axe : si un axe est bloqué, l'autre continue,
   * ce qui fait glisser le long des murs et des meubles sans rester coincé.
   * Pour les obstacles ronds (chaise), on glisse le long de la tangente.
   */
  private move(dx: number, dz: number) {
    const p = this.pos;
    const circle = this.circles.find(
      (c) => Math.hypot(p.x + dx - c.x, p.y + dz - c.z) < c.r + this.r,
    );
    if (circle) {
      // retirer la composante qui rentre dans le cercle
      const nx = p.x - circle.x;
      const nz = p.y - circle.z;
      const nl = Math.hypot(nx, nz) || 1;
      const dot = (dx * nx + dz * nz) / nl;
      if (dot < 0) {
        dx -= (dot * nx) / nl;
        dz -= (dot * nz) / nl;
      }
    }
    if (!this.blocked(p.x + dx, p.y)) p.x += dx;
    if (!this.blocked(p.x, p.y + dz)) p.y += dz;
  }
}
