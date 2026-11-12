import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioState } from './core/portfolio-state';
import { CvDialog } from './ui/cv-dialog';
import { FlatView } from './ui/flat-view';
import { ProjectsDialog } from './ui/projects-dialog';
import { RoomView } from './ui/room-view';
import { SheetDialog } from './ui/sheet-dialog';
import { Toast } from './ui/toast';
import { TopBar } from './ui/top-bar';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TopBar, RoomView, FlatView, SheetDialog, ProjectsDialog, CvDialog, Toast],
  template: `
    <a class="skip" href="#contenu" (click)="skip($event)">Aller au contenu</a>
    <app-top-bar />
    <main id="contenu" tabindex="-1">
      @if (state.mode() === '3d' && state.webglAvailable()) {
        <app-room-view />
      } @else {
        <app-flat-view />
      }
    </main>
    <app-sheet-dialog />
    <app-projects-dialog />
    <app-cv-dialog />
    <app-toast />
    <div class="sr-only" aria-live="polite">{{ state.announcement() }}</div>
  `,
  styleUrl: './app.scss',
})
export class App {
  protected readonly state = inject(PortfolioState);

  skip(e: Event) {
    e.preventDefault();
    const main = document.getElementById('contenu');
    (main?.querySelector<HTMLElement>('button, a') ?? main)?.focus();
  }
}
