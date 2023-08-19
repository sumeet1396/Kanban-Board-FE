import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE: any = {
  token: 'token',
};

const loginSlice = createSlice({
  name: 'login',
  initialState: INITIAL_STATE,
  reducers: {
    userLogin(state, action) {
      state.token = action.payload;
    },
    userLogout(state) {
      state.token = null;
    },
  },
});

export const { userLogin, userLogout } = loginSlice.actions;
export default loginSlice.reducer;