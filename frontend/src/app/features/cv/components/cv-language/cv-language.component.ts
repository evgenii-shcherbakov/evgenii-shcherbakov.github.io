import { Component, Input } from '@angular/core';
import { CvLanguage } from '@shared/cv/models/cv.model';
import { DEFAULT_CV_LANGUAGE } from '@shared/cv/constants/placeholders';

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
