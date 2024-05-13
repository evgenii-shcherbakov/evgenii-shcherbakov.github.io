import { ContactType, EmployeeRole, JobType, LanguageLevel } from 'enums';

export type BackendRef<T extends object> = string | T;

export interface BackendContact {
  link?: string;
  name: string;
  value: string;
  isPublic: boolean;
}

export interface BackendCertificate {
  organization: string;
  link: string;
  name: string;
  date: Date;
}

export interface BackendLanguage {
  name: string;
  level: LanguageLevel;
}

export interface BackendEducation {
  title: string;
  place: string;
  city: string;
  country: string;
  startDate: Date;
  endDate?: Date;
}

export interface BackendJob {
  title: string;
  type: JobType;
  isPublic: boolean;
}

export interface BackendIdentity {
  job: BackendRef<BackendJob>;
  fullName: string;
  summary: string[];
  isPublic: boolean;
}

export interface BackendContact {
  name: string;
  value: string;
  type: ContactType;
  link?: string;
  isPublic: boolean;
}

export interface BackendCompany {
  name: string;
  summary: string;
  link?: string;
}

export interface BackendProject {
  name?: string;
  link?: string;
  repo?: string;
  domain: string;
  role: EmployeeRole;
  isPersonal: boolean;
  responsibilities: string[];
  stack: string[];
}

export interface BackendExperience {
  projects: BackendRef<BackendProject>[];
  company: BackendRef<BackendCompany>;
  position: string;
  startDate: Date;
  endDate?: Date;
  isPublic: boolean;
}

export interface BackendCv {
  identity: BackendRef<BackendIdentity>;
  job: BackendRef<BackendJob>;
  contacts: BackendRef<BackendContact>[];
  certificates: BackendRef<BackendCertificate>[];
  languages: BackendRef<BackendLanguage>[];
  workExperience: BackendRef<BackendExperience>[];
  education: BackendRef<BackendEducation>[];
  personalProjects: BackendRef<BackendProject>[];
  alias: string;
  skills: string[];
  isPrimary: boolean;
}
