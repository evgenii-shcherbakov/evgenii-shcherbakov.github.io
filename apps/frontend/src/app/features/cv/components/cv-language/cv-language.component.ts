import { Component, Input } from '@angular/core';
import { CvLanguage, DEFAULT_CV_LANGUAGE } from '@packages/common';

@Component({
  selector: 'app-cv-language',
  standalone: true,
  imports: [],
  templateUrl: './cv-language.component.html',
  styleUrl: './cv-language.component.scss',
})
export class CvLanguageComponent {
  @Input() language: CvLanguage = DEFAULT_CV_LANGUAGE;
}
