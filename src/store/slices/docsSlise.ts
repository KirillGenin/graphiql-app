import { createSlice } from '@reduxjs/toolkit';

interface IInitState {
  isQuery: boolean;
}

const initialState: IInitState = {
  isQuery: true,
};

const docsSlice = createSlice({
  name: 'docs',
  initialState,
  reducers: {
    toggleIsQuery(state) {
      state.isQuery = !state.isQuery;
    },
  },
});

export const { toggleIsQuery } = docsSlice.actions;

export default docsSlice.reducer;
