import { createTheme } from '@mui/material/styles';

const Palette = (mode) => {
  const lightModeTheme = {
    palette: {
      mode: 'light',
      common: {
        black: '#000',
        white: '#fff'
      },
      themeToggle: {
        secondary: '#5D5C72',
        surfaceContainer: '#F0ECF4',
        onSurface: '#1B1B21'
      },
      background: {
        primary: '#585992',
        surfaceTint: '#585992',
        primaryContainer: '#E1DFFF',
        secondary: '#5D5C72',
        secondaryContainer: '#E2E0F9',
        tertiary: '#795369',
        tertiaryContainer: '#FFD8EC',
        error: '#BA1A1A',
        errorContainer: '#FFDAD6',
        background: '#FCF8FF',
        surface: '#FCF8FF',
        outline: '#777680',
        inverseSurface: '#303036',
        inversePrimary: '#C1C1FF',
        primaryFixed: '#E1DFFF',
        primaryFixedDim: '#C1C1FF',
        secondaryFixed: '#E2E0F9',
        secondaryFixedDim: '#C6C4DD',
        tertiaryFixed: '#FFD8EC',
        tertiaryFixedDim: '#E9B9D3',
        surfaceDim: '#DCD9E0',
        surfaceBright: '#FCF8FF',
        surfaceContainerLowest: '#FFFFFF',
        surfaceContainerLow: '#F6F2FA',
        surfaceContainer: '#F0ECF4',
        surfaceContainerHigh: '#EAE7EF',
        surfaceContainerHighest: '#E4E1E9'
      },
      text: {
        onPrimary: '#FFFFFF',
        onPrimaryContainer: '#13144A',
        onSecondary: '#FFFFFF',
        onSecondaryContainer: '#1A1A2C',
        onTertiary: '#FFFFFF',
        onTertiaryContainer: '#2E1125',
        onError: '#FFFFFF',
        onErrorContainer: '#410002',
        onBackground: '#1B1B21',
        onSurface: '#1B1B21',
        inverseOnSurface: '#F3EFF7',
        onPrimaryFixed: '#13144A',
        onSecondaryFixed: '#1A1A2C',
        onTertiaryFixed: '#2E1125'
      }
    }
  };

  const darkModeTheme = {
    palette: {
      mode: 'dark',
      common: {
        black: '#000',
        white: '#fff'
      },
      background: {
        primary: '#C1C1FF',
        surfaceTint: '#C1C1FF',
        primaryContainer: '#404178',
        secondary: '#C6C4DD',
        secondaryContainer: '#454559',
        tertiary: '#E9B9D3',
        tertiaryContainer: '#5F3C51',
        error: '#FFB4AB',
        errorContainer: '#93000A',
        background: '#131318',
        surface: '#131318',
        outline: '#918F9A',
        inverseSurface: '#E4E1E9',
        inversePrimary: '#585992',
        primaryFixed: '#E1DFFF',
        primaryFixedDim: '#C1C1FF',
        secondaryFixed: '#E2E0F9',
        secondaryFixedDim: '#C6C4DD',
        tertiaryFixed: '#FFD8EC',
        tertiaryFixedDim: '#E9B9D3',
        surfaceDim: '#131318',
        surfaceBright: '#39383F',
        surfaceContainerLowest: '#0E0E13',
        surfaceContainerLow: '#1B1B21',
        surfaceContainer: '#1F1F25',
        surfaceContainerHigh: '#2A292F',
        surfaceContainerHighest: '#35343A'
      },
      text: {
        onPrimary: '#292A60',
        onPrimaryContainer: '#E1DFFF',
        onSecondary: '#2F2F42',
        onSecondaryContainer: '#E2E0F9',
        onTertiary: '#46263A',
        onTertiaryContainer: '#FFD8EC',
        onError: '#690005',
        onErrorContainer: '#FFDAD6',
        onBackground: '#E4E1E9',
        onSurface: '#E4E1E9',
        inverseOnSurface: '#303036',
        onPrimaryFixed: '#13144A',
        onSecondaryFixed: '#1A1A2C',
        onTertiaryFixed: '#2E1125'
      }
    }
  };

  return mode === 'dark' ? createTheme(darkModeTheme) : createTheme(lightModeTheme);
};

export default Palette;
