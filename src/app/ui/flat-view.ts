import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioState } from '../core/portfolio-state';
import { EASTER_EGGS } from '../data/interactive-objects';
import { githubProfileUrl, PROFILE } from '../data/profile';
import { PROJECT_SHEETS, sheetById } from '../data/sheets';
import { SheetVisual } from './sheet-visual';

/** Version 2D : même contenu, sans WebGL, entièrement navigable au clavier. */
@Component({
  selector: 'app-flat-view',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SheetVisual],
  template: `
    <div class="flat">
      @if (!state.webglAvailable()) {
        <p class="notice">Votre navigateur n'affiche pas la 3D : voici la version 2D du salon.</p>
      }
      <section class="hero" aria-labelledby="hero-title">
        <h1 id="hero-title">{{ profile.name }}</h1>
        <p class="hero__role">{{ profile.role }} à {{ profile.city }}</p>
        <p class="hero__text">{{ about.summary }}</p>
        <div class="hero__actions">
          <button type="button" class="chip chip--primary" (click)="state.openCv()">CV</button>
          <button type="button" class="chip" (click)="state.openSheet('about')">À propos</button>
          @if (github) {
            <a class="chip" [href]="github" target="_blank" rel="noopener"
              >GitHub<span class="sr-only"> (nouvel onglet)</span></a
            >
          }
        </div>
      </section>

      <section aria-labelledby="work-title">
        <h2 id="work-title">Mon travail</h2>
        <button type="button" class="card card--wide" (click)="state.openSheet('work')">
          <app-sheet-visual visual="work" />
          <span class="card__title">{{ work.title }}</span>
          <span class="card__text">{{ work.tagline }}</span>
        </button>
      </section>

      <section aria-labelledby="projects-title-2d">
        <h2 id="projects-title-2d">Projets</h2>
        <ul class="grid">
          @for (p of projects; track p.id) {
            <li>
              <button type="button" class="card" (click)="state.openSheet(p.id)">
                <app-sheet-visual [visual]="p.visual" />
                <span class="card__title">{{ p.title }}</span>
                <span class="card__text">{{ p.tagline }}</span>
              </button>
            </li>
          }
        </ul>
      </section>

      <section aria-labelledby="salon-title">
        <h2 id="salon-title">Dans le salon</h2>
        <ul class="eggs">
          <li>
            <strong>Hiki</strong> : la chatte de la maison. Elle se laisse caresser dans la version
            3D.
          </li>
          @for (e of eggs; track e.id) {
            <li>
              <strong>{{ e.title }}</strong> : {{ e.message }}
            </li>
          }
        </ul>
      </section>
    </div>
  `,
  styles: `
    :host {
      display: block;
      overflow-y: auto;
      height: 100%;
    }
    .flat {
      max-width: 1000px;
      margin: 0 auto;
      padding: 24px 16px 64px;
    }
    .notice {
      padding: 10px 14px;
      border-radius: var(--radius-m);
      background: var(--c-surface-2);
      border: 2px dashed var(--c-line);
      font-weight: 700;
    }
    .hero h1 {
      font-size: clamp(34px, 6vw, 52px);
      margin: 12px 0 0;
    }
    .hero__role {
      margin: 0;
      font-weight: 800;
      color: var(--c-rose-strong);
    }
    .hero__text {
      max-width: 640px;
      font-size: 17px;
    }
    .hero__actions {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }
    h2 {
      margin: 40px 0 12px;
      font-size: 26px;
    }
    .grid {
      list-style: none;
      margin: 0;
      padding: 0;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
      gap: 14px;
    }
    .card {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      text-align: left;
      padding: 12px;
      border-radius: var(--radius-l);
      border: 2px solid var(--c-line);
      background: var(--c-surface);
      box-shadow: 0 5px 0 var(--c-line);
      cursor: pointer;
      transition: transform 0.15s;
      &:hover {
        transform: translateY(-3px);
      }
    }
    .card__title {
      font-family: var(--font-display);
      font-weight: 600;
      font-size: 19px;
    }
    .card__text {
      font-size: 14px;
      color: var(--c-text-soft);
    }
    .eggs {
      padding-left: 20px;
      li {
        margin-bottom: 6px;
      }
    }
  `,
})
export class FlatView {
  protected readonly state = inject(PortfolioState);
  protected readonly profile = PROFILE;
  protected readonly github = githubProfileUrl();
  protected readonly about = sheetById('about');
  protected readonly work = sheetById('work');
  protected readonly projects = PROJECT_SHEETS;
  protected readonly eggs = EASTER_EGGS;
}
