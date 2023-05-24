import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getRecipesByQuery = createAsyncThunk(
  'search/getRecipesByQuery',
  async ({ query, page = 1, pageSize = 10 }, thunkAPI) => {
    try {
      const response = await axios.get(`/recipes/search/title?query=qwrwqr`);

      return {
        items: response.data,
        totalCount: response.length
      };
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const getRecipesByIngredient = createAsyncThunk(
  'search/getRecipesByIngredient',
  async ({ query, page = 1, pageSize = 10 }, thunkAPI) => {
    try {
      const response = await axios.get(`/recipes/search/ingredient?query=qwrwqr`);

      return {
        items: response.data,
        totalCount: response.length
      };
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
