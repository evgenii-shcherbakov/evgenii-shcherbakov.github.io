import { CvProject } from './cv.project';

export interface CvExperience {
  company: string;
  position: string;
  dates: string;
  projects: CvProject[];
}
