import { Injectable, signal } from '@angular/core';

export type WindowStatus = 'closed' | 'open' | 'minimized';

@Injectable({
  providedIn: 'root'
})
export class WindowService {
  windows = signal<Record<string, WindowStatus>>({
    about: 'closed',
    hobbies: 'closed',
    skills: 'closed',
    music: 'closed',
    contact: 'closed'
  });

  open(name: string) {
    this.windows.update(state => ({ ...state, [name]: 'open' }));
  }

  minimize(name: string) {
    this.windows.update(state => ({ ...state, [name]: 'minimized' }));
  }
  close(name: string) {
    this.windows.update(state => ({ ...state, [name]: 'closed' }));
  }
  

  isVisible(name: string): boolean {
    return this.windows()[name] === 'open';
  }
}
