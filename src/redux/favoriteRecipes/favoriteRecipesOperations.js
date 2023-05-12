import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import recips from 'data/recipes.json';
import api from 'service/Api/axiosBaseURL';

export const getFavoriteRecipes = createAsyncThunk(
  'favoriteRecipes/getRecipes',
  async ({ page = 1, pageSize = 10 }, thunkAPI) => {
    try {
      // const { data } = await api.get(
      //   `/recipes/my/favorite?page=${page}&limit=4`
      // );
      const start = page <= 1 ? 0 : page * pageSize;
      const end = start + pageSize;

      const favRecipe = recips.slice(start, end);
      return {
        items: favRecipe,
        totalCount: recips.length
      };
    } catch (error) {
      toast.error('Something went wrong, please try again later');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addFavoriteRecipes = createAsyncThunk(
  'favoriteRecipes/addFavorite',
  async (recipeId, thunkAPI) => {
    try {
      const response = await api.patch(
        `/recipes/${recipeId}/favorite`,
        recipeId
      );
      toast.success('Add to Favorites');
      return response.data;
    } catch (error) {
      toast.error('Something went wrong, please try again later');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeFromFavorite = createAsyncThunk(
  'favoriteRecipes/removeFavorite',
  async (recipeId, thunkAPI) => {
    try {
      const { data } = await api.delete(`/recipes/${recipeId}/favorite`);
      toast.success('Removed from Favorites');
      return data;
    } catch (error) {
      toast.error('Something went wrong, please try again later');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
