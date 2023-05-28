import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface RequestData {
  query: string;
  variables: string;
}

interface IInitState {
  query: string;
  response: string;
  variables: string;
  headers: string;
  isInitFetch: boolean;
  loading: boolean;
  openAddEditor: boolean;
  activeTab: string;
}

const initialState: IInitState = {
  query: '',
  response: '',
  variables: '',
  headers: '',
  isInitFetch: false,
  loading: false,
  openAddEditor: false,
  activeTab: 'variables',
};

const graphiqlSlice = createSlice({
  name: 'graphiql',
  initialState,
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
    setVariables(state, action) {
      state.variables = action.payload;
    },
    setHeaders(state, action) {
      state.headers = action.payload;
    },
    setOpenAddEditor(state, action) {
      state.openAddEditor = action.payload;
    },
    setActiveTab(state, action) {
      state.activeTab = action.payload;
    },
  },
  extraReducers: (buider) => {
    buider
      .addCase(fetchGraphQLData.pending, (state) => {
        if (!state.isInitFetch) {
          state.isInitFetch = true;
        }
        state.loading = true;
      })
      .addCase(fetchGraphQLData.fulfilled, (state, action) => {
        state.response = JSON.stringify(action.payload, null, 2);
        state.loading = false;
      })
      .addCase(fetchGraphQLData.rejected, (state, action) => {
        state.response = action.payload as string;
        state.loading = false;
      });
  },
});

const isJson = (str: string) => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};

export const fetchGraphQLData = createAsyncThunk<string, RequestData, { rejectValue: string }>(
  'graphiql/fetchData',
  async function (request, { rejectWithValue }) {
    try {
      const res = await fetch(`https://rickandmortyapi.com/graphql`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: request.query,
          variables: isJson(request.variables) ? JSON.parse(request.variables) : {},
        }),
      });
      return await res.json();
    } catch (e) {
      if (e instanceof Error) {
        return rejectWithValue(e.message);
      }
    }
  }
);

export const graphiqlActions = graphiqlSlice.actions;

export default graphiqlSlice.reducer;
