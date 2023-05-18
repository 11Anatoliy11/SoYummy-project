import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// SHOPPING-LIST
export const addToShopping = createAsyncThunk(
  'recipe/addToShopping',
  async (id, thunkAPI) => {
    try {
      const res = await axios.post(`shopping-list`,id);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteFromShopping = createAsyncThunk(
  'recipe/deleteFromShopping',
  async (id, thunkAPI) => {
    try {
      const res = await axios.delete(`shopping-list/${id}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllShopping = createAsyncThunk(
  'recipe/getAllShopping',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`shopping-list`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

