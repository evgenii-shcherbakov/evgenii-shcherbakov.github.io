import { FC } from 'react';
import { CvContactBlockProps } from '@/features/cv/components/blocks/contact/types';
import './cv-contact-block.scss';
import { CvLink } from '@/features/cv/components/hoc/link/cv-link';
import { CvSvg } from '@/features/cv/components/svg/cv-svg';

export const CvContactBlock: FC<CvContactBlockProps> = ({ content }) => {
  return (
    <CvLink link={content.link}>
      <div className="contact-block">
        <CvSvg id={content.name} className="contact-block__icon" />
        <div className="contact-block__info">
          <p>{content.value}</p>
        </div>
      </div>
    </CvLink>
  );
};
