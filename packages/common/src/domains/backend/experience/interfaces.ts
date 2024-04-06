export interface BackendProject {
  link?: string;
  name?: string;
  domain: string;
  role: string;
  responsibilities: string[];
  stack: string[];
}

export interface BackendExperience {
  company: string;
  position: string;
  dates: string;
  projects: BackendProject[];
}
