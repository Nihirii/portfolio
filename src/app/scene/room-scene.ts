import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { INTERACTIVE_OBJECTS, objectById } from '../data/interactive-objects';
import { InteractiveObjectId } from '../data/types';
import { buildRoom, RoomBuild } from './build-room';
import { Hiki, PetReaction } from './hiki';
import { OVERVIEW } from './room-layout';

export interface RoomSceneCallbacks {
  /** Survol à la souris (null = rien). */
  hover(id: InteractiveObjectId | null): void;
  /** Clic, toucher ou activation. */
  activate(id: InteractiveObjectId): void;
  /** Une caresse a été donnée à Hiki (pour les cœurs, le son et l'annonce). */
  petted(reaction: PetReaction): void;
  /** Début / fin du geste de caresse. */
  petGesture(active: boolean): void;
  /** Appelé après chaque image, pour placer les éléments HTML au-dessus de la scène. */
  frame(): void;
}

interface View {
  position: THREE.Vector3;
  target: THREE.Vector3;
}

export class RoomScene {
  private renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera: THREE.PerspectiveCamera;
  private controls: OrbitControls;
  private composer: EffectComposer;
  private outline: OutlinePass;
  private room: RoomBuild;
  /** @internal exposé pour les tests en mode dev */
  readonly hiki = new Hiki();
  private raycaster = new THREE.Raycaster();
  private timer = new THREE.Timer();
  private frameId = 0;
  private resizeObserver: ResizeObserver;

  private night = 0;
  private nightTarget = 0;
  private tvOn = false;
  private tvFlashTimer = 0;
  private reducedMotion = false;
  private inset = { right: 0, bottom: 0 };
  private insetTarget = { right: 0, bottom: 0 };

  private overview!: View;
  private savedView: View | null = null;
  private tween: { from: View; to: View; t: number; duration: number; done?: () => void } | null =
    null;
  private focused: InteractiveObjectId | null = null;

  private hovered: InteractiveObjectId | null = null;
  private keyboardHighlight: InteractiveObjectId | null = null;
  private pointer = new THREE.Vector2();
  private pointerDirty = false;
  private down: { x: number; y: number; time: number; id: number; onHiki: boolean } | null = null;
  private petting = false;
  private lastStroke = 0;
  private strokes = 0;
  private eggAnims: {
    obj: THREE.Object3D;
    t: number;
    kind: string;
    base: THREE.Euler;
    basePos: THREE.Vector3;
  }[] = [];

  constructor(
    private host: HTMLElement,
    private canvas: HTMLCanvasElement,
    private cb: RoomSceneCallbacks,
  ) {
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    // Fond transparent : le dégradé jour/nuit est géré en CSS derrière le canvas.
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.0;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFShadowMap;

    this.camera = new THREE.PerspectiveCamera(OVERVIEW.fov, 1, 0.05, 60);
    this.room = buildRoom();
    this.scene.add(this.room.root);
    this.scene.add(this.hiki.root);
    this.hiki.root.userData['interactiveId'] = 'hiki';
    this.room.interactives.set('hiki', this.hiki.root);

    this.controls = new OrbitControls(this.camera, canvas);
    this.controls.enablePan = false;
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.08;
    this.controls.rotateSpeed = 0.5;
    this.controls.zoomSpeed = 0.6;

    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    this.outline = new OutlinePass(new THREE.Vector2(256, 256), this.scene, this.camera);
    this.outline.edgeStrength = 3.2;
    this.outline.edgeGlow = 0.2;
    this.outline.edgeThickness = 1.2;
    this.outline.visibleEdgeColor.set('#ff8fb3');
    this.outline.hiddenEdgeColor.set('#b38fff');
    this.composer.addPass(this.outline);
    this.composer.addPass(new OutputPass());

    this.applyNight();
    this.resize();
    this.camera.position.copy(this.overview.position);
    this.controls.target.copy(this.overview.target);
    this.controls.update();

    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(host);
    // Capture sur l'hôte : on décide avant OrbitControls si le geste est une caresse.
    host.addEventListener('pointerdown', this.onPointerDown, { capture: true });
    host.addEventListener('pointermove', this.onPointerMove);
    window.addEventListener('pointerup', this.onPointerUp);
    window.addEventListener('pointercancel', this.onPointerUp);
    canvas.addEventListener('pointerleave', this.onPointerLeave);

    this.loop();
  }

