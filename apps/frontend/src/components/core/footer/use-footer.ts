import { IdentityContext } from 'components/core/providers/identity';
import { NavigationContext } from 'components/core/providers/navigation';
import { useContext } from 'react';

export const useFooter = () => {
  const { fullName } = useContext(IdentityContext);
  const { general } = useContext(NavigationContext);
  const year = new Date().getFullYear();

  return {
    brand: fullName,
    navItems: general.navigationItems,
    isShowNav: general.isList,
    year,
  };
};
