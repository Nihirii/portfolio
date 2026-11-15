import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { GTAOPass } from 'three/examples/jsm/postprocessing/GTAOPass.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { INTERACTIVE_OBJECTS, objectById } from '../data/interactive-objects';
import { InteractiveObjectId } from '../data/types';
import { applyBake, BakeAssets, BakeControls } from './bake/apply-bake';
import { buildRoom, RoomBuild } from './build-room';
import { DecorAssets } from './decor-assets';
import { Hiki, PetReaction } from './hiki';
import { INSIDE, OVERVIEW, PLACES, PlaceId } from './room-layout';
import { MoveKey, Walker } from './walker';

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
  fov?: number;
}

/** `inside` : marche à la première personne ; `top` : diorama vu d'en haut. */
export type ViewMode = 'inside' | 'top';

export { loadBake } from './bake/apply-bake';
export { loadDecorAssets } from './decor-assets';

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
  /** @internal déplacement à la première personne (exposé pour les tests en mode dev) */
  readonly walker = new Walker();
  private looking: { id: number; x: number; y: number } | null = null;
  private inputEnabled = true;
  private pointerInside = false;
  private keyOf = new Map<string, MoveKey>();
  private raycaster = new THREE.Raycaster();
  private timer = new THREE.Timer();
  private frameId = 0;
  private aoPass: GTAOPass | null = null;
  /** @internal lumière pré-calculée (null = rendu temps réel) ; exposé pour les tests en mode dev */
  readonly bake: BakeControls | null;
  /** Mesure des premières images : coupe l'occlusion ambiante si la machine peine. */
  private perf = { frames: 0, time: 0 };
  private resizeObserver: ResizeObserver;

  private night = 0;
  private nightTarget = 0;
  private tvOn = false;
  private tvFlashTimer = 0;
  private tvFlashKind: 'hubtv' | 'retro' = 'hubtv';
  private reducedMotion = false;
  /** Lampe à lave : null = automatique (allumée le soir), sinon choix de l'utilisatrice. */
  private lavaOverride: boolean | null = null;
  private inset = { right: 0, bottom: 0 };
  private insetTarget = { right: 0, bottom: 0 };

  private overview!: View;
  private viewMode: ViewMode = 'inside';
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
  /** Position de repos des objets, et intensité de l'animation de survol (0 → 1). */
  private rest = new Map<
    InteractiveObjectId,
    { pos: THREE.Vector3; rot: THREE.Euler; lift: number }
  >();
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
    bakeAssets: BakeAssets | null = null,
    decorAssets: DecorAssets = new Map(),
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
    this.room = buildRoom(decorAssets);
    // lumière pré-calculée (Blender) : ombres et occlusion déjà dans les atlas
    this.bake = bakeAssets ? applyBake(this.room.root, bakeAssets) : null;
    if (this.bake) {
      this.renderer.shadowMap.enabled = false;
      this.hiki.setContactShadow(this.scene, true);
    }
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

    // Éclairage d'ambiance doux (reflets, cuir, plastiques) à partir d'une pièce virtuelle
    const pmrem = new THREE.PMREMGenerator(this.renderer);
    this.scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    pmrem.dispose();

    // Rendu en multi-échantillonnage : sans ça, la chaîne de post-traitement perd l'anticrénelage
    const target = new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType, samples: 4 });
    this.composer = new EffectComposer(this.renderer, target);
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    // Occlusion ambiante (ombres de contact) sur ordinateur ; coupée sur mobile pour la fluidité
    const coarse = typeof matchMedia !== 'undefined' && matchMedia('(pointer: coarse)').matches;
    if (!coarse && !this.bake) {
      const ao = new GTAOPass(this.scene, this.camera, 1, 1);
      ao.output = GTAOPass.OUTPUT.Default;
      ao.blendIntensity = 0.75;
      ao.updateGtaoMaterial({ radius: 0.35, distanceExponent: 1.5, thickness: 1, scale: 1 });
      this.composer.addPass(ao);
      this.aoPass = ao;
    }
    this.outline = new OutlinePass(new THREE.Vector2(256, 256), this.scene, this.camera);
    this.outline.edgeStrength = 3.2;
    this.outline.edgeGlow = 0.2;
    this.outline.edgeThickness = 1.2;
    this.outline.visibleEdgeColor.set('#ff8fb3');
    this.outline.hiddenEdgeColor.set('#b38fff');
    this.composer.addPass(this.outline);
    this.composer.addPass(new OutputPass());

    this.room.interactives.forEach((obj, id) => {
      if (id !== 'hiki')
        this.rest.set(id, { pos: obj.position.clone(), rot: obj.rotation.clone(), lift: 0 });
    });

    this.applyNight();
    this.resize();
    this.camera.position.copy(this.overview.position);
    this.controls.target.copy(this.overview.target);
    this.camera.fov = this.overview.fov ?? OVERVIEW.fov;
    this.applyViewOffset();
    this.controls.update();

    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(host);
    // Capture sur l'hôte : on décide avant OrbitControls si le geste est une caresse.
    host.addEventListener('pointerdown', this.onPointerDown, { capture: true });
    host.addEventListener('pointermove', this.onPointerMove);
    window.addEventListener('pointerup', this.onPointerUp);
    window.addEventListener('pointercancel', this.onPointerUp);
    canvas.addEventListener('pointerleave', this.onPointerLeave);
    canvas.addEventListener('pointerenter', this.onPointerEnter);
    window.addEventListener('keydown', this.onKeyDown);
    window.addEventListener('keyup', this.onKeyUp);
    window.addEventListener('blur', this.onBlur);

    this.loop();
  }

  // ---------- API publique ----------

  /** `immediate` : pas de transition (premier affichage). */
  setNight(night: boolean, immediate = false) {
    if ((night ? 1 : 0) !== this.nightTarget) this.lavaOverride = null; // retour au mode automatique
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

  /** Marche désactivée quand une fiche est ouverte (le clavier sert alors à la fiche). */
  setInputEnabled(enabled: boolean) {
    this.inputEnabled = enabled;
    if (!enabled) {
      this.walker.release();
      this.keyOf.clear();
      this.looking = null;
    }
  }

  /** Joystick tactile : x = pas de côté, y = avancer (-1 → 1). */
  setMoveInput(x: number, y: number) {
    this.walker.stick.set(x, y);
  }

  /** Allume ou éteint la lampe à lave ; renvoie le nouvel état. */
  toggleLava(): boolean {
    this.lavaOverride = !this.room.lava.on;
    this.room.lava.on = this.lavaOverride;
    return this.lavaOverride;
  }

  /** Clin d'œil HubTV : la TV s'illumine brièvement en mode TV. */
  flashTv(kind: 'hubtv' | 'retro' = 'hubtv') {
    this.tvFlashKind = kind;
    this.tvFlashTimer = kind === 'retro' ? 4.5 : 2.8;
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
    const to: View = {
      target: center,
      position: center.clone().add(offset),
      fov: this.overview.fov,
    };
    if (!this.savedView) {
      if (this.viewMode === 'inside') {
        this.walker.release();
        this.savedView = { ...this.walker.view(), fov: this.camera.fov };
      } else {
        this.savedView = this.currentView();
      }
    }
    this.focused = id;
    this.controls.enabled = false;
    this.startTween(to, 0.6);
  }

  /** Revient à la vue d'avant la sélection. */
  unfocus() {
    if (!this.savedView) return;
    const back = this.savedView;
    this.savedView = null;
    this.focused = null;
    this.startTween(back, 0.5, () => this.enterModeControls());
  }

  /** Après une transition : marche (pièce) ou orbite limitée (vue d'en haut). */
  private enterModeControls() {
    if (this.viewMode === 'inside') {
      this.controls.enabled = false;
      this.walker.apply(this.camera, this.controls.target);
    } else {
      this.configureOrbit();
      this.controls.enabled = true;
      this.controls.update();
    }
  }

  /** Passe de la vue intérieure à la vue d'en haut (et inversement). */
  setViewMode(mode: ViewMode, immediate = false) {
    if (mode === this.viewMode && !immediate) return;
    this.viewMode = mode;
    this.overview = this.computeOverview();
    if (this.focused) {
      // on y reviendra à la fermeture de la fiche
      this.savedView = this.overview;
      return;
    }
    this.controls.enabled = false;
    this.walker.release();
    if (immediate) {
      this.camera.position.copy(this.overview.position);
      this.controls.target.copy(this.overview.target);
      this.camera.fov = this.overview.fov ?? OVERVIEW.fov;
      this.applyViewOffset();
      this.enterModeControls();
      return;
    }
    // au retour dans la pièce, on reprend la dernière position (le Walker la garde)
    this.startTween(this.overview, 0.8, () => this.enterModeControls());
  }

  /**
   * Se rend à un endroit du salon (entrée, bureau, KALLAX, TV) : courte transition, puis la marche
   * reprend de là. Depuis la vue d'ensemble, on redescend dans la pièce.
   */
  travel(place: PlaceId) {
    const p = PLACES[place];
    this.savedView = null;
    this.focused = null;
    this.viewMode = 'inside';
    this.controls.enabled = false;
    this.walker.release();
    this.walker.pos.set(p.x, p.z);
    this.walker.lookAtPoint(new THREE.Vector3(...p.lookAt));
    const aspect = (this.host.clientWidth || 1) / (this.host.clientHeight || 1);
    this.overview = { ...this.walker.view(), fov: aspect < 1 ? INSIDE.fovPortrait : INSIDE.fov };
    this.startTween(this.overview, 0.7, () => this.enterModeControls());
  }

  resetView() {
    this.savedView = null;
    this.focused = null;
    this.startTween(this.overview, 0.6, () => this.enterModeControls());
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

  /** Côté de l'écran où se trouve un objet hors champ : -1 à gauche, 1 à droite. */
  sideOf(id: InteractiveObjectId): -1 | 1 {
    const obj = this.room.interactives.get(id);
    if (!obj) return 1;
    const p = this.centerOf(obj).applyMatrix4(this.camera.matrixWorldInverse);
    return p.x < 0 ? -1 : 1;
  }

  /** Petite animation des easter eggs. */
  playEgg(id: InteractiveObjectId) {
    const obj = this.room.interactives.get(id);
    if (!obj || this.eggAnims.some((a) => a.obj === obj)) return;
    this.eggAnims.push({
      obj,
      t: 0,
      kind: id,
      base: this.rest.get(id)?.rot.clone() ?? obj.rotation.clone(),
      basePos: this.rest.get(id)?.pos.clone() ?? obj.position.clone(),
    });
    if (id === 'egg-controller') this.flashTv();
    if (id === 'egg-bowl') this.hiki.goTo('bowl');
    if (id === 'egg-aquarium') this.hiki.goTo('aquarium');
    if (id === 'egg-retro') this.flashTv('retro');
    this.room.eggEffects.get(id)?.();
  }

  dispose() {
    cancelAnimationFrame(this.frameId);
    this.resizeObserver.disconnect();
    this.host.removeEventListener('pointerdown', this.onPointerDown, { capture: true });
    this.host.removeEventListener('pointermove', this.onPointerMove);
    window.removeEventListener('pointerup', this.onPointerUp);
    window.removeEventListener('pointercancel', this.onPointerUp);
    this.canvas.removeEventListener('pointerleave', this.onPointerLeave);
    this.canvas.removeEventListener('pointerenter', this.onPointerEnter);
    window.removeEventListener('keydown', this.onKeyDown);
    window.removeEventListener('keyup', this.onKeyUp);
    window.removeEventListener('blur', this.onBlur);
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
    this.checkPerformance(this.timer.getDelta());

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
    const wantMap = flashing ? this.room.tv[this.tvFlashKind] : this.room.tv.jellyfish;
    if (screen.emissiveMap !== wantMap) {
      screen.emissiveMap = wantMap;
      screen.needsUpdate = true;
    }
    const tvTarget = this.tvOn || flashing ? 1 : 0;
    screen.emissiveIntensity += (tvTarget - screen.emissiveIntensity) * Math.min(1, dt * 8);
    this.room.tv.light.intensity = screen.emissiveIntensity * 0.9;

    // lampe à lave : allumée automatiquement le soir, sauf choix contraire
    this.room.lava.on = this.lavaOverride ?? this.nightTarget > 0.5;
    this.room.lava.step(dt, t, this.night, this.reducedMotion);

    this.stepInsets(dt);
    if (this.tween) this.stepTween(dt);
    else if (this.viewMode === 'inside') {
      if (!this.focused) {
        const moved = this.walker.update(dt, {
          frozen: this.petting || !this.inputEnabled,
          reducedMotion: this.reducedMotion,
        });
        this.walker.apply(this.camera, this.controls.target);
        // ce qui est sous le curseur change quand on marche
        if (moved && this.pointerInside) this.pointerDirty = true;
      }
    } else this.controls.update();

    if (!this.reducedMotion) this.room.tickers.forEach((f) => f(t));
    this.hiki.update(dt, t, this.night);
    this.stepHover(dt, t);
    this.stepEggs(dt);
    this.updateWalls();
    if (this.pointerDirty) {
      this.pointerDirty = false;
      this.updateHover();
    }

    this.composer.render();
    this.cb.frame();
  };

  private checkPerformance(raw: number) {
    if (!this.aoPass?.enabled || this.perf.frames > 90) return;
    this.perf.frames++;
    if (this.perf.frames <= 10) return; // ignorer le démarrage
    this.perf.time += raw;
    if (this.perf.frames === 90 && this.perf.time / 80 > 1 / 35) {
      this.aoPass.enabled = false; // moins de 35 images/s : on privilégie la fluidité
    }
  }

  // ---------- caméra ----------

  private computeOverview(): View {
    const aspectNow = (this.host.clientWidth || 1) / (this.host.clientHeight || 1);
    if (this.viewMode === 'inside') {
      return { ...this.walker.view(), fov: aspectNow < 1 ? INSIDE.fovPortrait : INSIDE.fov };
    }
    const target = new THREE.Vector3(...OVERVIEW.target);
    const dir = new THREE.Vector3(...OVERVIEW.direction).normalize();
    const aspect = (this.host.clientWidth || 1) / (this.host.clientHeight || 1);
    // Assez de recul pour que la pièce entière tienne, même en portrait.
    const span = 7.4;
    const vfov = THREE.MathUtils.degToRad(OVERVIEW.fov);
    const hfov = 2 * Math.atan(Math.tan(vfov / 2) * aspect);
    const fit = span / 2 / Math.tan(hfov / 2);
    const distance = Math.max(OVERVIEW.distance, fit * 0.92);
    return { target, position: target.clone().addScaledVector(dir, distance), fov: OVERVIEW.fov };
  }

  private configureOrbit() {
    if (this.viewMode === 'inside') return; // marche : OrbitControls inactif
    this.controls.rotateSpeed = 0.5;
    this.controls.enableZoom = true;
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
    return {
      position: this.camera.position.clone(),
      target: this.controls.target.clone(),
      fov: this.camera.fov,
    };
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
    if (tw.from.fov !== undefined && tw.to.fov !== undefined) {
      this.camera.fov = tw.from.fov + (tw.to.fov - tw.from.fov) * e;
      this.applyViewOffset();
    }
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
      this.camera.fov = this.overview.fov ?? OVERVIEW.fov;
      this.applyViewOffset();
      if (this.viewMode === 'inside') {
        this.walker.apply(this.camera, this.controls.target);
      } else {
        this.camera.position.copy(this.overview.position);
        this.controls.target.copy(this.overview.target);
        this.controls.update();
      }
    }
  }

  // ---------- jour / nuit ----------

  private applyNight() {
    const n = this.night;
    const e = n * n * (3 - 2 * n);
    this.room.dimmables.forEach((d) => d.apply(e));
    this.renderer.toneMappingExposure = 1.0 + e * 0.25;
    if (this.bake) this.bake.night.value = e;
    this.scene.environmentIntensity = 0.45 - e * 0.37;
  }

  // ---------- murs façon diorama ----------

  private tmp = new THREE.Vector3();
  private updateWalls() {
    for (const w of this.room.walls) {
      // marge de 50 cm : le mur reste visible quand on se tient dans le renfoncement de l'entrée
      w.group.visible = this.tmp.copy(this.camera.position).sub(w.center).dot(w.normal) < 0.5;
    }
  }

  // ---------- sélection ----------

  private onPointerDown = (e: PointerEvent) => {
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    // joystick et autres contrôles HTML : ce n'est pas un geste sur la scène
    if (e.target !== this.canvas) return;
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
      return;
    }
    // vue de la pièce : glisser pour regarder autour de soi
    if (this.viewMode === 'inside' && !this.focused && !this.tween && this.inputEnabled) {
      this.looking = { id: e.pointerId, x: e.clientX, y: e.clientY };
      // garder le geste même si le pointeur sort de la scène
      try {
        this.canvas.setPointerCapture(e.pointerId);
      } catch {
        /* pointeur déjà relâché */
      }
    }
  };

  private onPointerMove = (e: PointerEvent) => {
    if (this.looking && e.pointerId === this.looking.id && !this.petting) {
      this.walker.look(e.clientX - this.looking.x, e.clientY - this.looking.y);
      this.looking.x = e.clientX;
      this.looking.y = e.clientY;
    }
    if (e.target !== this.canvas && !this.petting && !this.looking) return;
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
    if (this.looking?.id === e.pointerId) this.looking = null;
    const d = this.down;
    this.down = null;
    if (!d || d.id !== e.pointerId) return;
    const moved = Math.hypot(e.clientX - d.x, e.clientY - d.y);
    const quick = performance.now() - d.time < 600;
    if (this.petting) {
      this.petting = false;
      this.canvas.style.cursor = '';
      if (!this.focused && this.viewMode === 'top') this.controls.enabled = true;
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

  private onPointerEnter = () => {
    this.pointerInside = true;
  };

  private onKeyDown = (e: KeyboardEvent) => {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (this.viewMode !== 'inside' || this.focused || !this.inputEnabled) return;
    const t = e.target as HTMLElement | null;
    if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
    const k = moveKeyFor(e.key);
    if (!k) return;
    e.preventDefault();
    this.keyOf.set(e.code, k);
    this.walker.press(k, true);
  };

  private onKeyUp = (e: KeyboardEvent) => {
    const k = this.keyOf.get(e.code) ?? moveKeyFor(e.key);
    this.keyOf.delete(e.code);
    if (k && ![...this.keyOf.values()].includes(k)) this.walker.press(k, false);
  };

  private onBlur = () => {
    this.walker.release();
    this.keyOf.clear();
    this.looking = null;
  };

  private onPointerLeave = () => {
    this.pointerInside = false;
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
      // vitres et objets transparents (portes vitrées des BESTÅ…) : le clic passe à travers
      if (material?.transparent && !h.object.userData['hitBox']) continue;
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
      if (id === 'hiki' && !this.reducedMotion) this.hiki.notice();
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

  /**
   * Au survol (ou au focus clavier), l'objet se soulève légèrement et flotte :
   * on voit tout de suite qu'il est interactif. Désactivé en mouvement réduit.
   */
  private stepHover(dt: number, t: number) {
    const k = Math.min(1, dt * 10);
    this.rest.forEach((r, id) => {
      const obj = this.room.interactives.get(id)!;
      if (this.eggAnims.some((a) => a.obj === obj)) return;
      const active =
        !this.reducedMotion &&
        !this.focused &&
        (id === this.hovered || id === this.keyboardHighlight);
      const target = active ? 1 : 0;
      if (target === 0 && r.lift === 0) return;
      r.lift += (target - r.lift) * k;
      if (target === 0 && r.lift < 0.002) r.lift = 0;
      obj.position.y = r.pos.y + r.lift * (0.035 + Math.sin(t * 4) * 0.008);
    });
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
      } else if (a.kind === 'egg-guitar' || a.kind === 'egg-sunflowers') {
        a.obj.rotation.z = a.base.z + Math.sin(a.t * 9) * 0.06 * fade;
      } else if (
        a.kind === 'egg-bowl' ||
        a.kind === 'egg-duck' ||
        a.kind === 'egg-teardown' ||
        a.kind === 'egg-retro'
      ) {
        a.obj.position.y = a.basePos.y + Math.abs(Math.sin(a.t * 10)) * 0.015 * fade;
      } else if (a.kind === 'egg-eva-figure') {
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

/** ZQSD (AZERTY), WASD (QWERTY) et flèches. */
function moveKeyFor(key: string): MoveKey | null {
  switch (key.toLowerCase()) {
    case 'z':
    case 'w':
    case 'arrowup':
      return 'forward';
    case 's':
    case 'arrowdown':
      return 'back';
    case 'q':
    case 'a':
    case 'arrowleft':
      return 'left';
    case 'd':
    case 'arrowright':
      return 'right';
    default:
      return null;
  }
}
