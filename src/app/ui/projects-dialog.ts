import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioState } from '../core/portfolio-state';
import { objectForSheet } from '../data/interactive-objects';
import { SHEETS } from '../data/sheets';
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
      <ul class="list">
        @for (item of items; track item.sheet.id) {
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
    </app-panel>
  `,
  styles: `
    h2 {
      margin: 0;
      font-size: 28px;
      outline: none;
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
      border: 2px solid var(--c-line);
      background: var(--c-surface);
      box-shadow: 0 4px 0 var(--c-line);
      cursor: pointer;
      transition: transform 0.12s;
      &:hover {
        transform: translateY(-2px);
        border-color: var(--c-rose);
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
      color: var(--c-rose-strong);
    }
  `,
})
export class ProjectsDialog {
  protected readonly state = inject(PortfolioState);
  protected readonly items = SHEETS.filter((s) => s.kind !== 'about').map((sheet) => {
    const obj = objectForSheet(sheet.id);
    return {
      sheet,
      where: obj ? `Dans le salon : ${obj.label.split(' — ')[0].toLowerCase()}` : '',
    };
  });
}
