import {
  Cv,
  CvCertificate,
  CvContact,
  CvEducation,
  CvExperience,
  CvLanguage,
  CvProject,
} from '../models/cv.model';
import { DEFAULT_LINK, DEFAULT_PLACEHOLDER } from '@shared/core';

export const DEFAULT_CV_CONTACT: CvContact = {
  name: DEFAULT_PLACEHOLDER,
  value: DEFAULT_PLACEHOLDER,
  link: DEFAULT_LINK,
};

export const DEFAULT_CV_CERTIFICATE: CvCertificate = {
  date: DEFAULT_PLACEHOLDER,
  link: DEFAULT_LINK,
  name: DEFAULT_PLACEHOLDER,
  organization: DEFAULT_PLACEHOLDER,
};

export const DEFAULT_CV_LANGUAGE: CvLanguage = {
  description: DEFAULT_PLACEHOLDER,
  level: DEFAULT_PLACEHOLDER,
  name: DEFAULT_PLACEHOLDER,
};

export const DEFAULT_CV_EXPERIENCE: CvExperience = {
  company: DEFAULT_PLACEHOLDER,
  dates: DEFAULT_PLACEHOLDER,
  position: DEFAULT_PLACEHOLDER,
  projects: [],
};

export const DEFAULT_CV_EDUCATION: CvEducation = {
  dates: DEFAULT_PLACEHOLDER,
  location: DEFAULT_PLACEHOLDER,
  place: DEFAULT_PLACEHOLDER,
  title: DEFAULT_PLACEHOLDER,
};

export const DEFAULT_CV_PROJECT: CvProject = {
  link: DEFAULT_LINK,
  name: DEFAULT_PLACEHOLDER,
  stack: [],
  summary: DEFAULT_PLACEHOLDER,
};

export const DEFAULT_CV: Cv = {
  aside: [],
  content: [],
  job: DEFAULT_PLACEHOLDER,
  title: DEFAULT_PLACEHOLDER,
};
