import { Component, OnInit } from '@angular/core';
import { CvHeaderComponent } from '@/app/features/cv/components/cv-header/cv-header.component';
import { GetCvService } from '@/app/features/cv/services/get-cv.service';
import { CvSectionComponent } from '@/app/features/cv/components/cv-section/cv-section.component';
import { CvWrapperComponent } from '@/app/features/cv/components/cv-wrapper/cv-wrapper.component';
import { Cv, DEFAULT_CV } from '@shared/cv';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MetadataService } from '@/app/shared/seo/services/metadata.service';
import { SeoModule } from '@/app/shared/seo/seo.module';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [CvHeaderComponent, CvSectionComponent, CvWrapperComponent, SeoModule],
  templateUrl: './cv-page.component.html',
  styleUrl: './cv-page.component.scss',
})
export class CvPageComponent implements OnInit {
  cv: Cv = DEFAULT_CV;

  constructor(
    private readonly getCvService: GetCvService,
    private readonly route: ActivatedRoute,
    private readonly metadataService: MetadataService,
  ) {}

  ngOnInit(): void {
    this.metadataService.setMetadata({
      description: 'Evgenii Shcherbakov CV',
      robots: 'all',
      keywords: ['cv', 'resume', 'opentowork'],
    });

    this.route.paramMap.subscribe((params: ParamMap) => {
      const alias = params.get('cvAlias') ?? '';
      this.cv = this.getCvService.getCv(alias);
      this.metadataService.setTitle(`Evgenii Shcherbakov's ${alias} CV`);
    });
  }
}
