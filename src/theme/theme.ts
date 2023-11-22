import { createTheme } from '@mui/material';

const defaultTheme = {
  palette: {
    primary: {
      main: '#FF643B',
    },
    secondary: {
      dark: '#2F3046',
      main: '#9A63FB',
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      'Arial',
      'sans-serif',
    ].join(','),
    subtitle1: {
      fontSize: 24,
      fontWeight: 600,
      color: '#000',
    },
  },
};

export const theme = createTheme(defaultTheme);
