import * as THREE from 'three';
import { canvasTexture, rnd } from './helpers';

/** Textures dessinées en canvas : visuels originaux, aucune image externe. */

export function floorTexture(): THREE.CanvasTexture {
  const t = canvasTexture(1024, 1024, (g, w, h) => {
    const rows = 16;
    const rh = h / rows;
    for (let r = 0; r < rows; r++) {
      let x = -(r % 3) * 90;
      while (x < w) {
        const len = 220 + rnd() * 200;
        g.fillStyle = `hsl(30,${42 + rnd() * 8}%,${58 + rnd() * 8}%)`;
        g.fillRect(x, r * rh, len, rh);
        g.fillStyle = 'rgba(90,55,25,.25)';
        g.fillRect(x, r * rh, 2, rh);
        x += len;
      }
      g.fillStyle = 'rgba(90,55,25,.3)';
      g.fillRect(0, r * rh, w, 1.5);
    }
  });
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(2.4, 1.4);
  return t;
}

const POSTER_PALETTES = [
  ['#f7c7a3', '#f29e8e', '#3d3550'],
  ['#bfe0f0', '#f6e2b3', '#2f4a52'],
  ['#f6d6e2', '#c8b4ef', '#43365c'],
  ['#ffe3a8', '#f5a97f', '#4a3b3b'],
  ['#cde8d6', '#9bcbd9', '#2d4744'],
  ['#f9d1b7', '#e9a6c2', '#3a2f4a'],
];

export function posterTexture(i: number): THREE.CanvasTexture {
  const [a, b, dark] = POSTER_PALETTES[i % POSTER_PALETTES.length];
  return canvasTexture(256, 360, (g, w, h) => {
    const gr = g.createLinearGradient(0, 0, 0, h);
    gr.addColorStop(0, a);
    gr.addColorStop(1, b);
    g.fillStyle = gr;
    g.fillRect(0, 0, w, h);
    g.fillStyle = 'rgba(255,255,255,.85)';
    g.beginPath();
    g.arc(w * (0.3 + (0.4 * ((i * 37) % 10)) / 10), h * 0.32, 26 + (i % 3) * 8, 0, 7);
    g.fill();
    g.fillStyle = dark;
    g.beginPath();
    g.moveTo(0, h);
    for (let x = 0; x <= w; x += 16)
      g.lineTo(x, h * 0.62 + Math.sin(x / 40 + i) * 22 + Math.cos(x / 17 + i * 2) * 8);
    g.lineTo(w, h);
    g.fill();
    g.globalAlpha = 0.55;
    g.beginPath();
    g.moveTo(0, h);
    for (let x = 0; x <= w; x += 16) g.lineTo(x, h * 0.55 + Math.sin(x / 55 + i * 3) * 28);
    g.lineTo(w, h);
    g.fill();
    g.globalAlpha = 1;
    g.fillStyle = 'rgba(255,255,255,.8)';
    g.fillRect(w * 0.2, h * 0.86, w * 0.6, 6);
  });
}

export function artTexture(i: number): THREE.CanvasTexture {
  const cols = ['#fbe3ec', '#e9e3fb', '#e3f1fb', '#fdf1dc', '#e5f5ec'];
  return canvasTexture(200, 260, (g, w, h) => {
    g.fillStyle = cols[i % 5];
    g.fillRect(0, 0, w, h);
    for (let k = 0; k < 5; k++) {
      g.fillStyle = `hsla(${(i * 70 + k * 50) % 360},55%,${60 + k * 5}%,.8)`;
      g.beginPath();
      g.ellipse(w * rnd(), h * rnd(), 20 + rnd() * 40, 20 + rnd() * 50, rnd() * 3, 0, 7);
      g.fill();
    }
    g.strokeStyle = 'rgba(70,60,80,.6)';
    g.lineWidth = 3;
    g.beginPath();
    g.moveTo(w * 0.3, h * 0.8);
    g.bezierCurveTo(w * 0.2, h * 0.3, w * 0.8, h * 0.5, w * 0.7, h * 0.15);
    g.stroke();
  });
}

export function haloTexture(color: string): THREE.CanvasTexture {
  return canvasTexture(256, 256, (g, w, h) => {
    const rg = g.createRadialGradient(w / 2, h / 2, 10, w / 2, h / 2, w / 2);
    rg.addColorStop(0, color);
    rg.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = rg;
    g.fillRect(0, 0, w, h);
  });
}

