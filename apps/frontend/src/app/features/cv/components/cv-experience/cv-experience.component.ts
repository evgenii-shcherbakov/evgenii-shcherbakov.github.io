import { Component, Input } from '@angular/core';
import { CvProjectListComponent } from '@/app/features/cv/components/cv-project-list/cv-project-list.component';
import { CvSvgComponent } from '@/app/features/cv/components/cv-svg/cv-svg.component';
import { CvExperience, DEFAULT_CV_EXPERIENCE } from '@shared/cv';

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
