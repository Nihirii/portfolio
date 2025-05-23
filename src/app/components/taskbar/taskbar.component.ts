import { Component, Output, EventEmitter } from '@angular/core';
import { NgIf, NgFor, NgClass, TitleCasePipe } from '@angular/common'; // Ajoute NgClass
import { WindowService } from '../../services/window.service';

@Component({
  selector: 'app-taskbar',
  standalone: true,
  imports: [NgIf, NgFor, NgClass, TitleCasePipe], // Ajoute NgClass ici
  templateUrl: './taskbar.component.html',
  styleUrl: './taskbar.component.scss'
})
export class TaskbarComponent {
  @Output() openWindow = new EventEmitter<string>();
  showMenu = false;
time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
showLangMenu = false;
  constructor(public windowService: WindowService) {}

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  onClickWindow(name: string) {
    this.openWindow.emit(name);
    this.showMenu = false;
  }

  get closedWindows() {
    return Object.entries(this.windowService.windows())
      .filter(([_, status]) => status === 'closed')
      .map(([name]) => name);
  }

  get openedWindows() {
    return Object.entries(this.windowService.windows())
      .filter(([_, status]) => status === 'open' || status === 'minimized')
      .map(([name, status]) => ({ name, status }));
  }
  toggleLangMenu() {
    this.showLangMenu = !this.showLangMenu;
  }

  setLang(lang: string) {
    console.log('Langue choisie :', lang); 
    this.showLangMenu = false;
  }
    
}
