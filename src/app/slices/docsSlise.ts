import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { buildClientSchema, getIntrospectionQuery, GraphQLSchema } from 'graphql';

interface IInitState {
  isLoading: boolean;
  schema: unknown;
  error: string;
  isTopLvl: boolean;
  isQueryLvl: boolean;
  isIdLvl: boolean;
  isIntLvl: boolean;
  isStringLvl: boolean;
  isCaracterLvl: boolean;
}

const initialState: IInitState = {
  isLoading: false,
  schema: null,
  error: '',
  isTopLvl: true,
  isQueryLvl: false,
  isIdLvl: false,
  isIntLvl: false,
  isStringLvl: false,
  isCaracterLvl: false,
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

    toggleIsIdLvl(state, action) {
      state.isIdLvl = action.payload;
    },
    toggleIsIntLvl(state, action) {
      state.isIntLvl = action.payload;
    },
    toggleIsStringLvl(state, action) {
      state.isStringLvl = action.payload;
    },
    toggleIsCaracterLvl(state, action) {
      state.isCaracterLvl = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSchema.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSchema.fulfilled, (state, action) => {
        state.isLoading = true;
        state.schema = action.payload;
        state.error = '';
      })
      .addCase(fetchSchema.rejected, (state) => {
        state.isLoading = true;
        state.error = 'Impossible to fetch data from resource';
      });
  },
});
export const URL = 'https://rickandmortyapi.com/graphql';

export const fetchSchema = createAsyncThunk<GraphQLSchema, string>(
  'docs/fetchDocs',
  async (URL, { rejectWithValue }) => {
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: getIntrospectionQuery(),
      }),
    });

    if (!response.ok) {
      return rejectWithValue('Impossible to fetch data from resource');
    }

    const json = await response.json();
    const data = buildClientSchema(JSON.parse(JSON.stringify(json.data)));

    return data;
  }
);

export const {
  toggleIsTopLvl,
  toggleIsQueryLvl,
  toggleIsIdLvl,
  toggleIsIntLvl,
  toggleIsStringLvl,
  toggleIsCaracterLvl,
} = docsSlice.actions;

export default docsSlice.reducer;
