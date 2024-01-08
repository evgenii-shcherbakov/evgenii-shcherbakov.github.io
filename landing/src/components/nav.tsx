'use client';

import { FC, useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/react';
import { MdDarkMode } from 'react-icons/md';

export const Nav: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const menuItems = [
  //   'Profile',
  //   'Dashboard',
  //   'Activity',
  //   'Analytics',
  //   'System',
  //   'Deployments',
  //   'My Settings',
  //   'Team Settings',
  //   'Help & Feedback',
  //   'Log Out',
  // ];

  const primaryItems = ['Home', 'Resume', 'Contact'];
  const current = 'Home';

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered={true} disableAnimation={true}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">Evgenii Shcherbakov</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {primaryItems.map((title) => (
          <NavbarItem key={title} isActive={current === title}>
            <Link
              color={current === title ? undefined : 'foreground'}
              href="#"
              aria-current={current === title ? 'page' : 'false'}
            >
              {title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <Button isIconOnly color="default" variant="bordered" aria-label="Dark mode">
          <MdDarkMode />
        </Button>
      </NavbarContent>

      <NavbarMenu>
        {primaryItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? 'primary'
                  : index === primaryItems.length - 1
                  ? 'danger'
                  : 'foreground'
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
