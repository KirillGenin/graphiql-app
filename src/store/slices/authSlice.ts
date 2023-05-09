import { createSlice } from '@reduxjs/toolkit';
import { Registration } from '../../types/enums';

interface IInitState {
  email: string;
  token: string;
  id: string;
  regType: Registration;
}

const initialState: IInitState = {
  email: '',
  token: '',
  id: '',
  regType: Registration.SignUp,
};

const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    removeUser(state) {
      state.email = '';
      state.token = '';
      state.id = '';
    },
    toggleRegType(state, action) {
      state.regType = action.payload;
      console.log(action.payload);
    },
  },
});

export const { setUser, removeUser, toggleRegType } = userSlice.actions;

export default userSlice.reducer;
