// theme.d.ts
import { Color } from '@mui/material';
import '@mui/material/styles';

declare module '@mui/material/styles' {
  // Extend TypeBackground to add custom properties
  interface TypeBackground {
    defaultChannel: string;
    paperChannel: string;
  }

  interface TypeText {
    primaryChannel?: string;
    secondaryChannel?: string;
    disabledChannel?: string;
  }

  interface PaletteColor {
    lightChannel?: string;
    darkChannel?: string;
    mainChannel?: string;
  }

  // Extend Palette and PaletteOptions to allow use of updated TypeBackground
  interface Palette {
    background: TypeBackground;
    text: TypeText;
  }

  interface SimplePaletteColorOptions {
    lightChannel?: string;
    darkChannel?: string;
    mainChannel?: string;
  }

  interface PaletteOptions {
    background?: Partial<TypeBackground>;
    secondary?: SimplePaletteColorOptions | Partial<Color>;
    primary?: SimplePaletteColorOptions | Partial<Color>;
  }
  interface ThemeOptions {
    name: string;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    file: true;
  }
}
