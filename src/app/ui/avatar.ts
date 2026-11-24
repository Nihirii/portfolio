import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { PROFILE } from '../data/profile';

/** Avatar de Léna ; tant que l'image n'est pas déposée, un médaillon illustré la remplace. */
@Component({
  selector: 'app-avatar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span class="ring" [style.--size.px]="size()">
      @if (!failed()) {
        <img [src]="src" [alt]="'Photo de ' + name" (error)="failed.set(true)" />
      } @else {
        <span class="fallback" role="img" [attr.aria-label]="name">
          <span aria-hidden="true">🪼</span>
        </span>
      }
    </span>
  `,
  styles: `
    :host {
      display: inline-block;
    }
    .ring {
      display: grid;
      place-items: center;
      width: var(--size);
      height: var(--size);
      border-radius: 50%;
      background: radial-gradient(circle at 50% 45%, #9b7ad1 0 58%, #2a2140 59%);
      box-shadow:
        0 0 0 4px var(--c-surface),
        0 0 0 6px #9b7ad1,
        0 10px 24px var(--c-shadow);
      overflow: hidden;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .fallback {
      font-size: calc(var(--size) * 0.45);
      line-height: 1;
    }
  `,
})
export class Avatar {
  readonly size = input(120);
  protected readonly src = PROFILE.avatarPath;
  protected readonly name = PROFILE.name;
  protected readonly failed = signal(false);
}
