import { DOCUMENT } from '@angular/common';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { EASTER_EGGS } from '../data/interactive-objects';
import { sheetById } from '../data/sheets';
import { EasterEggId, SheetId } from '../data/types';

export type ViewMode = '3d' | '2d';

/** État global de l'interface, partagé entre la scène 3D et la version 2D. */
@Injectable({ providedIn: 'root' })
export class PortfolioState {
  private readonly doc = inject(DOCUMENT);
  private readonly win = this.doc.defaultView;

  readonly webglAvailable = signal(detectWebGL(this.doc));
  readonly mode = signal<ViewMode>(this.initialMode());
  readonly night = signal(this.initialNight());
  readonly reducedMotion = signal(this.media('(prefers-reduced-motion: reduce)'));
  readonly soundOn = signal(false);
  readonly tvOn = signal(false);

  /** Fiche ouverte (et objet d'origine, pour rendre le focus au bon endroit). */
  readonly openSheetId = signal<SheetId | null>(null);
  readonly projectsOpen = signal(false);
  readonly cvOpen = signal(false);
  readonly sheet = computed(() => {
    const id = this.openSheetId();
    return id ? sheetById(id) : null;
  });

  readonly toast = signal<{ title: string; message: string; key: number } | null>(null);
  /** Texte lu par les lecteurs d'écran (région aria-live). */
  readonly announcement = signal('');

  readonly anyPanelOpen = computed(
    () => !!this.openSheetId() || this.cvOpen() || this.projectsOpen(),
  );

  private toastTimer: ReturnType<typeof setTimeout> | undefined;

  constructor() {
    // Lien direct (#hubtv, #cv, #projets…) lu avant la synchronisation de l'URL.
    const link = this.readHash();
    if (link.sheet) this.openSheetId.set(link.sheet);
    else if (link.cv) this.cvOpen.set(true);
    else if (link.projects) this.projectsOpen.set(true);

    this.win
      ?.matchMedia?.('(prefers-reduced-motion: reduce)')
      .addEventListener?.('change', (e) => this.reducedMotion.set(e.matches));

    effect(() => {
      this.doc.documentElement.dataset['theme'] = this.night() ? 'night' : 'day';
    });
    effect(() => {
      this.doc.documentElement.dataset['motion'] = this.reducedMotion() ? 'reduced' : 'full';
    });
    // lien direct : #hubtv, #cv, #projets…
    effect(() => {
      const id = this.openSheetId();
      const hash = id ? `#${id}` : this.cvOpen() ? '#cv' : this.projectsOpen() ? '#projets' : '';
      if (this.win && this.win.location.hash !== hash) {
        this.win.history.replaceState(
          null,
          '',
          hash || this.win.location.pathname + this.win.location.search,
        );
      }
    });
  }

  openSheet(id: SheetId) {
    this.projectsOpen.set(false);
    this.cvOpen.set(false);
    this.openSheetId.set(id);
  }

  closeAll() {
    this.openSheetId.set(null);
    this.cvOpen.set(false);
    this.projectsOpen.set(false);
  }

  openCv() {
    this.openSheetId.set(null);
    this.projectsOpen.set(false);
    this.cvOpen.set(true);
  }

  toggleNight() {
    this.night.update((n) => !n);
    this.announce(
      this.night()
        ? 'Nuit : la lampe du bureau, les écrans et le meuble TV éclairent le salon.'
        : 'Jour : la lumière entre par la fenêtre.',
    );
    try {
      this.win?.localStorage.setItem('salon-night', this.night() ? '1' : '0');
    } catch {
      /* stockage indisponible : sans conséquence */
    }
  }

  showEgg(id: EasterEggId) {
    const egg = EASTER_EGGS.find((e) => e.id === id);
    if (egg) this.showToast(egg.title, egg.message);
  }

  showToast(title: string, message: string) {
    clearTimeout(this.toastTimer);
    this.toast.set({ title, message, key: Date.now() });
    this.announce(`${title}. ${message}`);
    this.toastTimer = setTimeout(() => this.toast.set(null), 6000);
  }

  announce(text: string) {
    this.announcement.set('');
    queueMicrotask(() => this.announcement.set(text));
  }

  /** Lit le lien direct au chargement. */
  private readHash(): { sheet?: SheetId; cv?: boolean; projects?: boolean } {
    const h = (this.win?.location.hash ?? '').replace('#', '');
    if (!h) return {};
    if (h === 'cv') return { cv: true };
    if (h === 'projets') return { projects: true };
    try {
      return { sheet: sheetById(h as SheetId).id };
    } catch {
      return {};
    }
  }

  private initialMode(): ViewMode {
    try {
      const saved = this.win?.localStorage.getItem('salon-mode');
      if (saved === '2d') return '2d';
    } catch {
      /* ignore */
    }
    return detectWebGL(this.doc) ? '3d' : '2d';
  }

  setMode(mode: ViewMode) {
    this.mode.set(mode);
    try {
      this.win?.localStorage.setItem('salon-mode', mode);
    } catch {
      /* ignore */
    }
  }

  private initialNight(): boolean {
    try {
      const saved = this.win?.localStorage.getItem('salon-night');
      if (saved) return saved === '1';
    } catch {
      /* ignore */
    }
    const h = new Date().getHours();
    return h >= 20 || h < 7;
  }

  private media(q: string): boolean {
    return !!this.win?.matchMedia?.(q).matches;
  }
}

export function detectWebGL(doc: Document): boolean {
  try {
    const c = doc.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('webgl'));
  } catch {
    return false;
  }
}
