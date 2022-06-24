import { createSlice } from "@reduxjs/toolkit";
import { User } from "../shared/share";
import type { RootState } from "../app/store";

const initialState: User = {
  name: "thanh",
  email: "",
  created_at: "",
  id: "",
  role: "",
  updated_at: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export const authSelector = (state: RootState) => state.auth;

export default authSlice.reducer;
