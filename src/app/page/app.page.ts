import { component, HTMLTemplateVars, Page } from 'rxspa';
import { AppContext } from '../../types/store';
import template from './app.page.html';
import './app.page.scss';
import {
  BinaryBlockComponent,
  CertificateBlockComponent,
  ContactBlockComponent,
  EducationBlockComponent,
  ExperienceBlockComponent,
  HeaderComponent,
  SectionComponent,
  SkillBlockComponent,
  TextBlockComponent,
} from '../../components';
import { Data, Section } from '../../types/models';
import { SectionStrategy } from '../../types/common';
import { IRouter } from 'rxspa/dist/browser/interfaces';
import { PageQuery } from '../../constants/enums';

@component({ template })
export class AppPage extends Page<AppContext> {
  private header: HeaderComponent | null = null;
  private asideSections: SectionComponent[] = [];
  private contentSections: SectionComponent[] = [];

  constructor(
    router: IRouter,
    context: AppContext,
    private readonly prevPage: PageQuery,
    private readonly nextPage: PageQuery,
  ) {
    super(router, context);
  }

  private static SECTION_STRATEGY: SectionStrategy = {
    binaryBlocks: BinaryBlockComponent,
    skillBlocks: SkillBlockComponent,
    certificateBlocks: CertificateBlockComponent,
    contactBlocks: ContactBlockComponent,
    texts: TextBlockComponent,
    educationBlocks: EducationBlockComponent,
    experienceBlocks: ExperienceBlockComponent,
  };

  private static getSectionContent(content: Section['content']): HTMLElement[] {
    for (const section in this.SECTION_STRATEGY) {
      const typedSection = section as keyof SectionStrategy;

      if (content[typedSection]) {
        // eslint-disable-next-line
        return content[typedSection]!.map((props: any) => {
          return new this.SECTION_STRATEGY[typedSection]!(props).render();
        });
      }
    }

    return [];
  }

  protected onInit() {
    if (this.context.lifecycle.appInit.value) {
      this.node.classList.add(this.activeClass);
      this.context.lifecycle.toggleAppInit();
    }

    const data: Data = this.context.data.data.value;

    this.header = new HeaderComponent(data.title, data.job, data.location);

    this.asideSections.push(
      ...data.aside.map((section: Section) => {
        return new SectionComponent(section.header, AppPage.getSectionContent(section.content));
      }),
    );

    this.contentSections.push(
      ...data.content.map((section: Section) => {
        return new SectionComponent(section.header, AppPage.getSectionContent(section.content));
      }),
    );
  }

  protected inject() {
    if (this.header) {
      this.node.querySelector('header')?.append(this.header.render());
    }

    this.asideSections.forEach((section: SectionComponent) => {
      this.node.querySelector('aside')?.append(section.render());
    });

    this.contentSections.forEach((section: SectionComponent) => {
      this.node.querySelector('article')?.append(section.render());
    });
  }

  protected vars(): HTMLTemplateVars {
    return {
      prevPage: this.prevPage,
      nextPage: this.nextPage,
    };
  }

  private get nextNavAnchorListener() {
    return () => this.router.openPage(this.nextPage);
  }

  private get prevNavAnchorListener() {
    return () => this.router.openPage(this.prevPage);
  }

  protected handleEvents() {
    this.node
      .querySelector('#prev-nav-anchor')
      ?.addEventListener('click', this.prevNavAnchorListener.bind(this));

    this.node
      .querySelector('#next-nav-anchor')
      ?.addEventListener('click', this.nextNavAnchorListener.bind(this));
  }

  onDestroy() {
    this.node
      .querySelector('#prev-nav-anchor')
      ?.removeEventListener('click', this.prevNavAnchorListener.bind(this));

    this.node
      .querySelector('#next-nav-anchor')
      ?.removeEventListener('click', this.nextNavAnchorListener.bind(this));
  }
}
