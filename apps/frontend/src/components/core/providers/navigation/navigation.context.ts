'use client';

import { NavigationContextType } from 'components/core/providers/navigation/navigation.types';
import { createContext } from 'react';

export const NavigationContext = createContext<NavigationContextType>({
  general: {
    navigationItems: [],
    isList: false,
  },
  hidden: {
    navigationItems: [],
    isList: false,
  },
});
