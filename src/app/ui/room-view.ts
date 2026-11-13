import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  ElementRef,
  inject,
  isDevMode,
  NgZone,
  OnDestroy,
  signal,
  untracked,
  viewChild,
  viewChildren,
} from '@angular/core';
import { PortfolioState } from '../core/portfolio-state';
import { GuitarSound } from '../core/guitar-sound';
import { PurrSound } from '../core/purr';
import { INTERACTIVE_OBJECTS, objectById, objectForSheet } from '../data/interactive-objects';
import { InteractiveObject, InteractiveObjectId } from '../data/types';
import type { RoomScene } from '../scene/room-scene';

/**
 * Le salon 3D. La scène Three.js est chargée à la demande (chunk séparé).
 * Chaque objet interactif a aussi un vrai bouton HTML, placé au-dessus de l'objet :
 * on peut parcourir le salon au clavier (Tab) et avec un lecteur d'écran.
 */
@Component({
  selector: 'app-room-view',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="stage" #host [class.is-focused]="state.anyPanelOpen()">
      <canvas #canvas class="canvas" aria-hidden="true"></canvas>

      @if (!ready()) {
        <p class="loading" role="status">Le salon s'installe…</p>
      }

      <h1 class="sr-only">Le salon de Léna Simonin, développeuse front-end</h1>
      <ul class="hotspots" aria-label="Objets du salon">
        @for (o of objects; track o.id) {
          <li>
            <button
              #hot
              type="button"
              class="hotspot"
              [attr.data-id]="o.id"
              [attr.aria-label]="ariaLabel(o)"
              (focus)="onFocus(o.id)"
              (blur)="onBlur()"
              (click)="activate(o.id)"
            ></button>
          </li>
        }
      </ul>

      <div class="label" #label aria-hidden="true"></div>
      <div class="hearts" #hearts aria-hidden="true"></div>

      @if (walking() && touch() && !state.anyPanelOpen()) {
        <div
          class="stick"
          #stick
          role="presentation"
          (pointerdown)="stickStart($event)"
          (pointermove)="stickMove($event)"
          (pointerup)="stickEnd($event)"
          (pointercancel)="stickEnd($event)"
        >
          <span class="stick__knob" [style.transform]="knob()"></span>
        </div>
      }

      @if (helpOpen() && !state.anyPanelOpen()) {
        <section class="help" aria-labelledby="help-title">
          <h2 id="help-title" class="help__title">Se déplacer dans le salon</h2>
          @if (!walking()) {
            <p>Glissez pour orienter la vue, molette ou pincement pour zoomer.</p>
          } @else if (touch()) {
            <ul>
              <li><b>Marcher</b> : joystick en bas à gauche</li>
              <li><b>Regarder</b> : glissez sur la scène</li>
              <li><b>Ouvrir</b> : touchez un objet · glissez sur Hiki pour la caresser</li>
            </ul>
          } @else {
            <ul>
              <li>
                <b>Marcher</b> : <kbd>Z</kbd><kbd>Q</kbd><kbd>S</kbd><kbd>D</kbd>, <kbd>W</kbd
                ><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> ou les flèches
              </li>
              <li><b>Regarder</b> : cliquez-glissez</li>
              <li>
                <b>Ouvrir</b> : cliquez sur un objet, ou <kbd>Tab</kbd> puis <kbd>Entrée</kbd>
              </li>
            </ul>
          }
          <button type="button" class="chip chip--primary help__ok" (click)="closeHelp()">
            Compris
          </button>
        </section>
      }
      @if (!helpOpen() && !state.anyPanelOpen()) {
        <button
          type="button"
          class="help-toggle"
          aria-label="Aide aux commandes"
          (click)="helpOpen.set(true)"
        >
          ?
        </button>
      }
    </div>
  `,
  styleUrl: './room-view.scss',
})
export class RoomView implements AfterViewInit, OnDestroy {
  protected readonly state = inject(PortfolioState);
  private readonly purr = inject(PurrSound);
  private readonly guitar = inject(GuitarSound);
  private readonly zone = inject(NgZone);

  protected readonly objects = INTERACTIVE_OBJECTS;
  protected readonly ready = signal(false);
  /** Vue de la pièce (marche à la première personne) ou vue d'en haut. */
  protected readonly walking = computed(() => !this.state.viewFromAbove());
  protected readonly touch = signal(
    typeof matchMedia !== 'undefined' && matchMedia('(hover: none) and (pointer: coarse)').matches,
  );
  protected readonly helpOpen = signal(false);
  protected readonly knob = signal('translate(0px, 0px)');
  private stickPointer: number | null = null;

  private readonly host = viewChild.required<ElementRef<HTMLElement>>('host');
  private readonly canvas = viewChild.required<ElementRef<HTMLCanvasElement>>('canvas');
  private readonly label = viewChild.required<ElementRef<HTMLElement>>('label');
  private readonly hearts = viewChild.required<ElementRef<HTMLElement>>('hearts');
  private readonly hotspots = viewChildren<ElementRef<HTMLButtonElement>>('hot');

  private scene: RoomScene | null = null;
  private hovered: InteractiveObjectId | null = null;
  private lastHover: InteractiveObjectId | null = null;
  private focusedHotspot: InteractiveObjectId | null = null;
  private wasPanelOpen = false;
  private petAnnounced = false;
  private readonly pos = { x: 0, y: 0, visible: false };

  constructor() {
    effect(() => {
      const night = this.state.night();
      untracked(() => this.scene?.setNight(night));
    });
    effect(() => {
      const r = this.state.reducedMotion();
      untracked(() => this.scene?.setReducedMotion(r));
    });
    effect(() => {
      const above = this.state.viewFromAbove();
      untracked(() => this.scene?.setViewMode(above ? 'top' : 'inside'));
    });
    effect(() => {
      const on = this.state.tvOn();
      untracked(() => this.scene?.setTvOn(on));
    });
    // Caméra : se rapprocher de l'objet de la fiche ouverte, revenir à la fermeture.
    effect(() => {
      const sheetId = this.state.openSheetId();
      const cv = this.state.cvOpen();
      const open = this.state.anyPanelOpen();
      untracked(() => this.syncCamera(sheetId, cv, open));
    });
  }

  async ngAfterViewInit() {
    const { RoomScene, loadBake } = await import('../scene/room-scene');
    const bake = await loadBake();
    this.zone.runOutsideAngular(() => {
      this.scene = new RoomScene(this.host().nativeElement, this.canvas().nativeElement, {
        hover: (id) => this.onHover(id),
        activate: (id) => this.zone.run(() => this.activate(id)),
        petted: (r) => this.zone.run(() => this.onPetted(r)),
        petGesture: (active) => {
          this.host().nativeElement.classList.toggle('is-petting', active);
          if (active) this.petAnnounced = false;
        },
        frame: () => this.placeOverlays(),
      }, bake);
    });
    if (isDevMode()) {
      const w = window as unknown as { __salon?: RoomScene; __salonExport?: () => Promise<string> };
      w.__salon = this.scene!; // tests manuels
      // pré-calcul de la lumière (tools/bake) : description de la pièce pour Blender
      w.__salonExport = () => import('../scene/bake/export-room').then((m) => m.exportRoom());
    }
    this.scene!.setNight(this.state.night(), true);
    this.scene!.setReducedMotion(this.state.reducedMotion());
    this.scene!.setTvOn(this.state.tvOn());
    this.scene!.setViewMode(this.state.viewFromAbove() ? 'top' : 'inside', true);
    this.ready.set(true);
    // aide discrète aux commandes, au premier lancement seulement
    try {
      if (!localStorage.getItem('salon-aide-commandes')) this.helpOpen.set(true);
    } catch {
      this.helpOpen.set(true);
    }
    this.syncCamera(this.state.openSheetId(), this.state.cvOpen(), this.state.anyPanelOpen());
  }

  protected closeHelp() {
    this.helpOpen.set(false);
    try {
      localStorage.setItem('salon-aide-commandes', '1');
    } catch {
      /* stockage indisponible */
    }
  }

  // ---------- joystick tactile ----------

  protected stickStart(e: PointerEvent) {
    if (this.stickPointer !== null) return;
    this.stickPointer = e.pointerId;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    this.stickMove(e);
  }

  protected stickMove(e: PointerEvent) {
    if (e.pointerId !== this.stickPointer) return;
    const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const radius = r.width / 2;
    let dx = e.clientX - (r.left + radius);
    let dy = e.clientY - (r.top + radius);
    const len = Math.hypot(dx, dy);
    const max = radius * 0.62;
    if (len > max) {
      dx = (dx / len) * max;
      dy = (dy / len) * max;
    }
    this.knob.set(`translate(${dx.toFixed(0)}px, ${dy.toFixed(0)}px)`);
    // petite zone morte au centre
    const nx = Math.abs(dx) < max * 0.12 ? 0 : dx / max;
    const ny = Math.abs(dy) < max * 0.12 ? 0 : -dy / max;
    this.scene?.setMoveInput(nx, ny);
  }

  protected stickEnd(e: PointerEvent) {
    if (e.pointerId !== this.stickPointer) return;
    this.stickPointer = null;
    this.knob.set('translate(0px, 0px)');
    this.scene?.setMoveInput(0, 0);
  }

  ngOnDestroy() {
    this.scene?.dispose();
    this.scene = null;
  }

  protected ariaLabel(o: InteractiveObject): string {
    switch (o.action.type) {
      case 'sheet':
        return `${o.label} : ouvrir la fiche`;
      case 'cv':
        return `${o.label} : lire le CV`;
      case 'tv-toggle':
        return this.state.tvOn() ? 'TV TCL : éteindre' : 'TV TCL : allumer';
      case 'pet':
        return 'Caresser Hiki';
      default:
        return o.label;
    }
  }

  /** Clic, toucher ou Entrée sur un objet. */
  activate(id: InteractiveObjectId) {
    const o = objectById(id);
    switch (o.action.type) {
      case 'sheet':
        this.state.openSheet(o.action.sheetId);
        break;
      case 'cv':
        this.state.openCv();
        break;
      case 'tv-toggle': {
        const on = !this.state.tvOn();
        this.state.tvOn.set(on);
        this.state.announce(on ? 'La TV est allumée.' : 'La TV est éteinte.');
        this.hotspotFor(id)?.setAttribute('aria-label', this.ariaLabel(o));
        break;
      }
      case 'lava-toggle': {
        const on = this.scene?.toggleLava();
        this.state.announce(on ? 'La lampe à lave est allumée.' : 'La lampe à lave est éteinte.');
        break;
      }
      case 'pet':
        this.petAnnounced = false;
        this.scene?.petHiki();
        break;
      case 'easter-egg':
        if (o.action.eggId === 'guitar') {
          // cliquer la guitare active le son (geste explicite) puis joue l'air
          if (!this.state.soundOn()) {
            this.state.soundOn.set(true);
            this.state.announce('Son activé.');
          }
          this.guitar.play();
        }
        this.scene?.playEgg(id);
        this.state.showEgg(o.action.eggId);
        break;
    }
  }

  protected onFocus(id: InteractiveObjectId) {
    this.focusedHotspot = id;
    this.scene?.highlight(id);
  }

  protected onBlur() {
    this.focusedHotspot = null;
    this.scene?.highlight(null);
  }

  private onHover(id: InteractiveObjectId | null) {
    // survoler la guitare joue un petit air (si le son est activé)
    if (id === 'egg-guitar' && id !== this.lastHover && this.state.soundOn()) {
      this.guitar.play();
      this.scene?.playEgg('egg-guitar');
    }
    this.lastHover = id;
    // Les easter eggs restent discrets : pas d'étiquette au survol.
    this.hovered = id && objectById(id).primary ? id : null;
  }

  private onPetted(reaction: 'purr' | 'ear') {
    this.spawnHeart(reaction === 'purr' ? '♥' : 'z');
    if (reaction === 'purr' && this.state.soundOn()) this.purr.play();
    if (!this.petAnnounced) {
      this.petAnnounced = true;
      this.state.announce(
        reaction === 'purr'
          ? 'Hiki ferme les yeux et remue doucement la queue.'
          : 'Hiki dort. Elle bouge une oreille.',
      );
    }
  }

  private syncCamera(sheetId: string | null, cv: boolean, open: boolean) {
    const scene = this.scene;
    if (!scene) return;
    const target = cv ? 'cv-sheet' : sheetId ? objectForSheet(sheetId)?.id : undefined;
    if (target) {
      scene.focus(target);
      if (sheetId === 'hubtv') scene.flashTv();
    }
    // garder l'objet visible à côté de la fiche
    const w = this.host().nativeElement.clientWidth;
    const h = this.host().nativeElement.clientHeight;
    const mobile = w <= 720;
    // sur mobile, la fiche occupe le bas de l'écran (60 % de la hauteur)
    const sheetH = Math.min(window.innerHeight * 0.6, h * 0.75);
    if (open && !cv)
      scene.setInsets(mobile ? 0 : Math.min(492, w * 0.42 + 32), mobile ? sheetH : 0);
    else scene.setInsets(0, 0);
    scene.setInputEnabled(!open);
    if (!open && this.wasPanelOpen) scene.unfocus();
    this.wasPanelOpen = open;
  }

  private hotspotFor(id: InteractiveObjectId): HTMLButtonElement | undefined {
    return this.hotspots().find((h) => h.nativeElement.dataset['id'] === id)?.nativeElement;
  }

  /** Place les boutons, l'étiquette et les cœurs au-dessus des objets (hors Angular). */
  private placeOverlays() {
    const scene = this.scene;
    if (!scene) return;
    for (const ref of this.hotspots()) {
      const el = ref.nativeElement;
      const id = el.dataset['id'] as InteractiveObjectId;
      scene.screenPosition(id, this.pos);
      el.style.transform = `translate(${this.pos.x.toFixed(1)}px, ${(this.pos.y + 22).toFixed(1)}px)`;
      el.classList.toggle('is-offscreen', !this.pos.visible);
    }
    const labelEl = this.label().nativeElement;
    const show = this.state.anyPanelOpen() ? null : (this.focusedHotspot ?? this.hovered);
    if (show && scene.screenPosition(show, this.pos)) {
      const text = objectById(show).label;
      if (labelEl.textContent !== text) labelEl.textContent = text;
      labelEl.style.transform = `translate(${this.pos.x.toFixed(1)}px, ${this.pos.y.toFixed(1)}px)`;
      labelEl.classList.add('is-visible');
    } else {
      labelEl.classList.remove('is-visible');
    }
    const hearts = this.hearts().nativeElement;
    if (hearts.childElementCount && scene.screenPosition('hiki', this.pos)) {
      hearts.style.transform = `translate(${this.pos.x.toFixed(1)}px, ${this.pos.y.toFixed(1)}px)`;
    }
  }

  private spawnHeart(char: string) {
    const hearts = this.hearts().nativeElement;
    const el = document.createElement('span');
    el.className = char === 'z' ? 'heart heart--z' : 'heart';
    el.textContent = char;
    el.style.left = `${Math.round(Math.random() * 30 - 15)}px`;
    hearts.appendChild(el);
    setTimeout(() => el.remove(), 1400);
  }
}
