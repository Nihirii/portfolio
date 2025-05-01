import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowService {
  windows = signal<Record<string, boolean>>({
    about: false,
    hobbies: false,
    skills: false,
    music: false,
    contact: false
  });

  open(windowName: string) {
    this.windows.update(state => ({ ...state, [windowName]: true }));
  }

  close(windowName: string) {
    this.windows.update(state => ({ ...state, [windowName]: false }));
  }

  isVisible(windowName: string) {
    return this.windows()[windowName]; // correction de la syntaxe ici
  }
}
