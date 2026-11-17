import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HIKI } from '../scene/room-layout';

/**
 * Aperçu 2D du coin bureau du salon : bureau en chêne, deux écrans (HubTV et Azura),
 * chaise bleue et Hiki. Dessiné en SVG avec les couleurs de la scène 3D ; s'adapte au jour / nuit.
 */
@Component({
  selector: 'app-desk-preview',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg viewBox="0 0 400 300" role="img" aria-labelledby="desk-title">
      <title id="desk-title">
        Le coin bureau de Léna : bureau en chêne, deux écrans, chaise bleue et Hiki, sa chatte
        tigrée
      </title>
      <!-- mur et sol -->
      <rect class="wall" x="0" y="0" width="400" height="232" />
      <rect class="floor" x="0" y="232" width="400" height="68" />
      <!-- cadres au mur -->
      <rect class="frame" x="58" y="34" width="38" height="50" rx="2" />
      <rect fill="#cbbcf6" x="63" y="39" width="28" height="40" />
      <rect class="frame" x="104" y="44" width="30" height="30" rx="2" />
      <rect fill="#bbcbef" x="109" y="49" width="20" height="20" />
      <!-- écrans -->
      <g class="screen">
        <rect class="bezel" x="122" y="96" width="94" height="58" rx="4" />
        <rect class="glass" x="127" y="101" width="84" height="48" rx="2" />
        <rect fill="#9fc3f0" x="134" y="108" width="30" height="18" rx="2" opacity=".9" />
        <rect fill="#cbbcf6" x="168" y="108" width="36" height="8" rx="2" />
        <rect fill="#bbcbef" x="168" y="119" width="24" height="7" rx="2" />
        <rect class="bezel" x="164" y="154" width="10" height="20" />
      </g>
      <g class="screen">
        <rect class="bezel" x="226" y="96" width="94" height="58" rx="4" />
        <rect class="glass" x="231" y="101" width="84" height="48" rx="2" />
        <polyline
          points="238,138 252,128 266,134 280,120 294,124 308,112"
          fill="none"
          stroke="#bfe8d6"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <circle cx="242" cy="112" r="4" fill="#ffe08a" />
        <rect class="bezel" x="268" y="154" width="10" height="20" />
      </g>
      <!-- lampe -->
      <rect fill="#e7dfe8" x="96" y="150" width="12" height="24" rx="3" />
      <ellipse class="lamp" cx="102" cy="146" rx="18" ry="10" />
      <!-- bureau en chêne -->
      <rect class="oak-top" x="70" y="174" width="290" height="12" rx="3" />
      <rect class="oak-edge" x="70" y="183" width="290" height="4" rx="2" />
      <rect class="oak-leg" x="82" y="187" width="10" height="64" rx="2" />
      <rect class="oak-leg" x="338" y="187" width="10" height="64" rx="2" />
      <rect class="drawer" x="282" y="187" width="56" height="44" rx="3" />
      <rect fill="#d8cfc4" x="302" y="205" width="16" height="3" rx="1.5" />
      <!-- clavier et carnet -->
      <rect fill="#f4f1ee" x="170" y="168" width="70" height="7" rx="2" />
      <rect
        fill="#b9a3ef"
        x="250"
        y="168"
        width="26"
        height="6"
        rx="1.5"
        transform="rotate(-6 263 171)"
      />
      <!-- chaise bleue -->
      <g class="chair">
        <rect class="chair-back" x="176" y="150" width="62" height="78" rx="18" />
        <rect class="chair-seat" x="168" y="214" width="78" height="20" rx="9" />
        <rect class="chair-arm" x="160" y="200" width="10" height="24" rx="4" />
        <rect class="chair-arm" x="244" y="200" width="10" height="24" rx="4" />
        <rect fill="#4b5563" x="203" y="234" width="8" height="26" />
        <path
          d="M168 270 L207 258 L246 270"
          fill="none"
          stroke="#4b5563"
          stroke-width="6"
          stroke-linecap="round"
        />
        <circle cx="168" cy="272" r="5" fill="#374151" />
        <circle cx="246" cy="272" r="5" fill="#374151" />
        <circle cx="207" cy="268" r="5" fill="#374151" />
      </g>
      <!-- Hiki, assise devant le bureau -->
      <g class="hiki">
        <ellipse cx="330" cy="281" rx="34" ry="6" fill="rgba(40,28,22,.18)" />
        <path
          d="M352 276 C 372 272, 378 256, 366 244"
          fill="none"
          [attr.stroke]="hiki.coat"
          stroke-width="7"
          stroke-linecap="round"
        />
        <ellipse cx="326" cy="258" rx="24" ry="24" [attr.fill]="hiki.coat" />
        <ellipse cx="324" cy="266" rx="12" ry="15" [attr.fill]="hiki.belly" />
        <path
          d="M312 244 l6 8 M336 240 l-4 9 M341 252 l-7 4"
          [attr.stroke]="stripe"
          stroke-width="3"
          stroke-linecap="round"
        />
        <circle cx="324" cy="224" r="17" [attr.fill]="hiki.coat" />
        <path d="M309 216 L311 199 L322 210 Z" [attr.fill]="hiki.coat" />
        <path d="M339 216 L337 199 L326 210 Z" [attr.fill]="hiki.coat" />
        <path d="M312 212 L313 204 L318 209 Z" [attr.fill]="hiki.nose" />
        <path d="M336 212 L335 204 L330 209 Z" [attr.fill]="hiki.nose" />
        <path
          d="M316 214 l3 5 M332 214 l-3 5 M324 211 v6"
          [attr.stroke]="stripe"
          stroke-width="2.4"
          stroke-linecap="round"
        />
        <ellipse cx="317" cy="225" rx="3" ry="3.6" [attr.fill]="hiki.eyes" />
        <ellipse cx="331" cy="225" rx="3" ry="3.6" [attr.fill]="hiki.eyes" />
        <circle cx="317" cy="225.5" r="1.4" fill="#2a2025" />
        <circle cx="331" cy="225.5" r="1.4" fill="#2a2025" />
        <path d="M322 231 h4 l-2 2.4 Z" [attr.fill]="hiki.nose" />
        <path
          d="M306 232 h-12 M306 235 l-11 3 M342 232 h12 M342 235 l11 3"
          stroke="#f4efe8"
          stroke-width="1"
        />
        <ellipse cx="315" cy="280" rx="7" ry="4" [attr.fill]="hiki.belly" />
        <ellipse cx="333" cy="280" rx="7" ry="4" [attr.fill]="hiki.belly" />
      </g>
    </svg>
  `,
  styles: `
    :host {
      display: block;
    }
    svg {
      display: block;
      width: 100%;
      height: auto;
      border-radius: var(--radius-l);
      border: 1px solid var(--c-line);
    }
    .wall {
      fill: #f3ebe1;
    }
    .floor {
      fill: #e8cfa9;
    }
    .frame {
      fill: #2f2833;
    }
    .bezel {
      fill: #26222b;
    }
    .glass {
      fill: #3a3448;
    }
    .lamp {
      fill: #fff4e2;
    }
    .oak-top {
      fill: #d6ae7b;
    }
    .oak-edge {
      fill: #b98a57;
    }
    .oak-leg {
      fill: #c39563;
    }
    .drawer {
      fill: #f6f2ec;
    }
    .chair-back {
      fill: #4f7fd1;
    }
    .chair-seat {
      fill: #3f6dbd;
    }
    .chair-arm {
      fill: #33589a;
    }
    :host-context([data-theme='night']) {
      .wall {
        fill: #3b2a3a;
      }
      .floor {
        fill: #6b4f45;
      }
      .glass {
        fill: #4b4470;
      }
      .lamp {
        fill: #ffd9a6;
        filter: drop-shadow(0 0 10px #ffc98a);
      }
      .screen .glass {
        filter: drop-shadow(0 0 8px rgba(160, 140, 255, 0.55));
      }
    }
  `,
})
export class DeskPreview {
  protected readonly hiki = HIKI;
  protected readonly stripe = '#5b4638';
}
