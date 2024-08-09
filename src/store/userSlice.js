import { createSlice } from '@reduxjs/toolkit';

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

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
