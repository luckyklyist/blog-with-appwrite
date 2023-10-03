import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserInterface {
  status: boolean;
  userInfo: {
    name: string;
    email: string;
  };
}

const intitalUserState: UserInterface = {
  status: false,
  userInfo: {
    name: "",
    email: "",
  },
};

export const authUserSlice = createSlice({
  name: "auth",
  initialState: intitalUserState,
  reducers: {
    loginUser: (
      state,
      action: PayloadAction<{ userInfo: { name: string; email: string } }>
    ) => {
      state.status = true;
      state.userInfo = action.payload.userInfo;
    },
    logOutUser: (state) => {
      state.status = false;
      state.userInfo = {
        name: "",
        email: "",
      };
    },
  },
});

// exporting the action from the slice
export const { loginUser, logOutUser } = authUserSlice.actions;

export default authUserSlice.reducer;
