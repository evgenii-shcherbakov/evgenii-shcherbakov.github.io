'use client';

import { FC, useContext } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { Button } from '@nextui-org/react';
import { ThemeContext } from 'components/core/providers/theme';

export const ThemeSwitcher: FC = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <Button isIconOnly variant="faded" aria-label="Toggle theme" onClick={toggleTheme}>
      {isDark ? <MdDarkMode /> : <MdLightMode />}
    </Button>
  );
};
