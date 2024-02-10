import { defaultTheme } from 'react-admin';
import { RaThemeOptions } from 'ra-ui-materialui/src/theme';
import { blue, red, lightBlue, orange, green, teal } from '@mui/material/colors';

const themeColors = {
  primary: lightBlue,
  secondary: blue,
  error: red,
  warning: orange,
  info: teal,
  success: green,
};

export const lightTheme: RaThemeOptions = {
  ...defaultTheme,
  palette: {
    mode: 'light',
    ...themeColors,
  },
};

export const darkTheme: RaThemeOptions = {
  ...defaultTheme,
  palette: {
    mode: 'dark',
    ...themeColors,
  },
};
