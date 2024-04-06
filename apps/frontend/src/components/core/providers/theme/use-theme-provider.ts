import { AppTheme, ThemeProviderContext } from 'components/core/providers/theme/theme.types';
import { useEffect, useState } from 'react';

export const useThemeProvider = () => {
  const THEME_KEY = 'app-theme';

  const [isDark, setIsDark] = useState(true);

  const getTheme = (isDark: boolean): AppTheme => (isDark ? 'dark' : 'light');

  useEffect(() => {
    const savedTheme: AppTheme = (localStorage.getItem(THEME_KEY) as AppTheme | null) ?? 'dark';
    const savedIsDark = savedTheme === 'dark';

    setIsDark(() => savedIsDark);
    localStorage.setItem(THEME_KEY, savedTheme);
  }, []);

  useEffect(() => {
    const theme: AppTheme = getTheme(isDark);
    document.documentElement.className = theme;
    localStorage.setItem(THEME_KEY, theme);
  }, [isDark]);

  const toggleTheme = () => setIsDark(() => !isDark);

  const contextValue: ThemeProviderContext = {
    isDark,
    toggleTheme,
  };

  return {
    contextValue,
  };
};
