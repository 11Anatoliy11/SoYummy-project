import { createSlice } from '@reduxjs/toolkit';
import {
  login,
  refreshUser,
  logout,
  register,
  uploadAvatar,
} from './auth-operations';

const initialState = {
  user: { email: null, name: null, avatar: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
    // REGISTER
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.user.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => {})
      //LOGIN
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.user.token;
        state.isLoggedIn = true;
      })
      //LOGOUT
      .addCase(logout.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isRefreshing = false;
        return initialState;
      })
   
      //REFRESH USER
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, {payload}) => {
        state.user = payload;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
        return initialState;
      })

      //AVATAR
      .addCase(uploadAvatar.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(uploadAvatar.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(uploadAvatar.fulfilled, (state, {payload}) => {
        state.user.avatar = payload;
        state.isRefreshing = false;
      })
});

export const authReducer = authSlice.reducer;
