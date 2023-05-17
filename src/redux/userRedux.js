import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentUser: null,
  isFetching: false,
  error: false,
  errorMessage: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.currentUser = null;
      state.errorMessage = null;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    loginFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
      state.errorMessage = action.payload;
    },
    reset: () => {
      initialState;
    },
  },
});

export const { loginSuccess, loginStart, loginFailure, reset } =
  userSlice.actions;
export default userSlice.reducer;
