import { createSlice } from '@reduxjs/toolkit';
import {
  login,
  refreshUser,
  logout,
  register,
  uploadAvatar,
  subscribe,
} from './auth-operations';

const initialState = {
  user: { email: null, name: null, avatar: null, token: null },
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
  subscribeMessage: '',
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
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => {})
      //LOGIN
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.isLoggedIn = true;
      })
      //LOGOUT
      .addCase(logout.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        return initialState;
      })

      //REFRESH USER
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        // state.user = payload.user;
        state.isRefreshing = false;
        // state.isLoggedIn = true;
      })
      .addCase(refreshUser.rejected, state => {
        return initialState;
      })

      //AVATAR
      .addCase(uploadAvatar.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(uploadAvatar.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(uploadAvatar.fulfilled, (state, { payload }) => {
        state.user.avatar = payload.avatarURL;
        state.user.name = payload.name;
        state.isRefreshing = false;
      })
      .addCase(subscribe.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(subscribe.fulfilled, (state, { payload }) => {
        state.isRefreshing = false;
        state.subscribeMessage = payload.data.message;
      })
      .addCase(subscribe.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.subscribeMessage = payload;
        state.error = 401;
      }),
});

export const authReducer = authSlice.reducer;
