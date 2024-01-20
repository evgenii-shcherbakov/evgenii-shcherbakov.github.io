import { Component, Input } from '@angular/core';
import { CvCertificate } from '@shared/cv/models/cv.model';
import { DEFAULT_CV_CERTIFICATE } from '@shared/cv/constants/placeholders';
import { CvLinkDirective } from '@frontend/app/features/cv/directives/cv-link.directive';

@Component({
  selector: 'app-cv-certificate',
  standalone: true,
  imports: [CvLinkDirective],
  templateUrl: './cv-certificate.component.html',
  styleUrl: './cv-certificate.component.scss',
})
export class CvCertificateComponent {
  @Input() certificate: CvCertificate = DEFAULT_CV_CERTIFICATE;
}
