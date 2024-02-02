import { Component, Input } from '@angular/core';
import { DEFAULT_PLACEHOLDER } from '@shared/core';

@Component({
  selector: 'app-cv-paragraph',
  standalone: true,
  imports: [],
  templateUrl: './cv-paragraph.component.html',
  styleUrl: './cv-paragraph.component.scss',
})
export class CvParagraphComponent {
  @Input() text: string = DEFAULT_PLACEHOLDER;
}
