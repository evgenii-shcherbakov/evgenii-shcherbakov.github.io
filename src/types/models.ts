export type ExperienceBlock = {
  company: string;
  position: string;
  summary: string[];
  dates: string;
};

export type EducationBlock = {
  title: string;
  place: string;
  location: string;
  dates: string;
};

export type SkillBlock = {
  group: string;
  values: string[];
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
  iconClass: string;
  link: string;
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
  };
};

export type Data = {
  title: string;
  job: string;
  location: string;
  aside: Section[];
  content: Section[];
};