function roundRect(
  g: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
) {
  g.beginPath();
  g.roundRect(x, y, w, h, r);
}

/** TV : méduses (fond d'écran de l'artefact). */
export function jellyfishTexture(): THREE.CanvasTexture {
  return canvasTexture(512, 300, (g, w, h) => {
    const gr = g.createLinearGradient(0, 0, 0, h);
    gr.addColorStop(0, '#5aa7e6');
    gr.addColorStop(1, '#0d2350');
    g.fillStyle = gr;
    g.fillRect(0, 0, w, h);
    for (let k = 0; k < 7; k++) {
      const x = 40 + rnd() * (w - 80);
      const y = 40 + rnd() * (h - 110);
      const r = 12 + rnd() * 30;
      const rg = g.createRadialGradient(x, y, 2, x, y, r);
      rg.addColorStop(0, 'rgba(255,230,245,.95)');
      rg.addColorStop(1, 'rgba(200,170,255,.25)');
      g.fillStyle = rg;
      g.beginPath();
      g.ellipse(x, y, r, r * 0.7, 0, Math.PI, 0);
      g.fill();
      g.strokeStyle = 'rgba(240,210,255,.55)';
      g.lineWidth = 1.5;
      for (let t = 0; t < 5; t++) {
        g.beginPath();
        g.moveTo(x - r * 0.7 + t * r * 0.35, y);
        g.quadraticCurveTo(
          x - r * 0.5 + t * r * 0.35 + 8,
          y + r * 1.2,
          x - r * 0.7 + t * r * 0.35,
          y + r * 2.2,
        );
        g.stroke();
      }
    }
  });
}

/** TV en « mode HubTV » : grille de jeux façon interface TV (visuel générique). */
export function hubtvTvTexture(): THREE.CanvasTexture {
  return canvasTexture(512, 300, (g, w, h) => {
    const gr = g.createLinearGradient(0, 0, w, h);
    gr.addColorStop(0, '#1b1f3a');
    gr.addColorStop(1, '#3a2a5e');
    g.fillStyle = gr;
    g.fillRect(0, 0, w, h);
    g.fillStyle = '#fff';
    g.font = '600 26px sans-serif';
    g.fillText('HubTV', 28, 46);
    g.fillStyle = 'rgba(255,255,255,.6)';
    g.font = '16px sans-serif';
    g.fillText('Mode TV', 120, 46);
    const cols = ['#f2b8c6', '#9fc3f0', '#c8b4ef', '#bfe8d6', '#ffe08a'];
    for (let i = 0; i < 5; i++) {
      g.fillStyle = cols[i];
      roundRect(g, 28 + i * 94, 90, 82, i === 0 ? 130 : 110, 10);
      g.fill();
    }
    g.strokeStyle = '#fff';
    g.lineWidth = 4;
    roundRect(g, 26, 88, 86, 134, 12);
    g.stroke();
    g.fillStyle = 'rgba(255,255,255,.7)';
    g.font = '15px sans-serif';
    g.fillText('Ⓐ Lancer    Ⓑ Retour au bureau', 28, 262);
  });
}

/** Écran gauche : tableau de bord HubTV (visuel original). */
export function hubtvMonitorTexture(): THREE.CanvasTexture {
  return canvasTexture(512, 296, (g, w, h) => {
    g.fillStyle = '#171b2e';
    g.fillRect(0, 0, w, h);
    g.fillStyle = '#232a45';
    g.fillRect(0, 0, w, 34);
    g.fillStyle = '#fff';
    g.font = '600 18px sans-serif';
    g.fillText('HubTV', 14, 23);
    const card = (x: number, title: string, color: string, active: boolean) => {
      g.fillStyle = active ? color : '#242b48';
      roundRect(g, x, 56, 226, 150, 14);
      g.fill();
      g.fillStyle = active ? '#1b1f3a' : '#cfd6ff';
      g.font = '600 20px sans-serif';
      g.fillText(title, x + 18, 92);
      g.fillStyle = active ? 'rgba(27,31,58,.6)' : 'rgba(207,214,255,.5)';
      roundRect(g, x + 18, 112, 190, 70, 8);
      g.fill();
    };
    card(18, 'Bureau', '#9fc3f0', false);
    card(266, 'TV · Big Picture', '#f2b8c6', true);
    g.fillStyle = 'rgba(207,214,255,.75)';
    g.font = '15px sans-serif';
    g.fillText('Raccourci manette prêt', 18, 240);
    g.fillText('Télécommande Android connectée', 18, 268);
  });
}

