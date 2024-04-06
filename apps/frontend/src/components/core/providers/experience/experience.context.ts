'use client';

import { ExperienceContextType } from 'components/core/providers/experience/experience.types';
import { createContext } from 'react';

export const ExperienceContext = createContext<ExperienceContextType>([]);
