import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SheetVisual as Visual } from '../data/types';

/** Illustrations originales des fiches, dessinées en HTML/CSS (visuels fictifs). */
@Component({
  selector: 'app-sheet-visual',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <figure class="v" [class]="'v v--' + visual()" aria-hidden="true">
      @switch (visual()) {
        @case ('hubtv') {
          <div class="scr pc"><b>Bureau</b><i></i><i></i></div>
          <div class="arrow">⇄</div>
          <div class="scr tv">
            <b>TV</b><span class="tiles"><i></i><i></i><i></i></span>
          </div>
          <div class="pad">🎮</div>
          <div class="phone"><i></i><i></i></div>
        }
        @case ('azura') {
          <div class="phone-lg">
            <b>Azura</b>
            <span class="moods"><i></i><i></i><i></i><i></i><i></i></span>
            <span class="lines"><i></i><i></i><i></i></span>
            <span class="offline">hors ligne ✓</span>
          </div>
          <svg viewBox="0 0 120 60" class="chart">
            <polyline points="4,40 22,30 40,44 58,26 76,32 94,18 116,12" />
          </svg>
        }
        @case ('cards') {
          @for (c of [0, 1, 2, 3, 4]; track c) {
            <div class="card" [style.--i]="c"></div>
          }
        }
        @case ('pet') {
          <div class="egg">
            <div class="lcd"><span class="blob"></span></div>
            <span class="btns"><i></i><i></i><i></i></span>
          </div>
          <div class="langs"><span>JS</span><span>Py</span></div>
        }
        @case ('swatches') {
          @for (c of swatches; track c) {
            <div class="sw" [style.background]="c"></div>
          }
        }
        @case ('server') {
          <div class="rack">
            @for (r of [0, 1, 2]; track r) {
              <div class="unit"><i></i><i></i></div>
            }
          </div>
          <code class="req">GET /api/… → 200</code>
        }
        @case ('work') {
          <div class="frames">
            <div class="frame f1">
              <span class="cams"><i></i><i></i><i></i><i></i></span>
            </div>
            <div class="frame f2">
              <span class="tl"><i></i></span>
            </div>
            <div class="frame f3">
              <span class="pins"><i></i><i></i><i></i></span>
            </div>
          </div>
          <div class="tokens"><i></i><i></i><i></i><i></i><i></i></div>
        }
        @default {
          <div class="hello">👋</div>
        }
      }
    </figure>
  `,
  styleUrl: './sheet-visual.scss',
})
export class SheetVisual {
  readonly visual = input.required<Visual>();
  protected readonly swatches = ['#f2b8c6', '#cbbcf6', '#9fc3f0', '#bfe8d6', '#ffe08a', '#e7c9a6'];
}
