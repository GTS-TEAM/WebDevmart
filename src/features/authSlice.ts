import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../share";
import type { RootState } from "../app/store";

const initialState: User = {
  name: "thanh",
  age: 21,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export const authSelector = (state: RootState) => state.auth;

export default authSlice.reducer;