/**
 * Écrans du bureau : reconstitution générique d'un produit de vidéoprotection
 * (aucune donnée ni capture interne), construit avec le UI kit.
 */
export function productMonitorTexture(name: string, accent: string): THREE.CanvasTexture {
  return canvasTexture(512, 296, (g, w, h) => {
    g.fillStyle = '#f4f2f7';
    g.fillRect(0, 0, w, h);
    g.fillStyle = '#1f1d2b';
    g.fillRect(0, 0, w, 36);
    g.fillStyle = '#fff';
    g.font = '600 18px sans-serif';
    g.fillText(name, 14, 24);
    g.fillStyle = accent;
    roundRect(g, w - 104, 9, 90, 18, 9);
    g.fill();
    g.fillStyle = '#1f1d2b';
    g.font = '700 11px sans-serif';
    g.fillText('UI kit Angular', w - 96, 22);
    // barre latérale
    g.fillStyle = '#e6e2ee';
    g.fillRect(0, 36, 96, h - 36);
    for (let i = 0; i < 5; i++) {
      g.fillStyle = i === 0 ? accent : '#cfc9db';
      roundRect(g, 12, 54 + i * 30, 72, 14, 7);
      g.fill();
    }
    // mosaïque de vignettes
    for (let r = 0; r < 2; r++)
      for (let c = 0; c < 2; c++) {
        const x = 112 + c * 196;
        const y = 50 + r * 118;
        g.fillStyle = '#2b2838';
        roundRect(g, x, y, 184, 106, 8);
        g.fill();
        g.fillStyle = 'rgba(255,255,255,.75)';
        g.font = '600 12px sans-serif';
        g.fillText(`CAM ${r * 2 + c + 1}`, x + 10, y + 20);
      }
  });
}

/** Écran droit : Azura, suivi d'humeur (visuel original). */
export function azuraMonitorTexture(): THREE.CanvasTexture {
  return canvasTexture(512, 296, (g, w, h) => {
    const gr = g.createLinearGradient(0, 0, 0, h);
    gr.addColorStop(0, '#e9e3fb');
    gr.addColorStop(1, '#fdf0f4');
    g.fillStyle = gr;
    g.fillRect(0, 0, w, h);
    // Téléphone
    g.fillStyle = '#ffffff';
    roundRect(g, 30, 18, 150, 262, 20);
    g.fill();
    g.fillStyle = '#4a3a4f';
    g.font = '600 18px sans-serif';
    g.fillText('Azura', 48, 50);
    const moods = ['#f2b8c6', '#ffe08a', '#bfe8d6', '#9fc3f0', '#c8b4ef'];
    moods.forEach((c, i) => {
      g.fillStyle = c;
      g.beginPath();
      g.arc(52 + i * 27, 80, 11, 0, 7);
      g.fill();
    });
    g.fillStyle = '#f3eefc';
    roundRect(g, 44, 104, 122, 70, 10);
    g.fill();
    g.fillStyle = '#b7a8e8';
    for (let i = 0; i < 4; i++) g.fillRect(54, 116 + i * 14, 60 + ((i * 29) % 40), 5);
    ['☐ Méditation', '☑ Marche', '☐ Lecture'].forEach((t, i) => {
      g.fillStyle = '#6b5a70';
      g.font = '13px sans-serif';
      g.fillText(t, 48, 200 + i * 22);
    });
    // Graphique d'humeur
    g.fillStyle = '#ffffff';
    roundRect(g, 204, 18, 284, 262, 18);
    g.fill();
    g.fillStyle = '#4a3a4f';
    g.font = '600 16px sans-serif';
    g.fillText('Humeur de la semaine', 222, 46);
    g.strokeStyle = '#8f7ae6';
    g.lineWidth = 4;
    g.beginPath();
    const pts = [0.5, 0.35, 0.6, 0.45, 0.7, 0.62, 0.8];
    pts.forEach((v, i) => {
      const x = 226 + i * 40;
      const y = 240 - v * 170;
      if (i) g.lineTo(x, y);
      else g.moveTo(x, y);
    });
    g.stroke();
    g.fillStyle = '#9a8a98';
    g.font = '12px sans-serif';
    g.fillText('Hors ligne ✓', 222, 266);
  });
}

