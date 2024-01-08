import { FC } from 'react';
import { CvProjectBlockProps } from '@/features/cv/components/blocks/project/types';
import './cv-project-block.scss';
import { CvProject } from '@/features/cv/components/project/cv-project';

export const CvProjectBlock: FC<CvProjectBlockProps> = ({ content }) => {
  return (
    <ul className="project-block">
      {content.projects.map((project, index) => (
        <CvProject key={'project' + index.toString()} project={project} />
      ))}
    </ul>
  );
};
