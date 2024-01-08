import { FC } from 'react';
import { CvCertificateBlockProps } from '@/features/cv/components/blocks/certificate/types';
import './cv-certificate-block.scss';
import { CvLink } from '@/features/cv/components/hoc/link/cv-link';

export const CvCertificateBlock: FC<CvCertificateBlockProps> = ({ content }) => {
  return (
    <CvLink link={content.link}>
      <div className="certificate-block">
        <p className="certificate-block__date">{content.date}</p>
        <p className="certificate-block__organization">{content.organization}</p>
        <p className="certificate-block__name">{content.name}</p>
      </div>
    </CvLink>
  );
};
