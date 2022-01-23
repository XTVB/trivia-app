import { createTheme, responsiveFontSizes } from '@mui/material';
import { Theme } from '@mui/material/styles';
import '@mui/styles';

declare module '@mui/styles' {
  interface DefaultTheme extends Theme {}
}

const fontSize = 16;
const fontSizeSmall = fontSize - 4;
const fontSizeLarge = fontSize + 4;

export const theme = responsiveFontSizes(
  createTheme({
    typography: {
      htmlFontSize: fontSize,
      fontFamily: 'Roboto, sans-serif',
      fontSize: fontSize,
      fontSizeSmall: fontSizeSmall,
      fontSizeLarge: fontSizeLarge,
    },
    base: {
      border: '1px solid #e0e6ed',
      borderRadius: '4px',
      borderThick: '1px',
      transition: 'all 0.3s ease',
    },
    palette: {
      primary: {
        main: '#316cb5',
        dark: '#232d3c',
      },
      secondary: {
        main: '#fab900',
        dark: '#e6a817'
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
        primary: '#e5e9f2',
        secondary: '#999da7',
      },
      background: {
        default: '#eff2f7',
        paper: '#f9fafc',
      },
    },
    shape: {
      borderRadius: 10,
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
  })
);

export default theme;
