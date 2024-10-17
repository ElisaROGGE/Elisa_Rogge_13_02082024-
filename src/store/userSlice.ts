import { createSlice } from '@reduxjs/toolkit';

export interface RootState {
  user: {
    firstName: string;
    lastName: string;
    email: string;
    token: string;
  };
}

const initialState = {
  lastName: '',
  firstName: '',
  email: '',
  token: ''
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.lastName = action.payload.lastName;
      state.firstName = action.payload.firstName;
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
  }
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
