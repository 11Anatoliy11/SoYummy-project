import { createAsyncThunk } from '@reduxjs/toolkit';
// eslint-disable-next-line
import { setAuthHeader, clearAuthHeader } from 'apiService/axiosService';
import axios from 'axios';
import { toast } from 'react-toastify';


export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('auth/register', credentials);
      setAuthHeader(res.data.user.token);
      toast.success('Successfully registered !');
      console.log(res.data);
      return res.data;
    } catch (error) {

      toast.error(
        'This email has already been registered !'
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('auth/login', credentials);
      const {token} = res.data.user;
      // console.log(token)
      // console.log('Before',axios.defaults.headers.common.Authorization)

      setAuthHeader(token);
      // console.log('After',axios.defaults.headers.common.Authorization)
      toast.success('You are logged in !');
      return res.data;
    } catch (error) {
      toast.error(
        'Something went wrong , verify you pass OR email!'
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const res = await axios.post('auth/logout');
    clearAuthHeader();
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});


export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const { token } = state.auth.user;
      setAuthHeader(token)
      // console.log('IN current',axios.defaults.headers.common.Authorization)
      const res = await axios.get('auth/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const uploadAvatar = createAsyncThunk(
  'auth/avatars',
  async (file, thunkAPI) => {
    try {
      const res = await axios.patch('auth/avatars', file);
      return res.data.avatarURL;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

export const uploadUserInfo = createAsyncThunk(
  'auth/user-info',
  async(name,thunkAPI) => {
      try{
          const res = await axios.patch('auth/user-info',name);
          return res.data;
      } catch (error) {
          return thunkAPI.rejectWithValue(error.message);
      }
  }
)