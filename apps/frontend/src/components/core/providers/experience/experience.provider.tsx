'use client';

import { ExperienceContextType } from 'components/core/providers/experience/experience.types';
import { FC } from 'react';
import { HOCProps } from 'types/hoc.types';
import { ExperienceContext } from 'components/core/providers/experience/experience.context';

type Props = HOCProps & {
  value: ExperienceContextType;
};

export const ExperienceProvider: FC<Props> = ({ children, value }) => {
  return <ExperienceContext.Provider value={value}>{children}</ExperienceContext.Provider>;
};
