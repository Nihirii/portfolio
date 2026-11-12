import {
  ChangeDetectionStrategy,
  Component,
  effect,
  ElementRef,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { PortfolioState } from '../core/portfolio-state';
import { PROFILE } from '../data/profile';
import { Panel } from './panel';

type CvStatus = 'idle' | 'loading' | 'ready' | 'missing' | 'error';

/**
 * Fenêtre du CV : rendu du PDF public avec pdf.js (chargé uniquement à l'ouverture),
 * lisible sur mobile où les PDF intégrés ne s'affichent pas toujours.
 */
@Component({
  selector: 'app-cv-dialog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Panel],
  template: `
    <app-panel
      [open]="state.cvOpen()"
      variant="wide"
      labelledBy="cv-title"
      (closed)="state.closeAll()"
      closeLabel="Fermer le CV"
    >
      <div class="head">
        <h2 id="cv-title" tabindex="-1" data-autofocus>CV — {{ profile.name }}</h2>
        @if (status() !== 'missing') {
          <div class="actions">
            <a class="chip chip--primary" [href]="pdfUrl" [attr.download]="profile.cvDownloadName"
              >Télécharger le PDF</a
            >
            <a class="chip" [href]="pdfUrl" target="_blank" rel="noopener"
              >Ouvrir dans un onglet<span class="sr-only"> (nouvel onglet)</span></a
            >
          </div>
        }
      </div>

      <div class="pages" #pages [attr.aria-busy]="status() === 'loading'">
        @switch (status()) {
          @case ('loading') {
            <p class="state">Chargement du CV…</p>
          }
          @case ('missing') {
            <p class="state">Le CV public sera bientôt disponible ici.</p>
          }
          @case ('error') {
            <p class="state">
              Impossible d'afficher l'aperçu.
              <a [href]="pdfUrl" target="_blank" rel="noopener">Ouvrir le PDF</a>
            </p>
          }
        }
      </div>
      @if (status() === 'ready' && text()) {
        <details class="text">
          <summary>Version texte du CV</summary>
          <div class="text__body">{{ text() }}</div>
        </details>
      }
    </app-panel>
  `,
  styles: `
    .head {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 12px;
      margin-right: 48px;
      margin-bottom: 16px;
    }
    h2 {
      margin: 0;
      font-size: 24px;
      outline: none;
      flex: 1 1 auto;
    }
    .actions {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .pages {
      display: grid;
      gap: 16px;
      justify-items: center;
    }
    .pages ::ng-deep canvas {
      width: 100%;
      max-width: 820px;
      height: auto;
      border-radius: 6px;
      background: #fff;
      box-shadow: 0 4px 18px var(--c-shadow);
    }
    .state {
      padding: 40px 0;
      color: var(--c-muted);
      font-weight: 700;
      text-align: center;
    }
    .text {
      margin-top: 16px;
      font-size: 14px;
    }
    .text__body {
      white-space: pre-wrap;
      margin-top: 8px;
    }
    @media (max-width: 720px) {
      .head {
        margin-right: 44px;
      }
      h2 {
        font-size: 20px;
      }
    }
  `,
})
export class CvDialog {
  protected readonly state = inject(PortfolioState);
  protected readonly profile = PROFILE;
  protected readonly pdfUrl = PROFILE.cvPdfPath;
  protected readonly status = signal<CvStatus>('idle');
  protected readonly text = signal('');
  private readonly pages = viewChild.required<ElementRef<HTMLElement>>('pages');
  private renderedWidth = 0;

  constructor() {
    effect(() => {
      if (this.state.cvOpen()) queueMicrotask(() => this.load());
    });
  }

  private async load() {
    const host = this.pages().nativeElement;
    const width = Math.min(host.clientWidth || 600, 820);
    if (this.status() === 'ready' && Math.abs(width - this.renderedWidth) < 40) return;
    this.status.set('loading');
    try {
      // Un hébergement « SPA » peut renvoyer index.html (200) : on vérifie le type.
      const res = await fetch(this.pdfUrl);
      const type = res.headers.get('content-type') ?? '';
      if (!res.ok || !type.includes('pdf')) {
        this.status.set('missing');
        return;
      }
      const data = new Uint8Array(await res.arrayBuffer());
      const pdfjs = await import('pdfjs-dist');
      pdfjs.GlobalWorkerOptions.workerSrc = 'pdfjs/pdf.worker.min.mjs';
      const doc = await pdfjs.getDocument({ data }).promise;
      host.querySelectorAll('canvas').forEach((c) => c.remove());
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const texts: string[] = [];
      for (let n = 1; n <= doc.numPages; n++) {
        const page = await doc.getPage(n);
        const base = page.getViewport({ scale: 1 });
        const viewport = page.getViewport({ scale: (width / base.width) * dpr });
        const canvas = document.createElement('canvas');
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        canvas.setAttribute('role', 'img');
        canvas.setAttribute('aria-label', `CV, page ${n} sur ${doc.numPages}`);
        host.appendChild(canvas);
        await page.render({ canvas, viewport }).promise;
        const content = await page.getTextContent();
        texts.push(
          content.items.map((i) => ('str' in i ? i.str + (i.hasEOL ? '\n' : ' ') : '')).join(''),
        );
      }
      this.text.set(texts.join('\n\n').trim());
      this.renderedWidth = width;
      this.status.set('ready');
    } catch (err) {
      console.error(err);
      this.status.set('error');
    }
  }
}
