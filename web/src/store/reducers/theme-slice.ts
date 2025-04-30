import { createSlice } from '@reduxjs/toolkit';

const getCurrentTheme = () => {
  if (localStorage.getItem('prefered-theme-mode') === 'dark') return true;
  if (localStorage.getItem('prefered-theme-mode') === 'light') return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

const defaultState = {
  mode: getCurrentTheme() ? 'dark' : 'light',
  useSystemTheme: localStorage.getItem('prefered-theme-mode') ? false : true
};

const themeSlice = createSlice({
  name: 'theme-slice',
  initialState: {
    ...defaultState
  },
  reducers: {
    toggleTheme(state) {
      state.mode = state.mode === 'dark' ? 'light' : 'dark';
      state.useSystemTheme = false;
      localStorage.setItem('prefered-theme-mode', state.mode);
      localStorage.setItem('use-system-theme', 'false');
    },
    setSystemTheme(state) {
      state.mode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      state.useSystemTheme = true;
      localStorage.setItem('prefered-theme-mode', state.mode);
      localStorage.setItem('use-system-theme', 'true');
    },
    setTheme(state, action) {
      state.mode =
        action.payload !== 'system' ? action.payload : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      state.useSystemTheme = action.payload !== 'system' ? false : true;
      localStorage.setItem('prefered-theme-mode', action.payload);
      action.payload === 'system' ? localStorage.setItem('use-system-theme', 'true') : localStorage.setItem('use-system-theme', 'false');
    }
  }
});

export const { toggleTheme, setSystemTheme, setTheme } = themeSlice.actions;

export const mode = (state) => state.theme.mode;
export const systemMode = (state) => state.theme.useSystemTheme;

export const getLocalStorageTheme = () => {
  return localStorage.getItem('prefered-theme-mode');
};

export default themeSlice.reducer;
