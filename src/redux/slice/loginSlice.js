import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiLogin from "../../api/asyncLogin";
import { clearSession, saveSession } from "../../utils/storage";

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
  async (payload, { rejectWithValue }) => {
    try {
      const data = await apiLogin(payload);
      saveSession(data);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

const logoutUser = createAsyncThunk("authLogin/logoutUser", () => {
  return clearSession();
});

const loginSlice = createSlice({
  name: "authLogin",
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
    return builder
      .addAsyncThunk(loginUser, {
        pending: (prevState) => {
          prevState.status.userLogin.isPending = true;
          prevState.status.userLogin.isFulfilled = false;
          prevState.status.userLogin.isRejected = false;
          prevState.isLoading = true;
        },
        fulfilled: (prevState, action) => {
          prevState.status.userLogin.isPending = false;
          prevState.status.userLogin.isFulfilled = true;
          prevState.user = action.payload;
          prevState.isLogin = true;
          prevState.isLoading = false;
        },
        rejected: (prevState, action) => {
          prevState.status.userLogin.isPending = false;
          prevState.status.userLogin.isRejected = true;
          prevState.error = action.payload;
        },
      })
      .addAsyncThunk(logoutUser, {
        fulfilled: (prevState) => {
          prevState.status.userLogin.isPending = false;
          prevState.status.userLogin.isFulfilled = false;
          prevState.isLogin = false;
        },
      });
  },
});

export const loginActions = {
  ...loginSlice.actions,
  loginUser,
};

export default loginSlice.reducer;
