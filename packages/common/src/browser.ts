export * from './common';

// admin

export type { AdminRestApiSchema } from './domains/admin';
export type { AdminHashDto } from './domains/admin/hash';

// backend

export type { BackendRestApiSchema } from './domains/backend';
export type {
  BackendAuthRequestDto,
  BackendAuthResponseDto,
  BackendAuthUserIdentityResponseDto,
  BackendAuthRestApiSchema,
} from './domains/backend/auth';
export type {
  Cv,
  CvSection,
  CvEducation,
  CvEducationSection,
  CvExperience,
  CvCertificationsSection,
  CvLanguage,
  CvLanguagesSection,
  CvProject,
  CvProjectsSection,
  CvSkillsSection,
  CvSummarySection,
  CvContactsSection,
  CvExperienceSection,
  CvContact,
  CvCertificate,
} from './domains/backend/cv';

// external

export type {
  VercelRestApiSchema,
  VercelGetProjectDomainsResponseDto,
  VercelCreateEnvVariableResponseDto,
  VercelCreateEnvVariableRequestDto,
  VercelGetDeploymentsResponseDto,
  VercelPaginationResponseDto,
} from './domains/vercel';
