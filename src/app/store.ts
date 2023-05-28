import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/authSlice';
import docsSlise from './slices/docsSlise';
import graphiqlReduser from './slices/graphiqlSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    docs: docsSlise,
    graphiql: graphiqlReduser,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
