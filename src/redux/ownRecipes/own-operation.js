import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// OWN RECIPEs
export const addOwnRecipes = createAsyncThunk(
  'recipe/addOwnRecipes',
  async (recipe, thunkAPI) => {
    try {
      const res = await axios.post(`ownRecipes`, recipe);
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
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllOwnRecipes = createAsyncThunk(
  'recipe/getAllOwnRecipes',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`ownRecipes/own-recipes`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
