import { Injectable } from '@angular/core';

/**
 * Petit air de guitare original (arpèges Do – La mineur – Fa – Sol),
 * synthétisé en Web Audio par l'algorithme de Karplus-Strong : aucun fichier audio.
 */
@Injectable({ providedIn: 'root' })
export class GuitarSound {
  private ctx: AudioContext | null = null;
  private busyUntil = 0;
  private cache = new Map<number, AudioBuffer>();

  /** Hz des notes : Do3 Mi3 Sol3 Do4 / La2 Mi3 La3 Do4 / Fa2 Do3 Fa3 La3 / Sol2 Ré3 Sol3 Si3 */
  private readonly melody = [
    130.81, 164.81, 196.0, 261.63, 110.0, 164.81, 220.0, 261.63, 87.31, 130.81, 174.61, 220.0, 98.0,
    146.83, 196.0, 246.94, 261.63,
  ];

  /** Joue l'air, sauf s'il est déjà en cours. */
  play() {
    const Ctor =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctor) return;
    this.ctx ??= new Ctor();
    const ctx = this.ctx;
    if (ctx.currentTime < this.busyUntil) return;
    void ctx.resume();
    const out = ctx.createGain();
    out.gain.value = 0.35;
    out.connect(ctx.destination);
    const start = ctx.currentTime + 0.05;
    const step = 0.17;
    this.melody.forEach((f, i) => {
      const src = ctx.createBufferSource();
      src.buffer = this.pluck(ctx, f);
      src.connect(out);
      const last = i === this.melody.length - 1;
      src.start(start + i * step + (last ? 0.12 : 0));
    });
    this.busyUntil = start + this.melody.length * step + 1.2;
  }

  private pluck(ctx: AudioContext, freq: number): AudioBuffer {
    const cached = this.cache.get(freq);
    if (cached) return cached;
    const sr = ctx.sampleRate;
    const len = Math.floor(sr * 1.6);
    const buf = ctx.createBuffer(1, len, sr);
    const out = buf.getChannelData(0);
    const period = Math.round(sr / freq);
    const ring = new Float32Array(period);
    for (let i = 0; i < period; i++) ring[i] = Math.random() * 2 - 1;
    let idx = 0;
    for (let i = 0; i < len; i++) {
      const next = (idx + 1) % period;
      const v = 0.497 * (ring[idx] + ring[next]);
      out[i] = ring[idx];
      ring[idx] = v;
      idx = next;
    }
    this.cache.set(freq, buf);
    return buf;
  }
}
