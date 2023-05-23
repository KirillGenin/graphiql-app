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
    toggleRegType(state, action) {
      state.regType = action.payload;
    },
  },
});

export const { toggleRegType } = userSlice.actions;

export default userSlice.reducer;
