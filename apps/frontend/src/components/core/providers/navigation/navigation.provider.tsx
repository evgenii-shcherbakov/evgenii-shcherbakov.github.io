'use client';

import { NavigationContext } from 'components/core/providers/navigation/navigation.context';
import { useNavigationProvider } from 'components/core/providers/navigation/use-navigation-provider';
import { FC } from 'react';
import { HOCProps } from 'types/hoc.types';

export const NavigationProvider: FC<HOCProps> = ({ children }) => {
  const { contextValue } = useNavigationProvider();

  return <NavigationContext.Provider value={contextValue}>{children}</NavigationContext.Provider>;
};
