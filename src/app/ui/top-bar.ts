import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  isDevMode,
} from '@angular/core';
import { PortfolioState } from '../core/portfolio-state';
import { githubProfileUrl, PROFILE } from '../data/profile';

@Component({
  selector: 'app-top-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="bar">
      <a class="brand" href="#" (click)="home($event)">
        <span class="brand__name">{{ profile.name }}</span>
        <span class="brand__role">{{ profile.role }} · {{ profile.city }}</span>
      </a>

      <div class="actions">
        <nav class="nav" aria-label="Accès directs">
          <button type="button" class="chip" (click)="state.projectsOpen.set(true)">Projets</button>
          <button type="button" class="chip" (click)="state.openSheet('about')">À propos</button>
          <button type="button" class="chip" (click)="state.openCv()">CV</button>
          @if (github) {
            <a class="chip" [href]="github" target="_blank" rel="noopener"
              >GitHub<span class="sr-only"> (nouvel onglet)</span></a
            >
          } @else if (dev) {
            <span class="chip chip--todo" title="Renseigner githubUsername dans data/profile.ts"
              >GitHub à configurer</span
            >
          }
        </nav>

        <div class="tools" role="group" aria-label="Réglages">
          <button
            type="button"
            class="chip chip--daynight"
            [attr.aria-pressed]="state.night()"
            (click)="state.toggleNight()"
            [attr.aria-label]="state.night() ? 'Nuit (activer le jour)' : 'Jour (activer la nuit)'"
          >
            <span aria-hidden="true">{{ state.night() ? '🌙' : '☀️' }}</span>
            <span class="tools__label">{{ state.night() ? 'Nuit' : 'Jour' }}</span>
          </button>
          @if (state.mode() === '3d') {
            <!-- en 2D, le salon 3D s'ouvre depuis l'accueil (« Visiter le salon en 3D ») -->
            <button type="button" class="chip" (click)="state.setMode('2d')">
              Retour au portfolio
            </button>
            <button
              type="button"
              class="chip"
              [attr.aria-pressed]="state.viewFromAbove()"
              (click)="state.viewFromAbove.set(!state.viewFromAbove())"
            >
              <span aria-hidden="true">{{ state.viewFromAbove() ? '🏠' : '🔭' }}</span>
              {{ state.viewFromAbove() ? 'Vue de la pièce' : "Vue d'ensemble" }}
            </button>
            <button
              type="button"
              class="chip"
              [attr.aria-pressed]="state.soundOn()"
              (click)="state.soundOn.set(!state.soundOn())"
              [attr.aria-label]="state.soundOn() ? 'Son activé (couper)' : 'Son coupé (activer)'"
            >
              <span aria-hidden="true">{{ state.soundOn() ? '🔊' : '🔇' }}</span>
              <span class="tools__label">Son</span>
            </button>
            <button
              type="button"
              class="chip"
              [attr.aria-pressed]="state.reducedMotion()"
              aria-label="Mouvement réduit"
              (click)="state.reducedMotion.set(!state.reducedMotion())"
            >
              <span class="tools__label">Mouvement réduit</span>
              <span class="tools__short" aria-hidden="true">Calme</span>
            </button>
          }
        </div>
      </div>
    </header>
  `,
  styles: `
    :host {
      display: block;
      position: relative;
      z-index: 20;
    }
    .bar {
      display: flex;
      align-items: center;
      gap: var(--space-3);
      padding: 10px var(--space-4);
      padding-top: max(10px, env(safe-area-inset-top));
      background: color-mix(in srgb, var(--c-surface) 88%, transparent);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid var(--c-line);
      transition: background-color 0.6s ease;
    }
    .brand {
      display: flex;
      flex-direction: column;
      text-decoration: none;
      color: var(--c-text);
      margin-right: auto;
      min-width: 0;
    }
    .brand__name {
      font-family: var(--font-display);
      font-weight: 600;
      font-size: 20px;
      line-height: 1.1;
    }
    .brand__role {
      font-size: 13px;
      color: var(--c-muted);
      font-weight: 700;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .actions,
    .nav,
    .tools {
      display: flex;
      gap: var(--space-2);
      align-items: center;
    }
    .tools {
      padding-left: var(--space-3);
      border-left: 1px solid var(--c-line);
    }
    .chip--todo {
      border-style: dashed;
      color: var(--c-muted);
      cursor: help;
      box-shadow: none;
    }
    .tools__short {
      display: none;
    }
    @media (max-width: 1100px) {
      .bar {
        flex-wrap: wrap;
      }
      .tools {
        border-left: 0;
        padding-left: 0;
      }
    }
    @media (max-width: 720px) {
      .bar {
        flex-wrap: wrap;
        gap: 6px;
        padding: 8px 12px 10px;
      }
      .brand {
        flex-basis: 100%;
        flex-direction: row;
        align-items: baseline;
        gap: 8px;
      }
      .brand__name {
        font-size: 18px;
      }
      /* une seule rangée de boutons, qui défile horizontalement */
      .actions {
        flex: 1 1 100%;
        min-width: 0;
        overflow-x: auto;
        scrollbar-width: none;
        margin: -4px -12px;
        padding: 4px 12px;
      }
      .nav,
      .tools {
        flex: 0 0 auto;
        gap: 6px;
      }
      .actions {
        gap: 6px;
      }
      .tools {
        border-left: 1px solid var(--c-line);
        padding-left: 6px;
      }
      .tools .tools__label {
        display: none;
      }
      .tools .tools__short,
      .chip--daynight .tools__label {
        display: inline;
      }
      .chip {
        min-height: 36px;
        padding: 5px 11px;
        font-size: 13px;
      }
    }
  `,
})
export class TopBar {
  protected readonly state = inject(PortfolioState);
  protected readonly profile = PROFILE;
  protected readonly github = githubProfileUrl();
  protected readonly dev = isDevMode();

  constructor() {
    // Hauteur réelle de la barre → variable CSS utilisée par les fiches.
    const host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      const ro = new ResizeObserver(() =>
        document.documentElement.style.setProperty(
          '--bar-h',
          `${Math.round(host.getBoundingClientRect().height)}px`,
        ),
      );
      ro.observe(host);
      destroyRef.onDestroy(() => ro.disconnect());
    });
  }

  home(e: Event) {
    e.preventDefault();
    this.state.closeAll();
  }
}
