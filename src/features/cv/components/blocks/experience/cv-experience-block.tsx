import { FC } from 'react';
import { CvExperienceBlockProps } from '@/features/cv/components/blocks/experience/types';
import './cv-experience-block.scss';
import { CvProjectBlock } from '@/features/cv/components/blocks/project/cv-project-block';
import { CvSvg } from '@/features/cv/components/svg/cv-svg';

export const CvExperienceBlock: FC<CvExperienceBlockProps> = ({ content }) => {
  return (
    <div className="experience-block">
      <div className="experience-block__info">
        <div>
          <h4 className="experience-block__position">{content.position}</h4>
          <p className="experience-block__company">{content.company}</p>
        </div>
        <div className="experience-block__date">
          <CvSvg id="calendar" className="experience-block__date__icon" />
          <span>{content.dates}</span>
        </div>
      </div>
      <CvProjectBlock content={content} />
    </div>
  );
};
