import { createAsyncThunk } from '@reduxjs/toolkit';
// eslint-disable-next-line
import { setAuthHeader, clearAuthHeader } from 'apiService/axiosService';
import axios from 'axios';
import { toast } from 'react-hot-toast';


export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('auth/register', credentials);
      setAuthHeader(res.data.accessToken);
      toast.success('Successfully registered !');
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
      setAuthHeader(res.data.accessToken);
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
      const res = await axios.get('auth/current');
      return res.data;
    } catch (error){
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const uploadAvatar = createAsyncThunk(
    'auth/avatars',
    async(file,thunkAPI) => {
        try{
            const res = await axios.patch('auth/avatars',file);
            return res.data.avatarURL;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)
