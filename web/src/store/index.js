import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";
import { api } from "./api";

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

const { dispatch } = store;

export { store, dispatch };
