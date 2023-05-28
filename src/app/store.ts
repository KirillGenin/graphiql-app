import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/authSlice';
import graphiqlReduser from './slices/graphiqlSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    graphiql: graphiqlReduser,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
