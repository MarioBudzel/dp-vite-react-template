import { createSlice } from '@reduxjs/toolkit';

const getCurrentFont = () => {
  return localStorage.getItem('preffered-font') ? localStorage.getItem('preffered-font') : `'DM Sans', sans-serif`;
};

const defaultState = {
  font: getCurrentFont()
};

const fontSlice = createSlice({
  name: 'font-slice',
  initialState: {
    ...defaultState
  },
  reducers: {
    setPrefferedFont(state, action) {
      state.font = action.payload;
      localStorage.setItem('preffered-font', action.payload);
    }
  }
});

export const { setPrefferedFont } = fontSlice.actions;

export const prefferedFont = (state) => state.font.font;

export default fontSlice.reducer;
