import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-taskbar',
  standalone: true,
  templateUrl: './taskbar.component.html',
  styleUrl: './taskbar.component.scss'
})
export class TaskbarComponent {
  @Output() openWindow = new EventEmitter<string>();

  onButtonClick(windowName: string) {
    this.openWindow.emit(windowName);
  }
}
