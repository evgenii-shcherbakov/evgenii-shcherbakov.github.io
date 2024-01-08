import { FC } from 'react';
import { CvHeaderProps } from '@/features/cv/components/header/types';
import './cv-header.scss';
import Image from 'next/image';

export const CvHeader: FC<CvHeaderProps> = (props: CvHeaderProps) => {
  return (
    <div className="header">
      <div className="header__info">
        <h2 className="header__title">{props.title}</h2>
        <h5 className="header__job">{props.job}</h5>
      </div>
      <Image
        className="header__photo"
        src={props.photoUrl}
        alt="photo"
        loading="lazy"
        width={50}
        height={50}
      />
    </div>
  );
};
