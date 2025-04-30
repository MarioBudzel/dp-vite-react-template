import { ThemeOptions } from '@mui/material';

export const DarkThemeColors: ThemeOptions[] = [
  {
    name: 'BLUE_THEME',
    palette: {
      primary: {
        main: '#5D87FF',
        light: '#253662',
        dark: '#4570EA',
        contrastText: '#ffffff',
        mainChannel: '93, 135, 255',
        lightChannel: '37, 54, 98'
      },
      secondary: {
        main: '#FFD15C',
        light: 'rgb(255, 218, 124)',
        dark: 'rgb(178, 146, 64)',
        contrastText: 'rgba(0, 0, 0, 0.87)',
        lightChannel: '255, 218, 124',
        darkChannel: '178, 146, 64'
      },
      background: {
        default: '#2A3447',
        paper: '#1A202B',
        defaultChannel: '42, 52, 71',
        paperChannel: '26, 32, 43'
      },
      text: {
        primary: '#FFFFFF',
        secondary: '#919EAB',
        disabled: '#637381',
        primaryChannel: '255, 255, 255',
        secondaryChannel: '145, 158, 171',
        disabledChannel: '99, 115, 129'
      }
    }
  }
];
