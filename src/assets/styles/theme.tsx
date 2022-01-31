import { createTheme, responsiveFontSizes } from '@mui/material';
import { Theme } from '@mui/material/styles';
import '@mui/styles';

declare module '@mui/styles' {
  interface DefaultTheme extends Theme {}
}

declare module '@mui/material/styles/createTypography' {
  interface Typography {
    fontSizeSmall: number;
    fontSizeLarge: number;
  }
  interface TypographyOptions {
    fontSizeSmall: number;
    fontSizeLarge: number;
  }
}

const fontSize = 16;

export const theme = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: fontSize,
      fontSizeSmall: fontSize - 4,
      fontSizeLarge: fontSize + 4,
    },
    palette: {
      primary: {
        main: '#316cb5',
        dark: '#232d3c',
      },
      secondary: {
        main: '#fab900',
        dark: '#e6a817',
      },
      success: {
        main: '#4caf50',
      },
      warning: {
        main: '#ff9800',
      },
      error: {
        main: '#d32f2f',
      },
      text: {
        primary: '#f9fafc',
        secondary: '#999da7',
      },
      background: {
        default: '#316cb5',
        paper: '#f9fafc',
      },
    },
    spacing: 5,
    breakpoints: {
      values: {
        xs: 0,
        sm: 650,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            lineHeight: 'normal',
          },
        },
      },
    },
  })
);

export default theme;
