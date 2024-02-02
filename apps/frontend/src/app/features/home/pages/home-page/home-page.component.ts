import { Component, OnInit } from '@angular/core';
import { SeoModule } from '@frontend/app/shared/seo/seo.module';
import { MetadataService } from '@frontend/app/shared/seo/services/metadata.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SeoModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {
  constructor(private readonly metadataService: MetadataService) {}

  ngOnInit(): void {
    this.metadataService.setTitle(`Evgenii Shcherbakov's website`);
    this.metadataService.setMetadata({
      description: `Evgenii Shcherbakov's personal website`,
      robots: 'all',
      keywords: ['portfolio', 'website'],
    });
  }
}
