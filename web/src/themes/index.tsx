import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { mode } from '../store/reducers/theme-slice';

import { prefferedFont } from '@/store/reducers/font-slice';
import { CssBaseline, Direction, StyledEngineProvider, ThemeOptions, ThemeProvider, createTheme, useTheme } from '@mui/material';
import { grey } from '@mui/material/colors';
import { DarkThemeColors } from './colors/DarkThemeColors';
import { defaultColors } from './colors/DefaultColors';
import { LightThemeColors } from './colors/LightThemeColors';
import Palette from './palette';
import Typography from './typography';

export default function ThemeCustomization({ children }) {
  const theme = useTheme();
  const userTheme = useSelector(mode);
  const selectedFont = useSelector(prefferedFont);

  const selectedTheme = useMemo(() => Palette(userTheme === 'dark' ? 'dark' : 'light'), [userTheme]);

  const themeTypograpgy = Typography(selectedFont);

  const defaultPalette = defaultColors;
  const themeColors = useMemo(() => {
    return userTheme === 'dark'
      ? DarkThemeColors.find((theme) => theme.name === 'BLUE_THEME')?.palette
      : LightThemeColors.find((theme) => theme.name === 'BLUE_THEME')?.palette;
  }, [userTheme]);

  const palette = { ...defaultPalette, ...(themeColors ?? {}) };

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      breakpoints: {
        values: {
          xs: 0,
          sm: 768,
          md: 1024,
          lg: 1266,
          xl: 1536
        }
      },
      direction: 'ltr' as Direction,
      mixins: {
        toolbar: {
          minHeight: 60,
          paddingTop: 8,
          paddingBottom: 8
        }
      },
      palette: palette,
      typography: themeTypograpgy,
      components: {
        MuiButton: {
          defaultProps: {
            variant: 'contained'
          },
          styleOverrides: {
            root: ({ theme }) => ({
              variants: [
                {
                  props: { variant: 'contained' },
                  style: {
                    height: 'fit-content',
                    padding: '3 0',
                    backgroundColor: theme.palette.primary.main,
                    '&:hover': {
                      backgroundColor: theme.palette.primary.main
                    }
                  }
                },
                {
                  props: { variant: 'file' },
                  style: {
                    backgroundColor: 'white',
                    color: grey[800],
                    border: `1px solid ${grey[300]}`,
                    borderRadius: '10px',
                    marginTop: '.5em',
                    textTransform: 'none',
                    boxShadow: '3px 10px 10px -15px rgba(0,0,0,0.80)'
                  }
                }
              ]
            })
          }
        },
        MuiOutlinedInput: {
          defaultProps: {
            fullWidth: true
          },
          styleOverrides: {
            root: {
              color: palette.text.primary,
              backgroundColor: `rgba(${palette.background.defaultChannel}, .9)`,
              borderRadius: '8px',
              padding: 0,
              '&:hover': {
                '& .MuiOutlinedInput-notchedOutline': {
                  border: 0
                }
              },
              '&.Mui-focused': {
                boxShadow: 0,
                '& .MuiOutlinedInput-notchedOutline': {
                  border: 0
                }
              },
              '& .MuiOutlinedInput-notchedOutline': {
                border: 0
              },
              '& .MuiOutlinedInput-input': {
                padding: '10px 14px'
              }
            }
          }
        },
        MuiFormLabel: {
          styleOverrides: {
            root: {
              fontWeight: 'bold',
              marginBottom: 2,
              padding: 5,
              fontSize: '1rem',
              color: selectedTheme.palette.text.primary,
              '&.Mui-focused': {
                color: selectedTheme.palette.text.primary
              }
            }
          }
        }
      }
    }),
    [selectedTheme, themeTypograpgy]
  );
  const themes = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
