import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  effect,
  ElementRef,
  inject,
  input,
  output,
  viewChild,
} from '@angular/core';

/**
 * Fenêtre modale accessible basée sur <dialog> : focus piégé, Échap pour fermer,
 * focus rendu à l'élément d'origine à la fermeture.
 * - `side` : panneau à droite (bas d'écran sur mobile), la scène reste visible à gauche.
 * - `wide` : grande fenêtre centrée, plein écran sur mobile (CV).
 */
@Component({
  selector: 'app-panel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <dialog
      #dlg
      class="panel"
      [class.panel--wide]="variant() === 'wide'"
      [attr.aria-labelledby]="labelledBy()"
      (cancel)="$event.preventDefault(); closed.emit()"
      (click)="onBackdrop($event)"
    >
      <div class="panel__inner">
        <button
          type="button"
          class="panel__close"
          (click)="closed.emit()"
          [attr.aria-label]="closeLabel()"
        >
          <span aria-hidden="true">✕</span>
        </button>
        <ng-content />
      </div>
    </dialog>
  `,
  styles: `
    .panel {
      --panel-w: min(460px, 42vw);
      position: fixed;
      inset: calc(var(--bar-h) + 12px) 16px 16px auto;
      margin: 0;
      width: var(--panel-w);
      max-width: none;
      height: auto;
      max-height: none;
      padding: 0;
      border: 1px solid var(--c-line);
      border-radius: var(--radius-l);
      background: var(--c-surface);
      color: var(--c-text);
      box-shadow:
        0 6px 0 var(--c-line),
        0 24px 60px var(--c-shadow);
      overflow: hidden;
    }
    .panel[open] {
      display: flex;
      animation: slide-in 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    .panel::backdrop {
      background: rgba(40, 25, 45, 0.12);
    }
    .panel__inner {
      position: relative;
      flex: 1;
      overflow-y: auto;
      overscroll-behavior: contain;
      padding: var(--space-5);
      padding-top: var(--space-5);
    }
    .panel__close {
      position: sticky;
      top: 0;
      float: right;
      z-index: 2;
      width: 40px;
      height: 40px;
      margin: -8px -8px 0 8px;
      border-radius: 50%;
      border: 1px solid var(--c-line);
      background: var(--c-surface);
      cursor: pointer;
      font-size: 16px;
      font-weight: 800;
    }
    .panel--wide {
      inset: calc(var(--bar-h) + 12px) 0 16px 0;
      margin: 0 auto;
      width: min(920px, calc(100vw - 32px));
    }
    .panel--wide::backdrop {
      background: rgba(40, 25, 45, 0.45);
    }
    @keyframes slide-in {
      from {
        opacity: 0;
        transform: translateX(24px);
      }
    }
    @media (max-width: 720px) {
      .panel {
        inset: auto 0 0 0;
        width: 100%;
        max-height: 60dvh;
        border-radius: var(--radius-l) var(--radius-l) 0 0;
        border-bottom: 0;
        padding-bottom: env(safe-area-inset-bottom);
      }
      .panel__inner {
        padding: var(--space-4);
      }
      .panel--wide {
        inset: 0;
        max-height: none;
        height: 100dvh;
        border-radius: 0;
        border: 0;
      }
      @keyframes slide-in {
        from {
          transform: translateY(40px);
          opacity: 0;
        }
      }
    }
  `,
})
export class Panel {
  readonly open = input.required<boolean>();
  readonly labelledBy = input<string>();
  readonly variant = input<'side' | 'wide'>('side');
  readonly closeLabel = input('Fermer');
  readonly closed = output<void>();

  private readonly dlg = viewChild.required<ElementRef<HTMLDialogElement>>('dlg');
  private readonly doc = inject(DOCUMENT);
  private returnFocus: HTMLElement | null = null;

  constructor() {
    effect(() => {
      const el = this.dlg().nativeElement;
      if (this.open() && !el.open) {
        this.returnFocus = this.doc.activeElement as HTMLElement | null;
        el.showModal();
        el.querySelector<HTMLElement>('[data-autofocus]')?.focus();
      } else if (!this.open() && el.open) {
        el.close();
        const target = this.returnFocus;
        this.returnFocus = null;
        if (target?.isConnected) target.focus({ preventScroll: true });
      }
    });
  }

  onBackdrop(e: MouseEvent) {
    // clic sur le fond (le <dialog> lui-même, hors de son contenu)
    if (e.target === this.dlg().nativeElement) this.closed.emit();
  }
}
