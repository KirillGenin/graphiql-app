import { createSlice } from '@reduxjs/toolkit';

interface IInitState {
  isTopLvl: boolean;
  isQueryLvl: boolean;
}

const initialState: IInitState = {
  isTopLvl: true,
  isQueryLvl: false,
};

const docsSlice = createSlice({
  name: 'docs',
  initialState,
  reducers: {
    toggleIsTopLvl(state) {
      state.isTopLvl = !state.isTopLvl;
    },
    toggleIsQueryLvl(state) {
      state.isQueryLvl = !state.isQueryLvl;
    },
  },
});

export const { toggleIsTopLvl, toggleIsQueryLvl } = docsSlice.actions;

export default docsSlice.reducer;
