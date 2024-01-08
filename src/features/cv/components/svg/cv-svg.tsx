import { FC } from 'react';
import { CvSvgProps } from '@/features/cv/components/svg/types';
import './cv-svg.scss';

export const CvSvg: FC<CvSvgProps> = ({ id, className }) => {
  return (
    <svg className={'icon ' + className ?? ''} viewBox="0 0 24 24" aria-label={id + ' icon'}>
      <use href={'/icons/' + id + '.svg#icon'}></use>
    </svg>
  );
};
