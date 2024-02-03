import { Injectable } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { Metadata } from '@/app/shared/seo/models/metadata.model';

@Injectable()
export class MetadataService {
  private readonly AUTHOR = 'Evgenii Shcherbakov';

  constructor(
    private readonly meta: Meta,
    private readonly title: Title,
  ) {}

  setTitle(title: string) {
    this.title.setTitle(title);
    this.meta.addTags([
      { name: 'og:title', content: title },
      { name: 'twitter:title', content: title },
    ]);
  }

  setMetadata(metadata: Metadata = {}) {
    const tags: MetaDefinition[] = [
      { name: 'author', content: this.AUTHOR },
      { name: 'twitter:creator', content: this.AUTHOR },
      {
        name: 'og:site_name',
        content: metadata.siteName ?? `Evgenii Shcherbakov's personal website`,
      },
      { name: 'og:type', content: metadata.type ?? 'website' },
    ];

    if (metadata.description) {
      tags.push(
        { name: 'description', content: metadata.description },
        { name: 'og:description', content: metadata.description },
        { name: 'twitter:description', content: metadata.description },
      );
    }

    if (metadata.keywords) {
      tags.push({ name: 'keywords', content: metadata.keywords.join(',') });
    }

    if (metadata.robots) {
      tags.push({ name: 'robots', content: metadata.robots });
    }

    this.meta.addTags(tags);
  }
}
