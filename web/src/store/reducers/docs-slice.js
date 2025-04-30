import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeItem: "overview",
  activeInGroup: null,
};

const docsSlice = createSlice({
  name: "docs",
  initialState: {
    ...initialState,
  },
  reducers: {
    setActiveItem(state, action) {
      state.activeItem = action.payload;
    },
    setActiveInGroup(state, action) {
      state.activeInGroup = action.payload;
    },
  },
});

export default docsSlice.reducer;

export const { setActiveItem, setActiveInGroup } = docsSlice.actions;
