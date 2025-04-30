import { ThemeOptions } from '@mui/material';

export const LightThemeColors: ThemeOptions[] = [
  {
    name: 'BLUE_THEME',
    palette: {
      background: {
        default: '#F7FFF9',
        paper: '#fff',
        defaultChannel: '247, 255, 249',
        paperChannel: '255, 255, 255'
      },
      primary: {
        main: '#5D87FF',
        light: '#ECF2FF',
        dark: '#4570EA',
        contrastText: '#000',
        mainChannel: '93, 135, 255'
      },
      secondary: {
        main: '#49BEFF',
        light: '#E8F7FF',
        dark: '#23afdb',
        contrastText: '#000',
        lightChannel: '35, 175, 219',
        darkChannel: '232, 247, 255'
      },
      text: {
        primary: '#1C252E',
        secondary: '#637381',
        disabled: '#919EAB',
        primaryChannel: '28, 37, 46',
        secondaryChannel: '99, 115, 129',
        disabledChannel: '145, 158, 171'
      }
    }
  }
];
