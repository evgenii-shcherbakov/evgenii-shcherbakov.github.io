export enum DatabaseCollection {
  MIGRATION = 'migrations',
  USER = 'users',
  CONTACT = 'contacts',
  EXPERIENCE = 'experiences',
  JOB = 'jobs',
  LANGUAGE = 'languages',
  IDENTITY = 'identities',
  COMPANY = 'companies',
  PROJECT = 'projects',
  EDUCATION = 'educations',
  CERTIFICATE = 'certificates',
  FILE = 'files',
  // DATABASE COLLECTION ITEMS
}

export enum LanguageLevel {
  A1 = 'beginner',
  A2 = 'elementary',
  B1 = 'intermediate',
  B2 = 'upper-intermediate',
  C1 = 'advanced',
  C2 = 'fluent',
}

export enum EmployeeRole {
  BACKEND_DEVELOPER = 'backend developer',
  FRONTEND_DEVELOPER = 'frontend developer',
  FULL_STACK_DEVELOPER = 'full-stack developer',
}

export enum JobType {
  BACKEND = 'backend',
  FRONTEND = 'frontend',
  FULL_STACK = 'full-stack',
}

export enum ContactType {
  LOCATION = 'location',
  PHONE = 'phone',
  MAIL = 'mail',
  URL = 'url',
  SOCIAL_NETWORK = 'social-network',
}
