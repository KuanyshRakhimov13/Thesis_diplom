// authSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import AuthService from "../../services/AuthService";

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: "",
  currentUser: null,
  user_card_id: null,
};

// request for login
export const fetchLogin = createAsyncThunk(
  "users/fetchLogin",
  async (body, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/auth/login",
        body
      );

      return { data: response.data, username: body.username };
    } catch (error) {
      console.log(error);
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

// register
export const fetchRegister = createAsyncThunk(
  "users/fetchRegister",
  async (body, { rejectWithValue }) => {
    try {
      await AuthService.registration(body);

      return body.username;
    } catch (error) {
      console.log(error);
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // add card_id to state
    addUserId: (state, action) => {
      state.user_card_id = action.payload.id;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.isAuthenticated = false;
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user_card_id = action.payload.data?.card_id ?? null;
        state.currentUser = action.payload.username;
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
      })
      .addCase(fetchRegister.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.isAuthenticated = false;
      })
      .addCase(fetchRegister.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user_card_id = null;
        state.currentUser = action.payload;
      })
      .addCase(fetchRegister.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
      });
  },
});

export const { login, logout, addUserId } = authSlice.actions;

export default authSlice.reducer;
