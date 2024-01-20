import { Component, Input } from '@angular/core';
import { CvContact } from '@shared/cv/models/cv.model';
import { CvSvgComponent } from '@frontend/app/features/cv/components/cv-svg/cv-svg.component';
import { DEFAULT_CV_CONTACT } from '@shared/cv/constants/placeholders';
import { CvLinkDirective } from '@frontend/app/features/cv/directives/cv-link.directive';

@Component({
  selector: 'app-cv-contact',
  standalone: true,
  imports: [CvSvgComponent, CvLinkDirective],
  templateUrl: './cv-contact.component.html',
  styleUrl: './cv-contact.component.scss',
})
export class CvContactComponent {
  @Input() contact: CvContact = DEFAULT_CV_CONTACT;
}
