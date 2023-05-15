import { createAsyncThunk } from '@reduxjs/toolkit';
//import api from 'service/Api/axiosBaseURL';
import recips from 'data/recipes.json';

export const getRecipesByQuery = createAsyncThunk(
  'search/getRecipesByQuery',
  async ({ query, page = 1, pageSize = 10 }, thunkAPI) => {
    try {
      //const response = await api.get(`/recipes?filter%5Btitle%5D=${query}`);

      const start = page <= 1 ? 0 : page * pageSize;
      const end = start + pageSize;
      const favRecipe = recips.slice(start, end);
      return {
        items: favRecipe,
        totalCount: recips.length
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
      // const response = await api.get(
      //   `/recipes?filter%5Bingredients%5D=${query}`
      // );

      const start = page <= 1 ? 0 : page * pageSize;
      const end = start + pageSize;

      const favRecipe = recips.slice(start, end);
      return {
        items: favRecipe,
        totalCount: recips.length
      };
      //return response.data.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
