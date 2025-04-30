import { ThemeOptions } from '@mui/material/styles/createTheme';

export const defaultColors: ThemeOptions['palette'] = {
  success: {
    main: '#13DEB9',
    light: '#E6FFFA',
    dark: '#02b3a9',
    contrastText: '#ffffff',
    lightChannel: '230, 255, 250'
  },
  info: {
    main: '#7684AA',
    light: 'rgb(145, 156, 187)',
    dark: 'rgb(82, 92, 118)',
    contrastText: '#ffffff',
    lightChannel: '145, 156, 187'
  },
  error: {
    main: '#f44336',
    light: '#e57373',
    dark: '#d32f2f',
    contrastText: '#ffffff',
    lightChannel: '229, 115, 115'
  },
  warning: {
    main: '#FFAE1F',
    light: 'rgb(255, 190, 75)',
    dark: 'rgb(178, 121, 21)',
    contrastText: 'rgba(0, 0, 0, 0.87)',
    lightChannel: '255, 190, 75'
  }
};
