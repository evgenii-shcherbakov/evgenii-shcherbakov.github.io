import { FC } from 'react';
import { CvEducationBlockProps } from '@/features/cv/components/blocks/education/types';
import './cv-education-block.scss';
import { CvSvg } from '@/features/cv/components/svg/cv-svg';

export const CvEducationBlock: FC<CvEducationBlockProps> = ({ content }) => {
  return (
    <div className="education-block">
      <div className="education-block__info">
        <p className="education-block__place">{content.place}</p>
        <p className="education-block__title">{content.title}</p>
        <p className="education-block__location">
          <CvSvg id="location" />
          {content.location}
        </p>
      </div>
      <div className="education-block__date">
        <CvSvg id="calendar" className="education-block__date__icon" />
        <span>{content.dates}</span>
      </div>
    </div>
  );
};
