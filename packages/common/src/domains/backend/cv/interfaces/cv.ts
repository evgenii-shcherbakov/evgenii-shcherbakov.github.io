import { CvSection } from './cv.section';

export interface Cv {
  title: string;
  job: string;
  aside: CvSection[];
  content: CvSection[];
}
