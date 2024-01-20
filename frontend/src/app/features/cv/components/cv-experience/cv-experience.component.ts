import { Component, Input } from '@angular/core';
import { CvExperience } from '@shared/cv/models/cv.model';
import { DEFAULT_CV_EXPERIENCE } from '@shared/cv/constants/placeholders';
import { CvProjectListComponent } from '@frontend/app/features/cv/components/cv-project-list/cv-project-list.component';
import { CvSvgComponent } from '@frontend/app/features/cv/components/cv-svg/cv-svg.component';

@Component({
  selector: 'app-cv-experience',
  standalone: true,
  imports: [CvProjectListComponent, CvSvgComponent],
  templateUrl: './cv-experience.component.html',
  styleUrl: './cv-experience.component.scss',
})
export class CvExperienceComponent {
  @Input() experience: CvExperience = DEFAULT_CV_EXPERIENCE;
}
