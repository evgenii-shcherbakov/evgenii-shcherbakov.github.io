import { FC } from 'react';
import { CvBinaryBlockProps } from '@/features/cv/components/blocks/binary/types';
import './cv-binary-block.scss';

export const CvBinaryBlock: FC<CvBinaryBlockProps> = ({ content }) => {
  return (
    <div className="binary-block flex-row justify-between content-center">
      <span className="binary-block__name capitalize">{content.name}</span>
      <span>{content.value}</span>
    </div>
  );
};
