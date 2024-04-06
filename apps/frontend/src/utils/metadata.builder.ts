import { Metadata } from 'next';
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';
import { Twitter } from 'next/dist/lib/metadata/types/twitter-types';
import { Author } from 'next/dist/lib/metadata/types/metadata-types';

export class MetadataBuilder {
  // TODO: move to it backend later
  private readonly AUTHOR: Author = {
    name: 'Evgenii Shcherbakov',
    url: 'http://example.com',
  };

  private metadata: Metadata = {
    authors: this.AUTHOR,
    openGraph: {
      type: 'website',
    },
    twitter: {
      creator: this.AUTHOR.name,
    },
  };

  private openGraph: OpenGraph = {
    type: 'website',
  };

  private twitter: Twitter = {
    creator: this.AUTHOR.name,
  };

  setTitle(title: string): typeof this {
    this.metadata.title = title;
    this.openGraph.title = title;
    this.twitter.title = title;
    return this;
  }

  setDescription(description: string): typeof this {
    this.metadata.description = description;
    this.openGraph.description = description;
    this.twitter.description = description;
    return this;
  }

  setKeywords(keywords: string[]): typeof this {
    this.metadata.keywords = keywords;
    return this;
  }

  setRobots(robots: Metadata['robots']): typeof this {
    this.metadata.robots = robots;
    return this;
  }

  setMetadata({ twitter, openGraph, ...rest }: Metadata = {}): typeof this {
    this.metadata = {
      ...this.metadata,
      ...rest,
    };

    this.openGraph = {
      ...this.openGraph,
      ...openGraph,
    };

    this.twitter = {
      ...this.twitter,
      ...twitter,
    };

    return this;
  }

  build(): Metadata {
    return {
      ...this.metadata,
      openGraph: this.openGraph,
      twitter: this.twitter,
    };
  }
}
