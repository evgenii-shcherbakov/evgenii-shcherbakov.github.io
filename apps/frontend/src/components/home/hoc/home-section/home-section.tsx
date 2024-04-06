import { FC } from 'react';
import { HOCProps } from 'types/hoc.types';
import css from './home-section.module.scss';

type Props = HOCProps & {
  id?: string;
  className?: string;
};

export const HomeSection: FC<Props> = ({ children, className, id }) => {
  return (
    <section id={id} className={className ? css.section + ' ' + className : css.section}>
      {children}
    </section>
  );
};
