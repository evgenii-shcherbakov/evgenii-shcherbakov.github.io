export type CvProject = {
  link?: string;
  name?: string;
  summary: string;
  stack: string[];
};

export type CvProjectBlock = {
  projects: CvProject[];
};

export type CvExperienceBlock = CvProjectBlock & {
  company: string;
  position: string;
  dates: string;
};

export type CvEducationBlock = {
  title: string;
  place: string;
  location: string;
  dates: string;
};

type CvSkillBlockGroup = {
  values: string[];
};

export type CvSkillBlock = {
  groups: CvSkillBlockGroup[];
};

export type CvCertificateBlock = {
  organization: string;
  name: string;
  date: string;
  link: string;
};

export type CvContactBlock = {
  name: string;
  value: string;
  link?: string;
};

export type CvBinaryBlock = {
  name: string;
  value: string;
};

export type CvSection = {
  header: string;
  content: {
    texts?: string[];
    binaryBlocks?: CvBinaryBlock[];
    contactBlocks?: CvContactBlock[];
    certificateBlocks?: CvCertificateBlock[];
    skillBlocks?: CvSkillBlock[];
    educationBlocks?: CvEducationBlock[];
    experienceBlocks?: CvExperienceBlock[];
    projectBlocks?: CvProjectBlock[];
  };
};

export type Cv = {
  title: string;
  job: string;
  aside: CvSection[];
  content: CvSection[];
};
