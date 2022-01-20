import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';

const fontSize = 14;
const fontSizeSmall = fontSize - 4;
const fontSizeLarge = fontSize + 4;

export const theme = responsiveFontSizes(
  createMuiTheme({
    typography: {
      htmlFontSize: fontSize,
      fontFamily: 'Roboto, sans-serif',
      fontSize: fontSize,
      fontSizeSmall: fontSizeSmall,
      fontSizeLarge: fontSizeLarge,
      body1: {
        fontSize: fontSize,
      },
      body2: {
        fontSize: fontSize,
      },
    },
    base: {
      border: '1px solid #e0e6ed',
      borderRadius: '4px',
      borderThick: '1px',
      transition: 'all 0.3s ease',
    },
    palette: {
      primary: {
        main: '#2f80ed',
      },
      secondary: {
        main: '#11cb5f',
      },
      blue: {
        light: '#85d7ff',
        main: '#1fb6ff',
        dark: '#009eeb',
      },
      purple: {
        light: '#a389f4',
        main: '#7e5bef',
        dark: '#592dea',
      },
      red: {
        light: 'rgb(255, 232, 232)',
        main: '#ff1a1a',
        dark: '#e60000',
      },
      yellow: {
        light: '#ffd55f',
        main: '#ffc82c',
        dark: '#f88700',
      },
      green: {
        light: 'rgb(231, 250, 239)',
        main: '#13ce66',
        dark: '#0f9f4f',
      },
      snow: {
        light: '#f9fafc',
        main: '#eff2f7',
        dark: '#e5e9f2',
      },
      smoke: {
        light: '#e0e6ed',
        main: '#d3dce6',
        dark: '#c0ccda',
      },
      success: {
        main: '#13ce66',
      },
      warning: {
        main: '#ffc82c',
      },
      error: {
        main: '#ff1a1a',
      },
      steel: {
        silver: '#8492a6',
        main: '#273444',
        slate: '#3c4858',
        black: '#1f2d3d',
      },
      text: {
        primary: '#1f2d3d',
        secondary: '#8492a6',
      },
      background: {
        default: '#eff2f7',
        paper: '#f9fafc',
        lightblue: '#F0F2FC',
      },
      disabled: '#EBEBEB',
    },
    shape: {
      borderRadius: 1,
    },
    mixins: {
      flexCentered: () => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }),
      clearfix: () => ({
        zoom: 1,
        '&:before': {
          content: '\0',
          display: 'block',
          height: 0,
          overflow: 'hidden',
        },
        '&:after': {
          content: '\0',
          display: 'block',
          height: 0,
          overflow: 'hidden',
          clear: 'both',
        },
      }),
      hideScroll: () => ({
        '&::-webkit-scrollbar': {
          display: 'none' /* Chrome */,
        },
        '-ms-overflow-style': 'none' /* IE and Edge */,
        'scrollbar-width': 'none' /* Firefox */,
      }),
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
    // TODO COC
    // overrides: {
    //   MuiTableCell: {
    //     root: {
    //       padding: '5px 10px',
    //     },
    //   },
    // },
  })
);

export default theme;
