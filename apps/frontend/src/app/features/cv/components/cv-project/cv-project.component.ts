import { Component, Input } from '@angular/core';
import { CvLinkDirective } from '@/app/features/cv/directives/cv-link.directive';
import { CvProject, DEFAULT_CV_PROJECT } from '@shared/cv';

@Component({
  selector: 'app-cv-project',
  standalone: true,
  imports: [CvLinkDirective],
  templateUrl: './cv-project.component.html',
  styleUrl: './cv-project.component.scss',
})
export class CvProjectComponent {
  @Input({ required: true }) project: CvProject = DEFAULT_CV_PROJECT;

  get stack() {
    return this.project.stack.join(', ');
  }
}
