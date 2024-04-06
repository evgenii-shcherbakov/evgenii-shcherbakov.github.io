import { ONE } from '@packages/common';
import {
  NavigationContextType,
  NavigationItem,
} from 'components/core/providers/navigation/navigation.types';
import { usePathname } from 'next/navigation';

export const useNavigationProvider = () => {
  const pathName = usePathname();

  const general: NavigationItem[] = [
    {
      link: '/',
      title: 'Home',
    },
    // {
    //   link: '/contact',
    //   title: 'Contact',
    // },
  ] as const;

  const hidden: NavigationItem[] = [] as const;

  const navigationItemMapper = (navigationItem: NavigationItem): NavigationItem => {
    return { ...navigationItem, isActive: pathName === navigationItem.link };
  };

  const contextValue: NavigationContextType = {
    general: {
      navigationItems: general.map(navigationItemMapper),
      isList: general.length > ONE,
    },
    hidden: {
      navigationItems: hidden.map(navigationItemMapper),
      isList: general.length > ONE,
    },
  };

  return {
    contextValue,
  };
};
