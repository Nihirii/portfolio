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
