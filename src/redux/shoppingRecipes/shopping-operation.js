import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// SHOPPING-LIST
export const addToShopping = createAsyncThunk(
  'shoppinglist/add-ingredient',
  async ({ recipeId, ingredientId }, thunkAPI) => {
    try {
      const res = await axios.post(
        `shoppinglist/add-ingredient?recipeId=${recipeId}&ingredientId=${ingredientId}`
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteFromShopping = createAsyncThunk(
  'shoppinglist/remove-ingredient',
  async (id, thunkAPI) => {
    try {
      const res = await axios.delete(
        `shoppinglist/remove-ingredient/?ingredientId=${id}`
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllShopping = createAsyncThunk(
  'shoppinglist/get-list',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`shoppinglist/get-list`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
