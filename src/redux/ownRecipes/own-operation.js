import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// OWN RECIPEs
export const addOwnRecipes = createAsyncThunk(
  'recipe/addOwnRecipes',
  async (recipe, thunkAPI) => {
    try {
      const res = await axios.patch(`ownRecipes/add-recipe`, recipe);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteOwnRecipes = createAsyncThunk(
  'recipe/deleteOwnRecipes',
  async (id, thunkAPI) => {
    try {
      const res = await axios.delete(`ownRecipes/remove-recipe/${id}`);
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllOwnRecipes = createAsyncThunk(
  'recipe/getAllOwnRecipes',
  async ({ page = 1, pageSize = 10 }, thunkAPI) => {
    try {
      const res = await axios.get(`ownRecipes/own-recipes?page=${page}&limit=${pageSize}`);
      return {
        items: res.data?.data,
        totalCount: res.data?.totalCount
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
