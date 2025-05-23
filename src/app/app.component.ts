import { Component } from '@angular/core';
import { TaskbarComponent } from './components/taskbar/taskbar.component';
import { WindowComponent } from './components/window/window.component';
import { WindowService } from './services/window.service';
import { AboutWindowComponent } from './components/windows/about-window/about-window.component';
import { HobbiesWindowComponent } from './components/windows/hobbies-window/hobbies-window.component';
import { MusicWindowComponent } from './components/windows/music-window/music-window.component';
import { SkillsWindowComponent } from './components/windows/skills-window/skills-window.component';
import { ContactWindowComponent } from './components/windows/contact-window/contact-window.component';
import { ProjectWindowComponent } from './components/project-window/project-window.component';
import { NgIf } from '@angular/common'; // ⬅️ ajoute ça
@Component({
  
  selector: 'app-root',
  standalone: true,
  imports: [TaskbarComponent, WindowComponent, AboutWindowComponent, HobbiesWindowComponent,MusicWindowComponent,SkillsWindowComponent, ContactWindowComponent,ProjectWindowComponent, NgIf],
  template: `
 
      <h1 class="main-title">Meet the dev/<span class="ui">ui</span></h1>
      <div class="project-folders">
        <button (click)="project1Open = true">
          <img src="assets/img/folder.png" alt="dossier" />
          <span>Projet 1</span>
        </button>
        
        <button>
          <img src="../assets/img/folder.png" alt="dossier" />
          <span>Projet 2</span>
        </button>
        <button>
          <img src="assets/img/folder.png" alt="dossier" />
          <span>Projet 3</span>
        </button>
        <button>
          <img src="assets/img/folder.png" alt="dossier" />
          <span>Projet 4</span>
        </button>
        <button>
          <img src="assets/img/folder.png" alt="dossier" />
          <span>Projet 5</span>
        </button>
        <button>
          <img src="assets/img/folder.png" alt="dossier" />
          <span>Ressources</span>
        </button>
      </div>



    <app-project-window
      *ngIf="project1Open"
      [title]="'Projet 1'"
      [description]="'Mon premier projet cool'"
      [techs]="['Angular', 'SCSS']"
      [link]="'https://github.com/lenadev/projet1'"
      (close)="project1Open = false">
    </app-project-window>


    <app-taskbar (openWindow)="open($event)"></app-taskbar>
    <app-window 
      title="About Me" 
      [visible]="isWindowVisible('about')"
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
@use '../styles/variables' as *;
  :host {
    display: block;
    height: 100vh;
    background-image: linear-gradient(#f7f7f7 2px, transparent 2px), 
                      linear-gradient(90deg, #f7f7f7 2px, transparent 2px);
    background-size: 50px 50px;
    position: relative;
    overflow: hidden;
  }
  
  .main-title {
    position: absolute;
    top: 16px;
    left: 49%;
    transform: translateX(-50%);
    z-index: 10;

    font-family: 'Press Start 2P', monospace;
    font-size: 50px;
    text-align: center!important;
    padding: 8px 16px;
    text-shadow: 3px 3px 0 $color-primary;

    color: black;

    .ui {
      color: $color-primary;
    }
  }
  .project-folders {
  position: absolute;
  bottom: 50px;
  right: 32px;
  display: flex;
  gap: 16px;
  z-index: 5;

  button {
    background: none;
    border: none;
    cursor: pointer;
    font-family: 'Press Start 2P', monospace;
    font-size: 10px;
    text-align: center;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 100px;
      height: auto;
      margin-bottom: 4px;
    }

    &:hover {
      color: #4aa9ff;
    }
  }
}

`]

})
export class AppComponent {
  project1Open = false;

  constructor(public windows: WindowService) {}

  open(windowName: string) {
    this.windows.open(windowName);
  }
  isWindowVisible(name: string): boolean {
    const status = this.windows.windows()[name];
    return status === 'open';
  }
  

  close(windowName: string) {
    this.windows.close(windowName);
  }
  
}