  // ---------- API publique ----------

  /** `immediate` : pas de transition (premier affichage). */
  setNight(night: boolean, immediate = false) {
    this.nightTarget = night ? 1 : 0;
    if (immediate) {
      this.night = this.nightTarget;
      this.applyNight();
    }
  }

  setReducedMotion(v: boolean) {
    this.reducedMotion = v;
    this.hiki.setReducedMotion(v);
    this.controls.enableDamping = !v;
  }

  setTvOn(on: boolean) {
    this.tvOn = on;
  }

  /**
   * Décale le centre de l'image quand une fiche couvre une partie de l'écran,
   * pour que l'objet sélectionné reste visible à côté d'elle.
   */
  setInsets(right: number, bottom: number) {
    this.insetTarget = { right, bottom };
  }

  /** Clin d'œil HubTV : la TV s'illumine brièvement en mode TV. */
  flashTv() {
    this.tvFlashTimer = 2.8;
  }

  /** Contour + nom quand un objet reçoit le focus clavier. */
  highlight(id: InteractiveObjectId | null) {
    this.keyboardHighlight = id;
    this.updateOutline();
  }

  petHiki(): PetReaction {
    const r = this.hiki.pet(this.camera.position);
    this.cb.petted(r);
    return r;
  }

  hikiAsleep() {
    return this.hiki.isAsleep();
  }

  /** Rapproche la caméra d'un objet (selon `focus` dans les données). */
  focus(id: InteractiveObjectId) {
    const def = objectById(id);
    const obj = this.room.interactives.get(id);
    if (!def.focus || !obj) return;
    const center = this.centerOf(obj);
    const [ox, oy, oz] = def.focus.offset;
    // Écran étroit (portrait) : prendre plus de recul pour garder l'objet entier.
    const aspect = (this.host.clientWidth || 1) / (this.host.clientHeight || 1);
    const scale = (def.focus.distanceScale ?? 1) * (aspect < 1 ? 1.25 / Math.max(aspect, 0.45) : 1);
    const offset = new THREE.Vector3(ox, oy, oz).multiplyScalar(Math.min(scale, 2.6));
    const to: View = { target: center, position: center.clone().add(offset) };
    if (!this.savedView) this.savedView = this.currentView();
    this.focused = id;
    this.controls.enabled = false;
    this.startTween(to, 1.0);
  }

  /** Revient à la vue d'avant la sélection. */
  unfocus() {
    if (!this.savedView) return;
    const back = this.savedView;
    this.savedView = null;
    this.focused = null;
    this.startTween(back, 0.9, () => (this.controls.enabled = true));
  }

  resetView() {
    this.savedView = null;
    this.focused = null;
    this.startTween(this.overview, 0.9, () => (this.controls.enabled = true));
  }

  /** Position écran (px, relative à l'hôte) d'un objet ; null si derrière la caméra. */
  screenPosition(id: InteractiveObjectId, out: { x: number; y: number; visible: boolean }) {
    const obj = this.room.interactives.get(id);
    if (!obj) return (out.visible = false);
    const p = id === 'hiki' ? this.hiki.anchor(new THREE.Vector3()) : this.topOf(obj);
    p.project(this.camera);
    out.visible = p.z < 1 && Math.abs(p.x) < 1.1 && Math.abs(p.y) < 1.1 && this.isShown(obj);
    out.x = ((p.x + 1) / 2) * this.host.clientWidth;
    out.y = ((1 - p.y) / 2) * this.host.clientHeight;
    return out.visible;
  }

  /** Petite animation des easter eggs. */
  playEgg(id: InteractiveObjectId) {
    const obj = this.room.interactives.get(id);
    if (!obj || this.eggAnims.some((a) => a.obj === obj)) return;
    this.eggAnims.push({
      obj,
      t: 0,
      kind: id,
      base: obj.rotation.clone(),
      basePos: obj.position.clone(),
    });
    if (id === 'egg-controller') this.flashTv();
  }

