import { ChangeDetectionStrategy, Component, computed, inject, isDevMode } from '@angular/core';
import { PortfolioState } from '../core/portfolio-state';
import { PROFILE } from '../data/profile';
import { Panel } from './panel';
import { SheetVisual } from './sheet-visual';
import { WorkGallery } from './work-gallery';

@Component({
  selector: 'app-sheet-dialog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Panel, SheetVisual, WorkGallery],
  template: `
    <app-panel
      [open]="!!sheet()"
      labelledBy="sheet-title"
      (closed)="state.closeAll()"
      closeLabel="Fermer la fiche"
    >
      @if (sheet(); as s) {
        <article class="sheet">
          <p class="eyebrow">{{ eyebrow() }}</p>
          <h2 id="sheet-title" class="title" tabindex="-1" data-autofocus>{{ s.title }}</h2>
          <p class="tagline">{{ s.tagline }}</p>
          <app-sheet-visual [visual]="s.visual" />
          <p class="summary">{{ s.summary }}</p>

          @for (section of s.sections; track section.heading) {
            <h3>{{ section.heading }}</h3>
            <ul class="list">
              @for (item of section.items; track item) {
                <li>{{ item }}</li>
              }
            </ul>
          }

          @if (s.kind === 'about') {
            <h3>Ce que j'aime</h3>
            <ul class="likes">
              @for (like of likes; track like.label) {
                <li>
                  <span aria-hidden="true">{{ like.icon }}</span> {{ like.label }}
                </li>
              }
            </ul>
          }

          @if (s.kind === 'work') {
            <app-work-gallery />
          }

          @if (s.stack.length) {
            <h3 class="sr-only">Outils</h3>
            <ul class="stack" aria-label="Outils">
              @for (t of s.stack; track t) {
                <li>{{ t }}</li>
              }
            </ul>
          }

          @if (s.repos.length) {
            <div class="links">
              @for (repo of s.repos; track repo.label) {
                @if (repo.isPublic && repo.url) {
                  <a class="chip chip--primary" [href]="repo.url" target="_blank" rel="noopener">
                    {{ repo.label }}<span class="sr-only"> sur GitHub (nouvel onglet)</span> ↗
                  </a>
                } @else if (!repo.isPublic) {
                  <p class="private">🔒 Dépôt privé : le code n'est pas encore public.</p>
                } @else if (dev) {
                  <span class="chip todo">{{ repo.label }} : lien à configurer</span>
                }
              }
            </div>
          }
        </article>
      }
    </app-panel>
  `,
  styles: `
    .eyebrow {
      margin: 0;
      font-size: 12px;
      font-weight: 800;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--c-rose-strong);
    }
    .title {
      margin: 4px 0 2px;
      font-size: 30px;
      outline: none;
    }
    .tagline {
      margin: 0 0 var(--space-4);
      color: var(--c-muted);
      font-weight: 700;
    }
    .summary {
      font-size: 16px;
    }
    h3 {
      margin: var(--space-5) 0 var(--space-2);
      font-size: 17px;
    }
    .list {
      margin: 0;
      padding-left: 20px;
      li {
        margin-bottom: 4px;
      }
      li::marker {
        color: var(--c-rose-strong);
      }
    }
    .stack {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin: var(--space-5) 0 0;
      padding: 0;
      list-style: none;
      li {
        padding: 3px 10px;
        border-radius: 999px;
        background: var(--c-surface-2);
        border: 1px solid var(--c-line);
        font-size: 13px;
        font-weight: 800;
        color: var(--c-text-soft);
      }
    }
    .links {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-2);
      margin-top: var(--space-5);
    }
    .likes {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
      gap: 8px;
      margin: 0;
      padding: 0;
      list-style: none;
      li {
        padding: 8px 12px;
        border-radius: var(--radius-m);
        background: var(--c-surface-2);
        border: 1px solid var(--c-line);
        font-weight: 800;
        font-size: 14px;
      }
    }
    .private {
      margin: 0;
      font-size: 14px;
      font-weight: 700;
      color: var(--c-muted);
    }
    .todo {
      border-style: dashed;
      box-shadow: none;
      color: var(--c-muted);
    }
  `,
})
export class SheetDialog {
  protected readonly state = inject(PortfolioState);
  protected readonly sheet = this.state.sheet;
  protected readonly dev = isDevMode();
  protected readonly likes = PROFILE.likes;
  protected readonly eyebrow = computed(() => {
    const s = this.sheet();
    if (!s) return '';
    return s.kind === 'project' ? 'Projet' : s.kind === 'work' ? 'Au quotidien' : 'À propos';
  });
}