/** Feuille de CV posée sur le bureau. */
export function cvPaperTexture(): THREE.CanvasTexture {
  return canvasTexture(256, 362, (g, w, h) => {
    g.fillStyle = '#fffdf9';
    g.fillRect(0, 0, w, h);
    g.fillStyle = '#e38aa3';
    g.fillRect(0, 0, w, 10);
    g.fillStyle = '#4a3a4f';
    g.font = '700 26px sans-serif';
    g.fillText('CV', 22, 52);
    g.font = '600 17px sans-serif';
    g.fillText('Léna Simonin', 22, 80);
    g.fillStyle = '#c8bcc6';
    for (let i = 0; i < 12; i++) g.fillRect(22, 112 + i * 18, 120 + ((i * 53) % 90), 5);
  });
}

/** Couverture du carnet « Mon travail ». */
export function notebookTexture(): THREE.CanvasTexture {
  return canvasTexture(256, 340, (g, w, h) => {
    g.fillStyle = '#cbbcf6';
    g.fillRect(0, 0, w, h);
    g.fillStyle = '#8f7ae6';
    g.fillRect(0, 0, 22, h);
    g.fillStyle = '#ffffff';
    roundRect(g, 50, 60, 170, 70, 10);
    g.fill();
    g.fillStyle = '#4a3a4f';
    g.font = '600 24px sans-serif';
    g.fillText('Mon travail', 62, 104);
    const sw = ['#f2b8c6', '#ffe08a', '#bfe8d6', '#9fc3f0'];
    sw.forEach((c, i) => {
      g.fillStyle = c;
      roundRect(g, 54 + i * 42, 170, 34, 34, 8);
      g.fill();
    });
  });
}

/** Petits pixel arts originaux pour les cadres du bureau. */
export function pixelArtTexture(kind: 'jelly' | 'cat' | 'pad'): THREE.CanvasTexture {
  const art: Record<string, { bg: string; rows: string[]; colors: Record<string, string> }> = {
    jelly: {
      bg: '#2b2440',
      colors: { p: '#f2b8c6', l: '#ffe3ef', w: '#ffffff', b: '#c8b4ef' },
      rows: [
        '............',
        '....pppp....',
        '..pplllppp..',
        '.pplwlllppp.',
        '.pplllllppp.',
        '.pppppppppp.',
        '..b.b..b.b..',
        '..b.b..b.b..',
        '.b..b..b..b.',
        '.b...b.b..b.',
        '..b..b..b...',
        '............',
      ],
    },
    cat: {
      bg: '#f6d6e2',
      colors: { c: '#7a6150', d: '#4e3d33', y: '#d8c24a', n: '#c98b88' },
      rows: [
        '............',
        '..c......c..',
        '..cc....cc..',
        '..cccccccc..',
        '.ccyccccycc.',
        '.cccccnccc..',
        '..cccccccc..',
        '...cdcdcc...',
        '..cccccccc..',
        '..cccccccccc',
        '..cc.cc.cc.c',
        '............',
      ],
    },
    pad: {
      bg: '#cfe8ff',
      colors: { g: '#6b6b78', d: '#3b3b46', r: '#e38aa3', v: '#8f7ae6' },
      rows: [
        '............',
        '............',
        '..gggggggg..',
        '.gggggggggg.',
        '.gdgggggrgg.',
        '.dddgggvgrg.',
        '.gdgggggvgg.',
        '.gggggggggg.',
        '.ggg....ggg.',
        '..g......g..',
        '............',
        '............',
      ],
    },
  };
  const a = art[kind];
  const t = canvasTexture(192, 192, (g, w) => {
    g.fillStyle = a.bg;
    g.fillRect(0, 0, w, w);
    const s = w / 12;
    a.rows.forEach((row, y) =>
      [...row].forEach((ch, x) => {
        if (ch === '.') return;
        g.fillStyle = a.colors[ch];
        g.fillRect(x * s, y * s, s, s);
      }),
    );
  });
  t.magFilter = THREE.NearestFilter;
  return t;
}

