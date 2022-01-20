import '@material-ui/core/styles';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

type SteelColor = {
  black: string;
  main: string;
  slate: string;
  silver: string;
};

declare module '@material-ui/core/styles/createPalette' {
  interface TypeBackground {
    default: string;
    paper: string;
    lightblue: string;
  }

  interface Palette {
    snow: Palette['primary'];
    smoke: Palette['primary'];
    yellow: Palette['primary'];
    red: Palette['primary'];
    purple: Palette['primary'];
    blue: Palette['primary'];
    green: Palette['primary'];
    steel: SteelColor;
    disabled: string;
    background: TypeBackground;
  }
  interface PaletteOptions {
    snow: PaletteOptions['primary'];
    smoke: PaletteOptions['primary'];
    yellow: PaletteOptions['primary'];
    red: PaletteOptions['primary'];
    purple: PaletteOptions['primary'];
    blue: PaletteOptions['primary'];
    green: PaletteOptions['primary'];
    steel: SteelColor;
    disabled: string;
    background?: Partial<TypeBackground>;
  }
}

declare module '@material-ui/core/styles/createMuiTheme' {
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

declare module '@material-ui/core/styles/createMixins' {
  interface Mixins {
    clearfix: () => CSSProperties;
    hideScroll: () => CSSProperties;
    flexCentered: () => CSSProperties;
  }
}

declare module '@material-ui/core/styles/createTypography' {
  interface Typography {
    fontSizeSmall: number;
    fontSizeLarge: number;
  }
  interface TypographyOptions {
    fontSizeSmall: number;
    fontSizeLarge: number;
  }
}
