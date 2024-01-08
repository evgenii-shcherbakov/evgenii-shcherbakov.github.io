export type Project = {
  link?: string;
  name?: string;
  summary: string;
  stack: string[];
};

export type ProjectBlock = {
  projects: Project[];
};

export type ExperienceBlock = ProjectBlock & {
  company: string;
  position: string;
  dates: string;
};

export type EducationBlock = {
  title: string;
  place: string;
  location: string;
  dates: string;
};

type SkillBlockGroup = {
  values: string[];
};

export type SkillBlock = {
  groups: SkillBlockGroup[];
};

export type CertificateBlock = {
  organization: string;
  name: string;
  date: string;
  link: string;
};

export type ContactBlock = {
  name: string;
  value: string;
  link?: string;
};

export type BinaryBlock = {
  name: string;
  value: string;
};

export type Section = {
  header: string;
  content: {
    texts?: string[];
    binaryBlocks?: BinaryBlock[];
    contactBlocks?: ContactBlock[];
    certificateBlocks?: CertificateBlock[];
    skillBlocks?: SkillBlock[];
    educationBlocks?: EducationBlock[];
    experienceBlocks?: ExperienceBlock[];
    projectBlocks?: ProjectBlock[];
  };
};

export type Data = {
  title: string;
  job: string;
  aside: Section[];
  content: Section[];
};
