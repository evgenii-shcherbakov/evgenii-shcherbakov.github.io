import { FC } from 'react';
import { CvSkillBlockProps } from '@/features/cv/components/blocks/skill/types';
import './cv-skill-block.scss';

export const CvSkillBlock: FC<CvSkillBlockProps> = ({ content }) => {
  return (
    <div className="skill-block">
      <ul className="skill-block__values">
        {content.groups.map(({ values }, index) => (
          <li key={'skill' + index.toString()}>{values.join(', ')}</li>
        ))}
      </ul>
    </div>
  );
};
