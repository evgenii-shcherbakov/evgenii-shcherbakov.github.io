import { Component, Input } from '@angular/core';
import { NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { CvContactComponent } from '@frontend/app/features/cv/components/cv-contact/cv-contact.component';
import { CvGroupedListComponent } from '@frontend/app/features/cv/components/cv-grouped-list/cv-grouped-list.component';
import { CvCertificateComponent } from '@frontend/app/features/cv/components/cv-certificate/cv-certificate.component';
import { CvLanguageComponent } from '@frontend/app/features/cv/components/cv-language/cv-language.component';
import { CvParagraphComponent } from '@frontend/app/features/cv/components/cv-paragraph/cv-paragraph.component';
import { CvProjectListComponent } from '@frontend/app/features/cv/components/cv-project-list/cv-project-list.component';
import { CvExperienceComponent } from '@frontend/app/features/cv/components/cv-experience/cv-experience.component';
import { CvEducationComponent } from '@frontend/app/features/cv/components/cv-education/cv-education.component';
import {
  CvCertificate,
  CvCertificationsSection,
  CvContact,
  CvContactsSection,
  CvExperience,
  CvExperienceSection,
  CvLanguage,
  CvLanguagesSection,
  CvSection,
  CvSkillsSection,
  CvSummarySection,
  CvSectionTypeEnum,
  CvEducation,
  CvEducationSection,
  CvProject,
  CvProjectsSection,
} from '@shared/cv';

@Component({
  selector: 'app-cv-section',
  standalone: true,
  imports: [
    NgSwitch,
    NgIf,
    NgSwitchDefault,
    NgSwitchCase,
    CvContactComponent,
    CvGroupedListComponent,
    CvCertificateComponent,
    CvLanguageComponent,
    CvParagraphComponent,
    CvProjectListComponent,
    CvExperienceComponent,
    CvEducationComponent,
  ],
  templateUrl: './cv-section.component.html',
  styleUrl: './cv-section.component.scss',
})
export class CvSectionComponent {
  @Input() section?: CvSection;
  readonly CvSectionTypeEnum = CvSectionTypeEnum;

  get contacts(): CvContact[] {
    return (this.section as CvContactsSection)?.contacts ?? [];
  }

  get skillGroups(): string[][] {
    return (this.section as CvSkillsSection)?.groups ?? [];
  }

  get certificates(): CvCertificate[] {
    return (this.section as CvCertificationsSection)?.certificates ?? [];
  }

  get languages(): CvLanguage[] {
    return (this.section as CvLanguagesSection)?.languages ?? [];
  }

  get paragraphs(): string[] {
    return (this.section as CvSummarySection)?.paragraphs ?? [];
  }

  get experienceItems(): CvExperience[] {
    return (this.section as CvExperienceSection)?.items ?? [];
  }

  get educationItems(): CvEducation[] {
    return (this.section as CvEducationSection)?.items ?? [];
  }

  get projects(): CvProject[] {
    return (this.section as CvProjectsSection)?.projects ?? [];
  }
}
