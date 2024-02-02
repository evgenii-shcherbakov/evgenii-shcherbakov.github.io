import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { DEFAULT_PLACEHOLDER } from '@shared/core';

@Component({
  selector: 'app-cv-header',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './cv-header.component.html',
  styleUrl: './cv-header.component.scss',
})
export class CvHeaderComponent {
  @Input() title: string = DEFAULT_PLACEHOLDER;
  @Input() job: string = DEFAULT_PLACEHOLDER;
  @Input() photoUrl: string = './assets/photo.webp';
}