  dispose() {
    cancelAnimationFrame(this.frameId);
    this.resizeObserver.disconnect();
    this.host.removeEventListener('pointerdown', this.onPointerDown, { capture: true });
    this.host.removeEventListener('pointermove', this.onPointerMove);
    window.removeEventListener('pointerup', this.onPointerUp);
    window.removeEventListener('pointercancel', this.onPointerUp);
    this.canvas.removeEventListener('pointerleave', this.onPointerLeave);
    this.controls.dispose();
    this.composer.dispose();
    this.scene.traverse((o) => {
      const m = o as THREE.Mesh;
      m.geometry?.dispose();
      const mats = Array.isArray(m.material) ? m.material : m.material ? [m.material] : [];
      mats.forEach((mm) => {
        Object.values(mm).forEach((v) => v instanceof THREE.Texture && v.dispose());
        mm.dispose();
      });
    });
    this.renderer.dispose();
  }

  // ---------- boucle ----------

  private loop = () => {
    this.frameId = requestAnimationFrame(this.loop);
    this.timer.update();
    const dt = Math.min(this.timer.getDelta(), 0.1);
    const t = this.timer.getElapsed();

    // jour / nuit progressif
    if (this.night !== this.nightTarget) {
      const speed = dt / (this.reducedMotion ? 0.8 : 2.6);
      this.night +=
        Math.sign(this.nightTarget - this.night) *
        Math.min(speed, Math.abs(this.nightTarget - this.night));
      this.applyNight();
    }

    // TV
    if (this.tvFlashTimer > 0) this.tvFlashTimer -= dt;
    const flashing = this.tvFlashTimer > 0;
    const screen = this.room.tv.screen;
    const wantMap = flashing ? this.room.tv.hubtv : this.room.tv.jellyfish;
    if (screen.emissiveMap !== wantMap) {
      screen.emissiveMap = wantMap;
      screen.needsUpdate = true;
    }
    const tvTarget = this.tvOn || flashing ? 1 : 0;
    screen.emissiveIntensity += (tvTarget - screen.emissiveIntensity) * Math.min(1, dt * 8);
    this.room.tv.light.intensity = screen.emissiveIntensity * 0.9;

    this.stepInsets(dt);
    if (this.tween) this.stepTween(dt);
    else this.controls.update();

    if (!this.reducedMotion) this.room.tickers.forEach((f) => f(t));
    this.hiki.update(dt, t, this.night);
    this.stepEggs(dt);
    this.updateWalls();
    if (this.pointerDirty) {
      this.pointerDirty = false;
      this.updateHover();
    }

    this.composer.render();
    this.cb.frame();
  };

  // ---------- caméra ----------

  private computeOverview(): View {
    const target = new THREE.Vector3(...OVERVIEW.target);
    const dir = new THREE.Vector3(...OVERVIEW.direction).normalize();
    const aspect = (this.host.clientWidth || 1) / (this.host.clientHeight || 1);
    // Assez de recul pour que la pièce entière tienne, même en portrait.
    const span = 7.4;
    const vfov = THREE.MathUtils.degToRad(this.camera.fov);
    const hfov = 2 * Math.atan(Math.tan(vfov / 2) * aspect);
    const fit = span / 2 / Math.tan(hfov / 2);
    const distance = Math.max(OVERVIEW.distance, fit * 0.92);
    return { target, position: target.clone().addScaledVector(dir, distance) };
  }

  private configureOrbit() {
    const dist = this.overview.position.distanceTo(this.overview.target);
    const offset = this.overview.position.clone().sub(this.overview.target);
    const sph = new THREE.Spherical().setFromVector3(offset);
    this.controls.minAzimuthAngle = sph.theta - 0.38;
    this.controls.maxAzimuthAngle = sph.theta + 0.38;
    this.controls.minPolarAngle = Math.max(0.35, sph.phi - 0.3);
    this.controls.maxPolarAngle = Math.min(1.25, sph.phi + 0.22);
    this.controls.minDistance = dist * 0.55;
    this.controls.maxDistance = dist * 1.12;
  }

  private currentView(): View {
    return { position: this.camera.position.clone(), target: this.controls.target.clone() };
  }

  private startTween(to: View, duration: number, done?: () => void) {
    this.tween = {
      from: this.currentView(),
      to,
      t: 0,
      duration: this.reducedMotion ? 0 : duration,
      done,
    };
  }

