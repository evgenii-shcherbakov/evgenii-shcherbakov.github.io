import { FC } from 'react';
import { CvTextBlockProps } from '@/features/cv/components/blocks/text/types';
import './cv-text-block.scss';

export const CvTextBlock: FC<CvTextBlockProps> = ({ content }) => {
  return <p className="text-block">{content}</p>;
};
