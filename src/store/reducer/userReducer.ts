import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE: any = {
  user: {},
};

const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    userSetup(state, action) {
      const {payload} = action
      state.user = payload;
      return state;
    },
  },
});

export const { userSetup } = userSlice.actions;
export default userSlice.reducer;