  private stepTween(dt: number) {
    const tw = this.tween!;
    tw.t = tw.duration === 0 ? 1 : Math.min(1, tw.t + dt / tw.duration);
    const e = tw.t < 0.5 ? 4 * tw.t ** 3 : 1 - (-2 * tw.t + 2) ** 3 / 2;
    this.camera.position.lerpVectors(tw.from.position, tw.to.position, e);
    this.controls.target.lerpVectors(tw.from.target, tw.to.target, e);
    this.camera.lookAt(this.controls.target);
    if (tw.t >= 1) {
      this.tween = null;
      tw.done?.();
      this.controls.update();
    }
  }

  private stepInsets(dt: number) {
    const k = this.reducedMotion ? 1 : Math.min(1, dt * 5);
    const i = this.inset;
    const t = this.insetTarget;
    if (Math.abs(i.right - t.right) < 0.5 && Math.abs(i.bottom - t.bottom) < 0.5) {
      if (i.right === t.right && i.bottom === t.bottom) return;
      i.right = t.right;
      i.bottom = t.bottom;
    } else {
      i.right += (t.right - i.right) * k;
      i.bottom += (t.bottom - i.bottom) * k;
    }
    this.applyViewOffset();
  }

  private applyViewOffset() {
    const w = this.host.clientWidth || 1;
    const h = this.host.clientHeight || 1;
    const { right, bottom } = this.inset;
    this.camera.aspect = (w + right) / (h + bottom);
    if (right < 0.5 && bottom < 0.5) this.camera.clearViewOffset();
    else this.camera.setViewOffset(w + right, h + bottom, right, bottom, w, h);
    this.camera.updateProjectionMatrix();
  }

  private resize() {
    const w = this.host.clientWidth || 1;
    const h = this.host.clientHeight || 1;
    this.renderer.setSize(w, h, false);
    this.composer.setSize(w, h);
    this.camera.aspect = w / h;
    this.applyViewOffset();
    const old = this.overview;
    this.overview = this.computeOverview();
    this.configureOrbit();
    // si l'on est en vue d'ensemble, suivre le nouveau cadrage
    if (old && !this.focused && !this.tween) {
      this.camera.position.copy(this.overview.position);
      this.controls.target.copy(this.overview.target);
      this.controls.update();
    }
  }

  // ---------- jour / nuit ----------

  private applyNight() {
    const n = this.night;
    const e = n * n * (3 - 2 * n);
    this.room.dimmables.forEach((d) => d.apply(e));
    this.renderer.toneMappingExposure = 1.0 + e * 0.25;
  }

  // ---------- murs façon diorama ----------

  private tmp = new THREE.Vector3();
  private updateWalls() {
    for (const w of this.room.walls) {
      w.group.visible = this.tmp.copy(this.camera.position).sub(w.center).dot(w.normal) < 0;
    }
  }

  // ---------- sélection ----------

  private onPointerDown = (e: PointerEvent) => {
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    this.setPointer(e);
    const id = this.pick();
    const onHiki = id === 'hiki';
    this.down = { x: e.clientX, y: e.clientY, time: performance.now(), id: e.pointerId, onHiki };
    if (onHiki && !this.focused) {
      // Le geste de caresse suspend la rotation de la caméra jusqu'au relâchement.
      this.petting = true;
      this.strokes = 0;
      this.controls.enabled = false;
      this.canvas.style.cursor = 'grabbing';
      this.cb.petGesture(true);
      e.preventDefault();
    }
  };

  private onPointerMove = (e: PointerEvent) => {
    this.setPointer(e);
    if (this.petting) {
      const now = performance.now();
      if (now - this.lastStroke > 280 && this.pick() === 'hiki' && this.down) {
        const moved = Math.hypot(e.clientX - this.down.x, e.clientY - this.down.y);
        if (moved > 8) {
          this.lastStroke = now;
          this.strokes++;
          this.petHiki();
        }
      }
      return;
    }
    if (e.pointerType === 'mouse') this.pointerDirty = true;
  };

