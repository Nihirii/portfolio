import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioState } from '../core/portfolio-state';

@Component({
  selector: 'app-toast',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (state.toast(); as t) {
      <div class="toast">
        <p class="toast__title">✨ {{ t.title }}</p>
        <p class="toast__msg">{{ t.message }}</p>
        <button
          type="button"
          class="toast__close"
          (click)="state.toast.set(null)"
          aria-label="Fermer le message"
        >
          ✕
        </button>
      </div>
    }
  `,
  styles: `
    .toast {
      position: fixed;
      left: 16px;
      bottom: max(16px, env(safe-area-inset-bottom));
      z-index: 30;
      width: min(360px, calc(100vw - 32px));
      padding: 14px 44px 14px 16px;
      border-radius: var(--radius-m);
      background: var(--c-surface);
      border: 2px solid var(--c-rose);
      box-shadow:
        0 5px 0 var(--c-rose),
        0 18px 40px var(--c-shadow);
      animation: pop 0.3s cubic-bezier(0.2, 0.9, 0.3, 1.3);
    }
    .toast__title {
      margin: 0;
      font-family: var(--font-display);
      font-weight: 600;
      font-size: 17px;
    }
    .toast__msg {
      margin: 4px 0 0;
      font-size: 14px;
      color: var(--c-text-soft);
    }
    .toast__close {
      position: absolute;
      top: 8px;
      right: 8px;
      width: 32px;
      height: 32px;
      border: 0;
      border-radius: 50%;
      background: transparent;
      cursor: pointer;
    }
    @keyframes pop {
      from {
        transform: translateY(16px) scale(0.96);
        opacity: 0;
      }
    }
  `,
})
export class Toast {
  protected readonly state = inject(PortfolioState);
}
