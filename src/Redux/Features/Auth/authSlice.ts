import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { UserToken } from "../../../Types/global";

type TAuthState = {
  user: null | UserToken;
  token: null | string;
};

const initialState: TAuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },

    logOut: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const getUser = (state: RootState) => state.auth.user;
export const { setUser, logOut } = authSlice.actions;
export default authSlice.reducer;
