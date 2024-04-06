export type AppTheme = 'dark' | 'light';

export type ThemeProviderContext = {
  isDark: boolean;
  toggleTheme(): void;
};
