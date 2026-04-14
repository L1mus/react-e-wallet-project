import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "lucide-react";
import apiLogin from "../../api/asyncLogin";

const initialState = {
  user: [],
  isLogin: false,
  isLoading: false,
  error: null,
  status: {
    userLogin: {
      isPending: false,
      isFulfilled: false,
      isRejected: false,
    },
  },
};

const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (state, action, { rejectWithValue }) => {
    try {
      const data = await fetch(apiLogin(state));
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearError: (prevState) => {
      return {
        ...prevState,
        error: null,
      };
    },
  },
  extraReducers: (builder) => {
    return builder.addAsyncThunk(loginUser, {
      pending: (prevState) => {
        prevState.status.userLogin.isPending = true;
        prevState.status.userLogin.isFulfilled = false;
        prevState.status.userLogin.isRejected = false;
        prevState.isLoading = true;
      },
      fulfilled: (prevState, { payload }) => {
        prevState.status.userLogin.isPending = false;
        prevState.status.userLogin.isFulfilled = true;
        prevState.user = payload;
      },
      rejected: (prevState, { payload }) => {
        prevState.status.userLogin.isPending = false;
        prevState.status.userLogin.isRejected = true;
        prevState.error.userLogin = payload;
      },
    });
  },
});

export const authActions = {
  ...authSlice.actions,
  loginUser,
};

export default authSlice.reducer;
