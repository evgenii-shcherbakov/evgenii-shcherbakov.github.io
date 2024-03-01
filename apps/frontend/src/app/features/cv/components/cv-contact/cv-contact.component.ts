import { Component, Input } from '@angular/core';
import { CvSvgComponent } from '@/app/features/cv/components/cv-svg/cv-svg.component';
import { CvLinkDirective } from '@/app/features/cv/directives/cv-link.directive';
import { CvContact, DEFAULT_CV_CONTACT } from '@packages/common';

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
