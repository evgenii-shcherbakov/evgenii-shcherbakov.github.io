'use client';

import { NextUIProvider } from '@nextui-org/react';
import { useThemeProvider } from './use-theme-provider';
import { FC } from 'react';
import { HOCProps } from 'types/hoc.types';
import { ThemeContext } from './theme.context';

export const ThemeProvider: FC<HOCProps> = ({ children }) => {
  const { contextValue } = useThemeProvider();

  return (
    <ThemeContext.Provider value={contextValue}>
      <NextUIProvider>{children}</NextUIProvider>
    </ThemeContext.Provider>
  );
};