/** TV : jeu rétro en pixel art (original) lancé depuis la console. */
export function retroGameTexture(): THREE.CanvasTexture {
  const t = canvasTexture(256, 150, (g, w, h) => {
    const sky = g.createLinearGradient(0, 0, 0, h);
    sky.addColorStop(0, '#2b2058');
    sky.addColorStop(1, '#6b4fa8');
    g.fillStyle = sky;
    g.fillRect(0, 0, w, h);
    g.fillStyle = '#fff6c8';
    for (let i = 0; i < 18; i++) g.fillRect((i * 53) % w, (i * 29) % 70, 2, 2);
    g.fillStyle = '#3e8a69';
    g.fillRect(0, 118, w, 32);
    g.fillStyle = '#7cc9a6';
    for (let x = 0; x < w; x += 16) g.fillRect(x, 118, 8, 4);
    // plateformes et pièces
    g.fillStyle = '#c9a07a';
    g.fillRect(150, 86, 48, 8);
    g.fillRect(40, 70, 40, 8);
    g.fillStyle = '#ffe08a';
    [160, 172, 184, 50, 62].forEach((x, i) => g.fillRect(x, i < 3 ? 74 : 58, 6, 6));
    // héroïne méduse
    g.fillStyle = '#f2b8c6';
    g.fillRect(96, 92, 18, 10);
    g.fillRect(98, 88, 14, 4);
    g.fillStyle = '#ffffff';
    g.fillRect(101, 94, 3, 3);
    g.fillStyle = '#c8b4ef';
    [98, 103, 108, 112].forEach((x) => g.fillRect(x, 102, 2, 10));
    g.fillStyle = '#ffffff';
    g.font = 'bold 12px monospace';
    g.fillText('SCORE 004200', 8, 16);
    g.fillText('PRESS START', 86, 40);
  });
  t.magFilter = THREE.NearestFilter;
  return t;
}

/**
 * Affiches minimalistes au-dessus de la TV : paysages doux en aplats
 * (visuels originaux, sans personnage ni logo).
 */
