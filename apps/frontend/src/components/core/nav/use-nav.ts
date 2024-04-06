import { IdentityContext } from 'components/core/providers/identity';
import { NavigationContext } from 'components/core/providers/navigation';
import { useContext, useState } from 'react';

export const useNav = () => {
  const { fullName } = useContext(IdentityContext);
  const { general } = useContext(NavigationContext);
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return {
    brand: fullName,
    isShowNav: general.isList,
    navItems: general.navigationItems,
    isShowMenu: general.isList,
    menuItems: general.navigationItems,
    isMenuOpened,
    setIsMenuOpened,
  };
};
