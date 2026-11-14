import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface Mockup {
  name: string;
  caption: string;
  kind: 'live' | 'replay' | 'sites';
}

/**
 * Illustrations de « Mon travail ». Toutes les maquettes sont fictives :
 * elles évoquent le type d'écrans conçus, sans reprendre de vrai produit.
 */
@Component({
  selector: 'app-work-gallery',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p class="flow" aria-label="Exemple : de Figma au composant Angular">
      <span>Figma</span><span aria-hidden="true">→</span><span>token</span
      ><span aria-hidden="true">→</span><span>composant Angular</span>
    </p>
    <section aria-labelledby="work-mockups">
      <h3 id="work-mockups">
        <span class="step">1</span> Figma : la maquette <small>(visuels fictifs)</small>
      </h3>
      <ul class="mockups">
        @for (m of mockups; track m.name) {
          <li class="mock">
            <div
              class="mock__frame"
              [class]="'mock__frame mock__frame--' + m.kind"
              aria-hidden="true"
            >
              <div class="mock__bar"><i></i><i></i><i></i></div>
              @switch (m.kind) {
                @case ('live') {
                  <div class="grid4">
                    @for (c of [1, 2, 3, 4]; track c) {
                      <span [class.alert]="c === 2"
                        ><em>CAM {{ c }}</em></span
                      >
                    }
                  </div>
                }
                @case ('replay') {
                  <div class="player"></div>
                  <div class="timeline">
                    <i style="left: 18%"></i><i style="left: 52%"></i><b></b>
                  </div>
                }
                @case ('sites') {
                  <div class="tree"><i></i><i></i><i></i><i></i></div>
                  <div class="form"><i></i><i></i><b></b></div>
                }
              }
            </div>
            <p class="mock__name">{{ m.name }}</p>
            <p class="mock__cap">{{ m.caption }}</p>
          </li>
        }
      </ul>
    </section>

    <section aria-labelledby="work-tokens">
      <h3 id="work-tokens"><span class="step">2</span> Token : la décision de design</h3>
      <table class="tokens">
        <caption class="sr-only">
          Exemples de tokens fictifs
        </caption>
        <tbody>
          @for (t of tokens; track t.name) {
            <tr>
              <td><span class="sw" [style.background]="t.value"></span></td>
              <th scope="row">
                <code>{{ t.name }}</code>
              </th>
              <td>
                <code>{{ t.value }}</code>
              </td>
            </tr>
          }
        </tbody>
      </table>
    </section>

    <section aria-labelledby="work-kit">
      <h3 id="work-kit"><span class="step">3</span> Composant Angular : le UI kit</h3>
      <div class="kit">
        <button type="button" class="k-btn">Exporter</button>
        <button type="button" class="k-btn k-btn--ghost">Annuler</button>
        <span class="k-badge">En ligne</span>
        <span class="k-badge k-badge--warn">Alerte</span>
        <label class="k-switch">
          <input type="checkbox" [checked]="rec()" (change)="rec.set(!rec())" />
          <span aria-hidden="true"></span> Enregistrement {{ rec() ? 'actif' : 'en pause' }}
        </label>
      </div>
      <h4 class="states-title">Un composant et ses états : le bouton</h4>
      <ul class="states" aria-label="États du bouton">
        <li><span class="k-btn">Exporter</span><small>Repos</small></li>
        <li><span class="k-btn is-hover">Exporter</span><small>Survol</small></li>
        <li><span class="k-btn is-focus">Exporter</span><small>Focus clavier</small></li>
        <li>
          <span class="k-btn is-disabled" aria-disabled="true">Exporter</span
          ><small>Désactivé</small>
        </li>
      </ul>
      <p class="note">
        Ces composants sont de vrais éléments HTML stylés avec les tokens ci-dessus : une couleur
        changée dans Figma devient un token, et tous les composants qui l'utilisent suivent.
      </p>
    </section>
  `,
  styleUrl: './work-gallery.scss',
})
export class WorkGallery {
  protected readonly rec = signal(true);
  protected readonly mockups: Mockup[] = [
    {
      name: 'Supervision en direct',
      caption: 'Mur de caméras, alertes et sélection rapide.',
      kind: 'live',
    },
    {
      name: 'Relecture des enregistrements',
      caption: "Lecteur, frise d'événements et export.",
      kind: 'replay',
    },
    {
      name: 'Configuration des sites',
      caption: 'Arborescence des sites et formulaires.',
      kind: 'sites',
    },
  ];
  protected readonly tokens = [
    { name: 'color.surface.default', value: '#FFFDFA' },
    { name: 'color.accent.primary', value: '#6B54D6' },
    { name: 'color.status.alert', value: '#E0565B' },
    { name: 'color.status.online', value: '#3E8A69' },
    { name: 'radius.m', value: '12px' },
    { name: 'space.4', value: '16px' },
  ];
}
