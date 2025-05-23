import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowComponent } from '../window/window.component';


@Component({
  selector: 'app-project-window',
  standalone: true,
  imports: [CommonModule, WindowComponent],
  templateUrl: './project-window.component.html',
  styleUrls: ['./project-window.component.scss']
})
export class ProjectWindowComponent {
  @Input() title = 'Projet';
  @Input() description = '';
  @Input() techs: string[] = [];
  @Input() link = '';
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
