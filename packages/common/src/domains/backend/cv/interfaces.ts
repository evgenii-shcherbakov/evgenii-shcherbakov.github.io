import { BackendCvSectionTypeEnum } from 'domains/backend/cv/enums';

export interface BackendCvCertificate {
  organization: string;
  name: string;
  date: string;
  link: string;
}

export interface BackendCvContact {
  name: string;
  value: string;
  link?: string;
}

export interface BackendCvEducation {
  title: string;
  place: string;
  location: string;
  dates: string;
}

export interface BackendCvProject {
  link?: string;
  name?: string;
  domain: string;
  role: string;
  responsibilities: string[];
  stack: string[];
}

export interface BackendCvLanguage {
  name: string;
  level: string;
  description: string;
}

export interface BackendCvExperience {
  company: string;
  position: string;
  dates: string;
  projects: BackendCvProject[];
}

export interface CvContactsSection {
  type: BackendCvSectionTypeEnum.CONTACTS;
  contacts: BackendCvContact[];
}

export interface CvSkillsSection {
  type: BackendCvSectionTypeEnum.SKILLS;
  groups: string[][];
}

export interface CvCertificationsSection {
  type: BackendCvSectionTypeEnum.CERTIFICATIONS;
  certificates: BackendCvCertificate[];
}

export interface CvLanguagesSection {
  type: BackendCvSectionTypeEnum.LANGUAGES;
  languages: BackendCvLanguage[];
}

export interface CvSummarySection {
  type: BackendCvSectionTypeEnum.SUMMARY;
  paragraphs: string[];
}

export interface CvExperienceSection {
  type: BackendCvSectionTypeEnum.EXPERIENCE;
  items: BackendCvExperience[];
}

export interface CvEducationSection {
  type: BackendCvSectionTypeEnum.EDUCATION;
  items: BackendCvEducation[];
}

export interface CvProjectsSection {
  type: BackendCvSectionTypeEnum.PROJECTS;
  projects: BackendCvProject[];
}

export type BackendCvSection =
  | CvContactsSection
  | CvSkillsSection
  | CvCertificationsSection
  | CvLanguagesSection
  | CvSummarySection
  | CvExperienceSection
  | CvEducationSection
  | CvProjectsSection;

export interface BackendCv {
  title: string;
  job: string;
  aside: BackendCvSection[];
  content: BackendCvSection[];
}
