import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioState } from '../core/portfolio-state';
import { objectForSheet } from '../data/interactive-objects';
import { EXPERIMENT_SHEETS, FEATURED_SHEETS } from '../data/sheets';
import { Sheet } from '../data/types';
import { Panel } from './panel';

@Component({
  selector: 'app-projects-dialog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Panel],
  template: `
    <app-panel
      [open]="state.projectsOpen()"
      labelledBy="projects-title"
      (closed)="state.closeAll()"
    >
      <h2 id="projects-title" tabindex="-1" data-autofocus>Projets</h2>
      <p class="intro">Chaque projet est aussi un objet du salon.</p>
      @for (group of groups; track group.title) {
        <h3>{{ group.title }}</h3>
        <ul class="list">
          @for (item of group.items; track item.sheet.id) {
            <li>
              <button type="button" class="item" (click)="state.openSheet(item.sheet.id)">
                <span class="item__title">{{ item.sheet.title }}</span>
                <span class="item__tag">{{ item.sheet.tagline }}</span>
                @if (item.where) {
                  <span class="item__where">{{ item.where }}</span>
                }
              </button>
            </li>
          }
        </ul>
      }
    </app-panel>
  `,
  styles: `
    h2 {
      margin: 0;
      font-size: 28px;
      outline: none;
    }
    h3 {
      margin: 20px 0 8px;
      font-size: 13px;
      font-weight: 800;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: var(--c-muted);
      font-family: var(--font-body);
    }
    .intro {
      color: var(--c-muted);
      font-weight: 700;
      margin: 4px 0 16px;
    }
    .list {
      list-style: none;
      margin: 0;
      padding: 0;
      display: grid;
      gap: 10px;
    }
    .item {
      width: 100%;
      text-align: left;
      display: grid;
      gap: 2px;
      padding: 12px 14px;
      border-radius: var(--radius-m);
      border: 1px solid var(--c-line);
      background: var(--c-surface);
      cursor: pointer;
      transition: border-color 0.2s;
      &:hover {
        border-color: var(--c-muted);
      }
    }
    .item__title {
      font-family: var(--font-display);
      font-weight: 600;
      font-size: 18px;
    }
    .item__tag {
      font-size: 14px;
      color: var(--c-text-soft);
    }
    .item__where {
      font-size: 12px;
      font-weight: 800;
      color: var(--c-muted);
    }
  `,
})
export class ProjectsDialog {
  protected readonly state = inject(PortfolioState);
  protected readonly groups = [
    { title: 'Réalisations', items: FEATURED_SHEETS.map(withPlace) },
    { title: 'Expérimentations', items: EXPERIMENT_SHEETS.map(withPlace) },
  ];
}

function withPlace(sheet: Sheet) {
  const obj = objectForSheet(sheet.id);
  return {
    sheet,
    where: obj ? `Dans le salon : ${obj.label.split(' — ')[0].toLowerCase()}` : '',
  };
}
