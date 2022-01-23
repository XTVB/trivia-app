import '@mui/material/styles';

declare module '@mui/material/styles/createTheme' {
  interface Theme {
    base: {
      border: string;
      borderRadius: string;
      borderThick: string;
      transition: string;
    };
  }
  interface ThemeOptions {
    base?: {
      border: string;
      borderRadius: string;
      borderThick: string;
      transition: string;
    };
  }
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
