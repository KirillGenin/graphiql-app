import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/authSlice';
import docsSlise from './slices/docsSlise';

export const store = configureStore({
  reducer: {
    user: userReducer,
    docs: docsSlise,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
