'use client';

import { HomeSectionEnum } from 'enums/home-section.enum';
import { FC } from 'react';
import css from './nav.module.scss';
import { useNav } from './use-nav';
import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react';
import { ThemeSwitcher } from 'components/core/theme-switcher';

export const Nav: FC = () => {
  const { brand, isShowNav, isShowMenu, menuItems, navItems, isMenuOpened, setIsMenuOpened } =
    useNav();

  return (
    <Navbar onMenuOpenChange={setIsMenuOpened} isBordered isBlurred className={css.container}>
      <NavbarContent>
        {isShowMenu && (
          <NavbarMenuToggle
            aria-label={isMenuOpened ? 'Close menu' : 'Open menu'}
            className="sm:hidden"
          />
        )}
        <NavbarBrand>
          <Link href="/" color="foreground" className={css.brand}>
            {brand}
          </Link>
        </NavbarBrand>
      </NavbarContent>
      {isShowNav && (
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {navItems.map((item) => (
            <NavbarItem key={item.link} isActive={item.isActive}>
              <Link
                color={item.isActive ? 'primary' : 'foreground'}
                href={item.link}
                aria-current={item.isActive ? 'page' : undefined}
              >
                {item.title}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
      )}
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            href={'#' + HomeSectionEnum.CONNECT}
            variant="solid"
            className={css.btn}
          >
            Connect
          </Button>
        </NavbarItem>
      </NavbarContent>
      {isShowMenu && (
        <NavbarMenu className={css.menu}>
          {menuItems.map((item) => (
            <NavbarMenuItem key={item.link} isActive={item.isActive}>
              <Link
                color={item.isActive ? 'primary' : 'foreground'}
                className="w-full"
                href={item.link}
                aria-current={item.isActive ? 'page' : undefined}
              >
                {item.title}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      )}
    </Navbar>
  );
};
