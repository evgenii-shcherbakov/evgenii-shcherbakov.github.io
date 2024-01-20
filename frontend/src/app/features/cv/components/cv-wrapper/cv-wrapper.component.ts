import { Component, Input } from '@angular/core';
import { CvHeaderComponent } from '@frontend/app/features/cv/components/cv-header/cv-header.component';
import { CvSectionComponent } from '@frontend/app/features/cv/components/cv-section/cv-section.component';
import { Cv } from '@shared/cv/models/cv.model';
import { DEFAULT_CV } from '@shared/cv/constants/placeholders';

@Component({
  selector: 'app-cv-wrapper',
  standalone: true,
  imports: [CvHeaderComponent, CvSectionComponent],
  templateUrl: './cv-wrapper.component.html',
  styleUrl: './cv-wrapper.component.scss',
})
export class CvWrapperComponent {
  @Input({ required: true }) data: Cv = DEFAULT_CV;
}
