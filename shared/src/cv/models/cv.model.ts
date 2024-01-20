import { CvSectionTypeEnum } from '@shared/cv/enums/cv-section-type.enum';

// export interface CvSection {
//   type: CvSectionTypeEnum;
// }

export type CvContact = {
  name: string;
  value: string;
  link?: string;
};

export type CvCertificate = {
  organization: string;
  name: string;
  date: string;
  link: string;
};

export type CvLanguage = {
  name: string;
  level: string;
  description: string;
};

export type CvProject = {
  link?: string;
  name?: string;
  summary: string;
  stack: string[];
};

export type CvExperience = {
  company: string;
  position: string;
  dates: string;
  projects: CvProject[];
};

export type CvEducation = {
  title: string;
  place: string;
  location: string;
  dates: string;
};

export type CvContactsSection = {
  type: CvSectionTypeEnum.CONTACTS;
  contacts: CvContact[];
};

export type CvSkillsSection = {
  type: CvSectionTypeEnum.SKILLS;
  groups: string[][];
};

export type CvCertificationsSection = {
  type: CvSectionTypeEnum.CERTIFICATIONS;
  certificates: CvCertificate[];
};

export type CvLanguagesSection = {
  type: CvSectionTypeEnum.LANGUAGES;
  languages: CvLanguage[];
};

export type CvSummarySection = {
  type: CvSectionTypeEnum.SUMMARY;
  paragraphs: string[];
};

export type CvExperienceSection = {
  type: CvSectionTypeEnum.EXPERIENCE;
  items: CvExperience[];
};

export type CvEducationSection = {
  type: CvSectionTypeEnum.EDUCATION;
  items: CvEducation[];
};

export type CvProjectsSection = {
  type: CvSectionTypeEnum.PROJECTS;
  projects: CvProject[];
};

export type CvSection =
  | CvContactsSection
  | CvSkillsSection
  | CvCertificationsSection
  | CvLanguagesSection
  | CvSummarySection
  | CvExperienceSection
  | CvEducationSection
  | CvProjectsSection;

export type Cv = {
  title: string;
  job: string;
  aside: CvSection[];
  content: CvSection[];
};
