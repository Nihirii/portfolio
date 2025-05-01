import { Component } from '@angular/core';
import { TaskbarComponent } from './components/taskbar/taskbar.component';
import { WindowComponent } from './components/window/window.component';
import { WindowService } from './services/window.service';
import { AboutWindowComponent } from './components/windows/about-window/about-window.component';
import { HobbiesWindowComponent } from './components/windows/hobbies-window/hobbies-window.component';
import { MusicWindowComponent } from './components/windows/music-window/music-window.component';
import { SkillsWindowComponent } from './components/windows/skills-window/skills-window.component';
import { ContactWindowComponent } from './components/windows/contact-window/contact-window.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskbarComponent, WindowComponent, AboutWindowComponent, HobbiesWindowComponent,MusicWindowComponent,SkillsWindowComponent, ContactWindowComponent],
  template: `
    <app-taskbar (openWindow)="open($event)"></app-taskbar>

    <app-window 
      title="About Me" 
      [visible]="windows.isVisible('about')"
      (close)="close('about')">
        <app-about-window></app-about-window>
    </app-window>

    <app-window 
      title="Hobbies" 
      [visible]="windows.isVisible('hobbies')"
      (close)="close('hobbies')">
      <app-hobbies-window></app-hobbies-window>
    </app-window>

    <app-window 
      title="skills" 
      [visible]="windows.isVisible('skills')"
      (close)="close('skills')">
      <app-skills-window></app-skills-window>
    </app-window>

    <app-window 
      title="music" 
      [visible]="windows.isVisible('music')"
      (close)="close('music')">
      <app-music-window></app-music-window>
    </app-window>

    <app-window 
      title="contact" 
      [visible]="windows.isVisible('contact')"
      (close)="close('contact')">
      <app-contact-window></app-contact-window>
    </app-window>



  `,
  styles: [`
    :host {
      display: block;
      height: 100vh;
      background-image: linear-gradient(#f7f7f7 2px, transparent 2px), 
                        linear-gradient(90deg, #f7f7f7 2px, transparent 2px);
      background-size: 50px 50px;
      position: relative;
      overflow: hidden;
    }
  `]
})
export class AppComponent {
  constructor(public windows: WindowService) {}

  open(windowName: string) {
    this.windows.open(windowName);
  }

  close(windowName: string) {
    this.windows.close(windowName);
  }
  
}
