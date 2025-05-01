import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-skills-window',
  standalone: true,
  imports: [NgFor],
  templateUrl: './skills-window.component.html',
  styleUrls: ['./skills-window.component.scss']
})
export class SkillsWindowComponent {
  skills = [
    { name: 'Angular', level: 90 },
    { name: 'JavaScript / TypeScript', level: 85 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'UX/UI Design', level: 70 },
    { name: 'PHP', level: 80 }
  ];
}
