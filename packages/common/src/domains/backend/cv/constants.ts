import { DEFAULT_LINK, DEFAULT_PLACEHOLDER } from 'constants/common';
import {
  BackendCv,
  BackendCvCertificate,
  BackendCvContact,
  BackendCvEducation,
  BackendCvExperience,
  BackendCvLanguage,
  BackendCvProject,
} from 'domains/backend/cv/interfaces';

export const DEFAULT_CV_CONTACT: BackendCvContact = {
  name: DEFAULT_PLACEHOLDER,
  value: DEFAULT_PLACEHOLDER,
  link: DEFAULT_LINK,
};

export const DEFAULT_CV_CERTIFICATE: BackendCvCertificate = {
  date: DEFAULT_PLACEHOLDER,
  link: DEFAULT_LINK,
  name: DEFAULT_PLACEHOLDER,
  organization: DEFAULT_PLACEHOLDER,
};

export const DEFAULT_CV_LANGUAGE: BackendCvLanguage = {
  description: DEFAULT_PLACEHOLDER,
  level: DEFAULT_PLACEHOLDER,
  name: DEFAULT_PLACEHOLDER,
};

export const DEFAULT_CV_EXPERIENCE: BackendCvExperience = {
  company: DEFAULT_PLACEHOLDER,
  dates: DEFAULT_PLACEHOLDER,
  position: DEFAULT_PLACEHOLDER,
  projects: [],
};

export const DEFAULT_CV_EDUCATION: BackendCvEducation = {
  dates: DEFAULT_PLACEHOLDER,
  location: DEFAULT_PLACEHOLDER,
  place: DEFAULT_PLACEHOLDER,
  title: DEFAULT_PLACEHOLDER,
};

export const DEFAULT_CV_PROJECT: BackendCvProject = {
  link: DEFAULT_LINK,
  name: DEFAULT_PLACEHOLDER,
  stack: [],
  domain: DEFAULT_PLACEHOLDER,
  responsibilities: [],
  role: DEFAULT_PLACEHOLDER,
};

export const DEFAULT_CV: BackendCv = {
  aside: [],
  content: [],
  job: DEFAULT_PLACEHOLDER,
  title: DEFAULT_PLACEHOLDER,
};
