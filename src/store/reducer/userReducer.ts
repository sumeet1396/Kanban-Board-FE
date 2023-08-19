import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE: any = {
  data: {},
};

const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    userSetup(state, action) {
      state.data = action.payload;
      return state;
    },
  },
});

export const { userSetup } = userSlice.actions;
export default userSlice.reducer;