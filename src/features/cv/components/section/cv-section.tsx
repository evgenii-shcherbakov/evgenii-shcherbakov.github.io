import { FC } from 'react';
import { CvSectionProps } from '@/features/cv/components/section/types';
import './cv-section.scss';
import { CvBinaryBlock } from '@/features/cv/components/blocks/binary/cv-binary-block';
import { CvCertificateBlock } from '@/features/cv/components/blocks/certificate/cv-certificate-block';
import { CvContactBlock } from '@/features/cv/components/blocks/contact/cv-contact-block';
import { CvTextBlock } from '@/features/cv/components/blocks/text/cv-text-block';
import { CvEducationBlock } from '@/features/cv/components/blocks/education/cv-education-block';
import { CvExperienceBlock } from '@/features/cv/components/blocks/experience/cv-experience-block';
import { CvProjectBlock } from '@/features/cv/components/blocks/project/cv-project-block';
import { CvSkillBlock } from '@/features/cv/components/blocks/skill/cv-skill-block';

export const CvSection: FC<CvSectionProps> = ({ section }) => {
  return (
    <section className="section">
      <h3 className="section__header">{section.header}</h3>
      <div className="section__content">
        {section.content.binaryBlocks &&
          section.content.binaryBlocks.map((block, index) => (
            <CvBinaryBlock key={'binary' + index.toString()} content={block} />
          ))}
        {section.content.certificateBlocks &&
          section.content.certificateBlocks.map((block, index) => (
            <CvCertificateBlock key={'certificate' + index.toString()} content={block} />
          ))}
        {section.content.contactBlocks &&
          section.content.contactBlocks.map((block, index) => (
            <CvContactBlock key={'contact' + index.toString()} content={block} />
          ))}
        {section.content.texts &&
          section.content.texts.map((block, index) => (
            <CvTextBlock key={'text' + index.toString()} content={block} />
          ))}
        {section.content.educationBlocks &&
          section.content.educationBlocks.map((block, index) => (
            <CvEducationBlock key={'education' + index.toString()} content={block} />
          ))}
        {section.content.experienceBlocks &&
          section.content.experienceBlocks.map((block, index) => (
            <CvExperienceBlock key={'experience' + index.toString()} content={block} />
          ))}
        {section.content.projectBlocks &&
          section.content.projectBlocks.map((block, index) => (
            <CvProjectBlock key={'project' + index.toString()} content={block} />
          ))}
        {section.content.skillBlocks &&
          section.content.skillBlocks.map((block, index) => (
            <CvSkillBlock key={'skill' + index.toString()} content={block} />
          ))}
      </div>
    </section>
  );
};