export function minimalPosterTexture(i: number): THREE.CanvasTexture {
  return canvasTexture(240, 340, (g, w, h) => {
    const sky = (a: string, b: string) => {
      const gr = g.createLinearGradient(0, 0, 0, h);
      gr.addColorStop(0, a);
      gr.addColorStop(1, b);
      g.fillStyle = gr;
      g.fillRect(0, 0, w, h);
    };
    const poly = (c: string, pts: number[][]) => {
      g.fillStyle = c;
      g.beginPath();
      pts.forEach(([x, y], k) => (k ? g.lineTo(x * w, y * h) : g.moveTo(x * w, y * h)));
      g.closePath();
      g.fill();
    };
    const circle = (c: string, x: number, y: number, r: number) => {
      g.fillStyle = c;
      g.beginPath();
      g.arc(x * w, y * h, r * w, 0, 7);
      g.fill();
    };
    const cloud = (x: number, y: number, s: number) => {
      [0, 0.06, 0.12].forEach((dx, k) =>
        circle('rgba(255,255,255,.85)', x + dx * s, y - (k === 1 ? 0.02 : 0) * s, 0.06 * s),
      );
    };
    switch (i % 6) {
      case 0: // île flottante dans le ciel
        sky('#cfe3e6', '#f4ead7');
        cloud(0.15, 0.2, 1.2);
        cloud(0.62, 0.72, 1);
        poly('#7f9c7a', [
          [0.25, 0.42],
          [0.75, 0.42],
          [0.62, 0.52],
          [0.38, 0.52],
        ]);
        poly('#9b8a74', [
          [0.38, 0.52],
          [0.62, 0.52],
          [0.5, 0.64],
        ]);
        circle('#5f7d5c', 0.5, 0.36, 0.13);
        poly('#e8dfcc', [
          [0.44, 0.42],
          [0.56, 0.42],
          [0.56, 0.33],
          [0.5, 0.28],
          [0.44, 0.33],
        ]);
        break;
      case 1: // train sur l'eau au crépuscule
        sky('#e9c9b6', '#8fa7bf');
        circle('#f6e6c8', 0.7, 0.3, 0.09);
        g.fillStyle = '#9db6c9';
        g.fillRect(0, h * 0.6, w, h * 0.4);
        g.fillStyle = '#4a5a6e';
        g.fillRect(w * 0.12, h * 0.52, w * 0.76, h * 0.07);
        for (let k = 0; k < 5; k++) {
          g.fillStyle = '#f2d9a6';
          g.fillRect(w * (0.16 + k * 0.14), h * 0.54, w * 0.07, h * 0.025);
        }
        g.fillStyle = 'rgba(74,90,110,.35)';
        g.fillRect(w * 0.12, h * 0.62, w * 0.76, h * 0.04);
        break;
      case 2: // grand arbre sur la colline, sous la pluie
        sky('#d9e4d0', '#eef0e2');
        g.strokeStyle = 'rgba(120,140,150,.35)';
        for (let k = 0; k < 40; k++) {
          const x = (k * 37) % w;
          const y = (k * 53) % (h * 0.6);
          g.beginPath();
          g.moveTo(x, y);
          g.lineTo(x - 4, y + 14);
          g.stroke();
        }
        poly('#a9bf8e', [
          [0, 0.78],
          [0.3, 0.68],
          [0.7, 0.7],
          [1, 0.8],
          [1, 1],
          [0, 1],
        ]);
        g.fillStyle = '#6b5440';
        g.fillRect(w * 0.47, h * 0.45, w * 0.06, h * 0.26);
        circle('#4f7a52', 0.5, 0.38, 0.22);
        circle('#5f8a5f', 0.36, 0.44, 0.13);
        circle('#5f8a5f', 0.64, 0.44, 0.13);
        break;
      case 3: // maison au bord de la falaise, la mer
        sky('#cde6ea', '#f2ecdc');
        cloud(0.2, 0.18, 1);
        g.fillStyle = '#7fb3bf';
        g.fillRect(0, h * 0.62, w, h * 0.38);
        poly('#c9b28f', [
          [0.45, 1],
          [0.55, 0.55],
          [1, 0.52],
          [1, 1],
        ]);
        poly('#d9cbb5', [
          [0.66, 0.52],
          [0.86, 0.52],
          [0.86, 0.42],
          [0.76, 0.35],
          [0.66, 0.42],
        ]);
        poly('#c2675a', [
          [0.63, 0.43],
          [0.76, 0.33],
          [0.89, 0.43],
        ]);
        g.strokeStyle = 'rgba(255,255,255,.7)';
        g.lineWidth = 2;
        for (let k = 0; k < 4; k++) {
          g.beginPath();
          g.arc(w * (0.1 + k * 0.1), h * (0.72 + (k % 2) * 0.05), 8, Math.PI, 0);
          g.stroke();
        }
        break;
      case 4: // ville rouge sur l'eau, lanternes
        sky('#3f3557', '#8a5d6e');
        for (let k = 0; k < 14; k++)
          circle(
            'rgba(255,240,200,.8)',
            ((k * 41) % 100) / 100,
            ((k * 23) % 30) / 100 + 0.05,
            0.006,
          );
        g.fillStyle = '#5d6f86';
        g.fillRect(0, h * 0.68, w, h * 0.32);
        poly('#b9473f', [
          [0.25, 0.68],
          [0.25, 0.42],
          [0.5, 0.3],
          [0.75, 0.42],
          [0.75, 0.68],
        ]);
        poly('#7c2f2b', [
          [0.2, 0.44],
          [0.5, 0.26],
          [0.8, 0.44],
        ]);
        for (let k = 0; k < 6; k++) circle('#ffcf7a', 0.3 + k * 0.08, 0.5, 0.015);
        g.fillStyle = 'rgba(255,207,122,.35)';
        g.fillRect(w * 0.25, h * 0.7, w * 0.5, h * 0.05);
        break;
      default: // champ de fleurs et gros nuages
        sky('#bcd7ef', '#f7efd8');
        cloud(0.18, 0.25, 1.6);
        cloud(0.6, 0.15, 1.2);
        poly('#c7d68d', [
          [0, 0.62],
          [1, 0.58],
          [1, 1],
          [0, 1],
        ]);
        for (let k = 0; k < 60; k++)
          circle(
            k % 3 ? '#f2d16b' : '#f2b8c6',
            ((k * 17) % 100) / 100,
            0.66 + ((k * 29) % 34) / 100,
            0.008,
          );
        break;
    }
    // marge façon tirage, avec une petite ligne de légende
    g.strokeStyle = '#fbf7ef';
    g.lineWidth = 14;
    g.strokeRect(0, 0, w, h);
    g.fillStyle = 'rgba(60,50,60,.35)';
    g.fillRect(w * 0.35, h - 18, w * 0.3, 3);
  });
}
