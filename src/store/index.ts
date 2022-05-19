import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counter-slice";
import { apiSlice } from "../features/user/user-api-slice";
export const store = configureStore({
  reducer: {
    counterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
      // check cache life time
      // if no other part of the project need this data 
      // then we can remove it from the cache
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
