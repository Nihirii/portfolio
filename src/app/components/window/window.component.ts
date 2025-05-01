import { Component, Input, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-window',
  standalone: true,
  imports: [NgIf],
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent {
  @Input() title: string = '';
  @Input() visible: boolean = false;
  @Output() close = new EventEmitter<void>();

  private isDragging = false;
  private offsetX = 0;
  private offsetY = 0;

  constructor(private el: ElementRef) {}

  onClose() {
    this.close.emit();
  }

  startDrag(event: MouseEvent) {
    this.isDragging = true;
    const nativeEl = this.el.nativeElement.querySelector('.window');
    const rect = nativeEl.getBoundingClientRect();

    this.offsetX = event.clientX - rect.left;
    this.offsetY = event.clientY - rect.top;

    event.preventDefault();
  }

  @HostListener('document:mouseup')
  stopDrag() {
    this.isDragging = false;
  }

  @HostListener('document:mousemove', ['$event'])
  drag(event: MouseEvent) {
    if (!this.isDragging) return;

    const nativeEl = this.el.nativeElement.querySelector('.window');
    const parentRect = this.el.nativeElement.offsetParent.getBoundingClientRect();

    let newLeft = event.clientX - parentRect.left - this.offsetX;
    let newTop = event.clientY - parentRect.top - this.offsetY;

    newLeft = Math.max(0, newLeft);
    newTop = Math.max(0, newTop);

    nativeEl.style.left = `${newLeft}px`;
    nativeEl.style.top = `${newTop}px`;
  }
}
