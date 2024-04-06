'use client';

import { ThemeProviderContext } from 'components/core/providers/theme/theme.types';
import { createContext } from 'react';

export const ThemeContext = createContext<ThemeProviderContext>({
  isDark: true,
  toggleTheme: () => {},
});
