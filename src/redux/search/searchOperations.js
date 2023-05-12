import { createAsyncThunk } from '@reduxjs/toolkit';
import api from 'service/Api/axiosBaseURL';
import recips from 'data/recipes.json';

export const getRecipesByQuery = createAsyncThunk(
  'search/getRecipesByQuery',
  async (query, thunkAPI) => {
    try {
      //const response = await api.get(`/recipes?filter%5Btitle%5D=${query}`);

      const favRecipe = recips.slice(0, 12);
      return favRecipe;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const getRecipesByIngredient = createAsyncThunk(
  'search/getRecipesByIngredient',
  async (query, thunkAPI) => {
    try {
      const response = await api.get(
        `/recipes?filter%5Bingredients%5D=${query}`
      );
      return response.data.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
