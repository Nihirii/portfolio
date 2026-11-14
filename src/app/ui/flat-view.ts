import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { PortfolioState } from '../core/portfolio-state';
import { EASTER_EGGS } from '../data/interactive-objects';
import { PROFILE } from '../data/profile';
import { ARCHIVE_SHEETS, EXPERIMENT_SHEETS, FEATURED_SHEETS, PRODUCT_SHEETS } from '../data/sheets';
import { Avatar } from './avatar';
import { DeskPreview } from './desk-preview';
import { SheetVisual } from './sheet-visual';

/**
 * Portfolio 2D (vue par défaut) : accueil, réalisations, expérimentations.
 * Même contenu et mêmes fiches que le salon 3D, sans WebGL, navigable au clavier.
 */
@Component({
  selector: 'app-flat-view',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SheetVisual, DeskPreview, Avatar],
  template: `
    <div class="page">
      <section class="hero" aria-labelledby="hero-title">
        <div class="hero__text">
          <h1 id="hero-title">{{ profile.name }}</h1>
          <p class="hero__role">Développeuse front-end · Angular, Electron et design systems</p>
          <p class="hero__lead">
            De la maquette Figma au UI kit Angular partagé : je conçois et je développe les
            interfaces de trois produits de vidéoprotection, avec leurs design tokens.
          </p>
          <button type="button" class="chip chip--primary hero__cta" (click)="goToWork()">
            Voir mes réalisations
          </button>
        </div>
        <figure class="hero__visual">
          @if (!portraitFailed()) {
            <img
              class="portrait"
              [src]="profile.avatarPath"
              alt="Portrait illustré de Léna Simonin"
              width="960"
              height="960"
              (error)="portraitFailed.set(true)"
            />
          } @else {
            <app-avatar [size]="220" />
          }
        </figure>
      </section>

      <section id="realisations" tabindex="-1" aria-labelledby="work-title">
        <h2 id="work-title">Réalisations</h2>
        <ul class="featured">
          @for (s of featured; track s.id) {
            <li>
              <button type="button" class="card" (click)="state.openSheet(s.id)">
                @if (s.cover) {
                  <img class="card__cover" [src]="s.cover.src" [alt]="s.cover.alt" />
                } @else {
                  <app-sheet-visual [visual]="s.visual" />
                }
                <span class="card__body">
                  <span class="card__title">{{ s.title }}</span>
                  <span class="card__text">{{ s.tagline }}</span>
                  <span class="card__more">Lire la fiche <span aria-hidden="true">→</span></span>
                </span>
              </button>
            </li>
          }
        </ul>
        <p class="also">
          Au quotidien, aussi :
          @for (p of products; track p.id; let last = $last) {
            <button type="button" class="link-btn" (click)="state.openSheet(p.id)">
              {{ p.title }}</button>{{ last ? '' : ' · ' }}
          }
        </p>
      </section>

      <section aria-labelledby="exp-title">
        <h2 id="exp-title">Expérimentations</h2>
        <ul class="experiments">
          @for (s of experiments; track s.id) {
            <li>
              <button type="button" class="row" (click)="state.openSheet(s.id)">
                <span class="row__title">{{ s.title }}</span>
                <span class="row__text">{{ s.summary }}</span>
                <span class="row__arrow" aria-hidden="true">→</span>
              </button>
            </li>
          }
        </ul>
      </section>

      <section aria-labelledby="archives-title">
        <h2 id="archives-title">Archives</h2>
        <ul class="experiments">
          @for (s of archives; track s.id) {
            <li>
              <button type="button" class="row" (click)="state.openSheet(s.id)">
                <span class="row__title">{{ s.title }}</span>
                <span class="row__text">{{ s.summary }}</span>
                <span class="row__arrow" aria-hidden="true">→</span>
              </button>
            </li>
          }
        </ul>
      </section>

      @if (state.webglAvailable()) {
        <section class="visit" aria-labelledby="visit-title">
          <div>
            <h2 id="visit-title">Le salon en 3D</h2>
            <p>
              Les mêmes projets, rangés dans mon salon : les écrans du bureau, le KALLAX, le carnet,
              la feuille de CV… et Hiki.
            </p>
            <button type="button" class="chip" (click)="state.setMode('3d')">
              Visiter le salon en 3D <span aria-hidden="true">→</span>
            </button>
          </div>
          <button
            type="button"
            class="visit__preview"
            (click)="state.setMode('3d')"
            aria-label="Visiter le salon en 3D"
          >
            <app-desk-preview />
          </button>
        </section>
      }

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
    .page {
      max-width: 1080px;
      margin: 0 auto;
      padding: 48px 16px 80px;
    }
    /* ---------- accueil ---------- */
    .hero {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      gap: 48px;
      align-items: center;
    }
    h1 {
      font-size: clamp(40px, 6vw, 64px);
      margin: 0;
      letter-spacing: -0.01em;
    }
    .hero__role {
      margin: 8px 0 0;
      font-weight: 800;
      font-size: 17px;
      color: var(--c-text-soft);
    }
    .hero__lead {
      max-width: 34em;
      margin: 20px 0 28px;
      font-size: 18px;
      line-height: 1.6;
    }
    .hero__cta {
      min-height: 48px;
      padding: 10px 22px;
      font-size: 16px;
    }
    .hero__visual {
      margin: 0;
      justify-self: end;
      width: min(100%, 400px);
    }
    /* cadrage carré qui laisse respirer le visage */
    .portrait {
      display: block;
      width: 100%;
      height: auto;
      aspect-ratio: 1;
      object-fit: cover;
      border-radius: 50%;
      border: 1px solid var(--c-line);
    }
    .card__cover {
      display: block;
      width: 100%;
      aspect-ratio: 16 / 10;
      object-fit: cover;
      border-radius: var(--radius-m);
    }
    .also {
      margin: 16px 0 0;
      color: var(--c-text-soft);
      font-size: 15px;
    }
    .visit {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      gap: 40px;
      align-items: center;
      p {
        max-width: 32em;
        color: var(--c-text-soft);
        margin: 0 0 20px;
      }
    }
    .visit__preview {
      display: block;
      padding: 0;
      border: 0;
      background: none;
      border-radius: var(--radius-l);
      cursor: pointer;
    }
    .link-btn {
      padding: 6px 2px;
      border: 0;
      background: none;
      font-weight: 800;
      color: var(--c-text);
      text-decoration: underline;
      text-decoration-color: var(--c-line);
      text-underline-offset: 4px;
      cursor: pointer;
      &:hover {
        text-decoration-color: currentColor;
      }
    }
    /* ---------- sections ---------- */
    section + section {
      margin-top: 72px;
      padding-top: 32px;
      border-top: 1px solid var(--c-line);
    }
    #realisations {
      outline: none;
    }
    h2 {
      margin: 0 0 20px;
      font-size: 28px;
    }
    .featured {
      list-style: none;
      margin: 0;
      padding: 0;
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 20px;
    }
    .card {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 12px;
      text-align: left;
      border-radius: var(--radius-l);
      border: 1px solid var(--c-line);
      background: var(--c-surface);
      cursor: pointer;
      transition: border-color 0.2s;
      &:hover {
        border-color: var(--c-muted);
      }
      &:hover .card__more {
        text-decoration-color: currentColor;
      }
    }
    .card__body {
      display: flex;
      flex-direction: column;
      gap: 4px;
      padding: 0 4px 4px;
      flex: 1;
    }
    .card__title {
      font-family: var(--font-display);
      font-weight: 600;
      font-size: 21px;
    }
    .card__text {
      font-size: 15px;
      color: var(--c-text-soft);
      flex: 1;
    }
    .card__more {
      margin-top: 8px;
      font-size: 14px;
      font-weight: 800;
      text-decoration: underline;
      text-decoration-color: var(--c-line);
      text-underline-offset: 4px;
    }
    .experiments {
      list-style: none;
      margin: 0;
      padding: 0;
      border-top: 1px solid var(--c-line);
    }
    .row {
      width: 100%;
      display: grid;
      grid-template-columns: minmax(160px, 1fr) 2fr auto;
      gap: 16px;
      align-items: baseline;
      padding: 14px 4px;
      border: 0;
      border-bottom: 1px solid var(--c-line);
      background: none;
      text-align: left;
      cursor: pointer;
      &:hover {
        background: var(--c-surface-2);
      }
    }
    .row__title {
      font-family: var(--font-display);
      font-weight: 600;
      font-size: 18px;
    }
    .row__text {
      color: var(--c-text-soft);
      font-size: 15px;
    }
    .row__arrow {
      color: var(--c-muted);
    }
    .eggs {
      padding-left: 20px;
      color: var(--c-text-soft);
      li {
        margin-bottom: 6px;
      }
      strong {
        color: var(--c-text);
      }
    }
    /* ---------- mobile : blocs empilés ---------- */
    @media (max-width: 860px) {
      .page {
        padding-top: 28px;
      }
      .hero,
      .visit {
        grid-template-columns: 1fr;
        gap: 28px;
      }
      .hero__visual {
        justify-self: center;
        width: min(100%, 300px);
      }
      .featured {
        grid-template-columns: 1fr;
      }
    }
    @media (max-width: 560px) {
      .row {
        grid-template-columns: 1fr auto;
        gap: 2px 12px;
      }
      .row__text {
        grid-column: 1;
      }
      .row__arrow {
        grid-row: 1 / span 2;
        grid-column: 2;
        align-self: center;
      }
    }
  `,
})
export class FlatView {
  protected readonly state = inject(PortfolioState);
  protected readonly profile = PROFILE;
  protected readonly featured = FEATURED_SHEETS;
  protected readonly experiments = EXPERIMENT_SHEETS;
  protected readonly archives = ARCHIVE_SHEETS;
  protected readonly products = PRODUCT_SHEETS;
  protected readonly portraitFailed = signal(false);
  protected readonly eggs = EASTER_EGGS;

  goToWork() {
    const el = document.getElementById('realisations');
    el?.scrollIntoView({
      behavior: this.state.reducedMotion() ? 'auto' : 'smooth',
      block: 'start',
    });
    el?.focus({ preventScroll: true });
  }
}
