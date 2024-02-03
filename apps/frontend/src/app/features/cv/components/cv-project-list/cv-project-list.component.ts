import { Component, Input } from '@angular/core';
import { CvProject } from '@shared/cv';
import { CvProjectComponent } from '@/app/features/cv/components/cv-project/cv-project.component';

@Component({
  selector: 'app-cv-project-list',
  standalone: true,
  imports: [CvProjectComponent],
  templateUrl: './cv-project-list.component.html',
  styleUrl: './cv-project-list.component.scss',
})
export class CvProjectListComponent {
  @Input() projects: CvProject[] = [];
}
