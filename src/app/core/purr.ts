import { Injectable } from '@angular/core';

/**
 * Ronronnement synthétisé (Web Audio) : un bruit grave modulé ~25 Hz.
 * Aucun fichier son, et rien ne joue tant que le son n'est pas activé.
 */
@Injectable({ providedIn: 'root' })
export class PurrSound {
  private ctx: AudioContext | null = null;

  play(duration = 1.6) {
    const Ctor =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctor) return;
    this.ctx ??= new Ctor();
    const ctx = this.ctx;
    void ctx.resume();
    const now = ctx.currentTime;

    const len = Math.floor(ctx.sampleRate * duration);
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
    const src = ctx.createBufferSource();
    src.buffer = buf;

    const low = ctx.createBiquadFilter();
    low.type = 'lowpass';
    low.frequency.value = 180;

    const amp = ctx.createGain();
    amp.gain.value = 0;
    const lfo = ctx.createOscillator();
    lfo.frequency.value = 24;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 0.5;
    lfo.connect(lfoGain).connect(amp.gain);

    const out = ctx.createGain();
    out.gain.setValueAtTime(0, now);
    out.gain.linearRampToValueAtTime(0.5, now + 0.2);
    out.gain.linearRampToValueAtTime(0, now + duration);

    src.connect(low).connect(amp).connect(out).connect(ctx.destination);
    src.start(now);
    lfo.start(now);
    src.stop(now + duration);
    lfo.stop(now + duration);
  }
}
