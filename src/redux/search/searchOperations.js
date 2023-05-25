import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getRecipesByQuery = createAsyncThunk(
  'search/getRecipesByQuery',
  async ({ query, page = 0, pageSize = 10 }, thunkAPI) => {
    try {
      const response = await axios.get(`/recipes/search/title?query=${query}&page=${page}&limit=${pageSize}`);

      return {
        items: response.data.data,
        totalCount: response.data?.totalCount
      };
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const getRecipesByIngredient = createAsyncThunk(
  'search/getRecipesByIngredient',
  async ({ query, page = 0, pageSize = 10 }, thunkAPI) => {
    try {
      const response = await axios.get(`/recipes/search/ingredient?query=${query}&page=${page}&limit=${pageSize}`);

      return {
        items: response?.data?.data,
        totalCount: response?.data?.totalCount
      };
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
