import { Component, Input, TemplateRef } from '@angular/core';
import { NgComponentOutlet, NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-cv-link',
  standalone: true,
  imports: [NgComponentOutlet, NgIf, NgTemplateOutlet],
  templateUrl: './cv-link.component.html',
  styleUrl: './cv-link.component.scss',
})
export class CvLinkComponent {
  @Input() url?: string;

  template!: TemplateRef<any>;
}
