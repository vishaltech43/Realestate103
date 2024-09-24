// store/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
    loggedInUser: null,
  },
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    setLoggedInUser: (state, action) => {
      state.loggedInUser = action.payload;
    },
    logout: (state) => {
      state.loggedInUser = null;
    },
  },
});

export const { addUser, setLoggedInUser, logout } = userSlice.actions;
export default userSlice.reducer;