  private onPointerUp = (e: PointerEvent) => {
    const d = this.down;
    this.down = null;
    if (!d || d.id !== e.pointerId) return;
    const moved = Math.hypot(e.clientX - d.x, e.clientY - d.y);
    const quick = performance.now() - d.time < 600;
    if (this.petting) {
      this.petting = false;
      this.canvas.style.cursor = '';
      if (!this.focused) this.controls.enabled = true;
      this.cb.petGesture(false);
      if (this.strokes === 0) this.petHiki(); // simple clic ou toucher
      return;
    }
    if (moved < 8 && quick && e.target === this.canvas) {
      this.setPointer(e);
      const id = this.pick();
      if (id) this.cb.activate(id);
    }
  };

  private onPointerLeave = () => {
    if (this.hovered) {
      this.hovered = null;
      this.updateOutline();
      this.cb.hover(null);
    }
    this.canvas.style.cursor = '';
  };

  private setPointer(e: PointerEvent) {
    const r = this.canvas.getBoundingClientRect();
    this.pointer.set(
      ((e.clientX - r.left) / r.width) * 2 - 1,
      -((e.clientY - r.top) / r.height) * 2 + 1,
    );
  }

  private pick(): InteractiveObjectId | null {
    this.raycaster.setFromCamera(this.pointer, this.camera);
    const hits = this.raycaster.intersectObjects([this.room.root, this.hiki.root], true);
    for (const h of hits) {
      if (!this.isShown(h.object)) continue;
      const mesh = h.object as THREE.Mesh;
      const material = mesh.material as THREE.Material | undefined;
      // les volumes de clic invisibles comptent, les autres objets invisibles non
      if (material && !material.visible && !h.object.userData['hitBox']) continue;
      let o: THREE.Object3D | null = h.object;
      while (o) {
        const id = o.userData['interactiveId'] as InteractiveObjectId | undefined;
        if (id) return id;
        o = o.parent;
      }
      // premier objet touché non interactif : il masque ce qui est derrière
      if (!h.object.userData['hitBox']) return null;
    }
    return null;
  }

  private isShown(o: THREE.Object3D): boolean {
    for (let p: THREE.Object3D | null = o; p; p = p.parent) if (!p.visible) return false;
    return true;
  }

  private updateHover() {
    if (this.focused || this.tween) return;
    const id = this.pick();
    if (id !== this.hovered) {
      this.hovered = id;
      this.updateOutline();
      this.cb.hover(id);
    }
    this.canvas.style.cursor = id ? (id === 'hiki' ? 'grab' : 'pointer') : '';
  }

  private updateOutline() {
    const ids = [this.hovered, this.keyboardHighlight].filter((x): x is InteractiveObjectId => !!x);
    this.outline.selectedObjects = ids
      .filter((id) => INTERACTIVE_OBJECTS.find((o) => o.id === id)?.primary)
      .map((id) => this.room.interactives.get(id)!)
      .filter(Boolean);
  }

  private centerOf(obj: THREE.Object3D): THREE.Vector3 {
    const b = new THREE.Box3().setFromObject(obj);
    return b.getCenter(new THREE.Vector3());
  }

  private topOf(obj: THREE.Object3D): THREE.Vector3 {
    const b = new THREE.Box3().setFromObject(obj);
    const c = b.getCenter(new THREE.Vector3());
    c.y = b.max.y + 0.04;
    return c;
  }

  private stepEggs(dt: number) {
    this.eggAnims = this.eggAnims.filter((a) => {
      a.t += dt;
      const k = Math.min(1, a.t / 1.2);
      const fade = 1 - k;
      if (a.kind === 'egg-plush') {
        a.obj.position.y = a.basePos.y + Math.sin(k * Math.PI) * 0.12;
        a.obj.rotation.y = a.base.y + k * Math.PI * 2;
      } else if (a.kind === 'egg-controller') {
        a.obj.position.x = a.basePos.x + Math.sin(a.t * 70) * 0.006 * fade;
        a.obj.rotation.y = a.base.y + Math.sin(a.t * 55) * 0.08 * fade;
      } else {
        a.obj.rotation.z = a.base.z + Math.sin(a.t * 14) * 0.12 * fade;
      }
      if (k >= 1) {
        a.obj.position.copy(a.basePos);
        a.obj.rotation.copy(a.base);
        return false;
      }
      return true;
    });
  }
}
