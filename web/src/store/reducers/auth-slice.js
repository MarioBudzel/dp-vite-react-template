import { createSlice } from '@reduxjs/toolkit';
import { api } from '../api';

const getToken = () => {
  if (localStorage.getItem('auth-token')) return localStorage.getItem('auth-token');
  return undefined;
};

const defaultState = {
  user: undefined,
  isAuthorized: false,
  isAdmin: false,
  token: getToken()
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    ...defaultState
  },
  reducers: {
    setToken(state, action) {
      localStorage.setItem('auth-token', action.payload);
      state.token = action.payload;
      state.isAuthorized = true;
    },
    setUserData(state, action) {
      return {
        ...state,
        ...action.payload
      };
    },
    clearAuth() {
      localStorage.removeItem('auth-token');
      return defaultState;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(authSlice.actions.clearAuth, () => {
      api.util.invalidateTags(['CurrentUser']);
    });
  }
});

export const authAction = authSlice.actions;

export const isAdmin = (state) => state.auth.isAdmin;

export default authSlice.reducer;
