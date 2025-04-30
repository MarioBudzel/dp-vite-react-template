import { combineReducers } from 'redux';
import { api } from '../api';
import authSlice from './auth-slice';
import docsSlice from './docs-slice';
import fontSlice from './font-slice';
import themeSlice from './theme-slice';

const reducers = combineReducers({
  auth: authSlice,
  theme: themeSlice,
  font: fontSlice,
  docsSlice,
  [api.reducerPath]: api.reducer
});

export default reducers;
