import { FC } from 'react';
import { CvProjectProps } from '@/features/cv/components/project/types';
import './cv-project.scss';
import { CvLink } from '@/features/cv/components/hoc/link/cv-link';

export const CvProject: FC<CvProjectProps> = ({ project }) => {
  return (
    <CvLink link={project.link}>
      <li className="project">
        {project.name && <p className="project__name">{project.name}</p>}
        <p className="project__summary">{project.summary}</p>
        <p className="project__stack">{project.stack.join(', ')}</p>
      </li>
    </CvLink>
  );
};
