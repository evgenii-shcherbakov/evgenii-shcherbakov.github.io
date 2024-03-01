import { CvContact } from './cv.contact';
import { CvSectionTypeEnum } from '../enums/cv-section-type.enum';
import { CvCertificate } from './cv.certificate';
import { CvLanguage } from './cv.language';
import { CvExperience } from './cv.experience';
import { CvEducation } from './cv.education';
import { CvProject } from './cv.project';

export interface CvContactsSection {
  type: CvSectionTypeEnum.CONTACTS;
  contacts: CvContact[];
}

export interface CvSkillsSection {
  type: CvSectionTypeEnum.SKILLS;
  groups: string[][];
}

export interface CvCertificationsSection {
  type: CvSectionTypeEnum.CERTIFICATIONS;
  certificates: CvCertificate[];
}

export interface CvLanguagesSection {
  type: CvSectionTypeEnum.LANGUAGES;
  languages: CvLanguage[];
}

export interface CvSummarySection {
  type: CvSectionTypeEnum.SUMMARY;
  paragraphs: string[];
}

export interface CvExperienceSection {
  type: CvSectionTypeEnum.EXPERIENCE;
  items: CvExperience[];
}

export interface CvEducationSection {
  type: CvSectionTypeEnum.EDUCATION;
  items: CvEducation[];
}

export interface CvProjectsSection {
  type: CvSectionTypeEnum.PROJECTS;
  projects: CvProject[];
}

export type CvSection =
  | CvContactsSection
  | CvSkillsSection
  | CvCertificationsSection
  | CvLanguagesSection
  | CvSummarySection
  | CvExperienceSection
  | CvEducationSection
  | CvProjectsSection;
