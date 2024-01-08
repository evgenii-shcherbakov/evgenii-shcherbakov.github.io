import { FC } from 'react';
import { CvLinkProps } from '@/features/cv/components/hoc/link/types';
import Link from 'next/link';

export const CvLink: FC<CvLinkProps> = ({ link, children }) => {
  if (link) {
    return (
      <Link href={link} target="_blank">
        {children}
      </Link>
    );
  }

  return children;
};
