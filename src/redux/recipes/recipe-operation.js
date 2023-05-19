import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const recipeByCategory = createAsyncThunk(
  'recipe/recipeByCategory',
  async (category, thunkAPI) => {
    try {
      const res = await axios.get(`recipes/${category}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const recipeMainPage = createAsyncThunk(
  'recipe/recipeMainPage',
  async (category, thunkAPI) => {
    try {
      const res = await axios.get(`recipes/main-page`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const recipeCategoryList = createAsyncThunk(
  'recipe/CategoryList',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`recipes/category-list`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const recipeById = createAsyncThunk(
  'recipe/recipeById',
  async (id, thunkAPI) => {
    try {
      const res = await axios.get(`recipes/${id}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const recipeBySearch = createAsyncThunk(
  'recipe/recipeBySearch',
  async (query, thunkAPI) => {
    try {
      const res = await axios.get(`search?query=${query}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const ingredientList = createAsyncThunk(
  'recipe/ingredientsList',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`ingredients/list/`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const recipeByIngredient = createAsyncThunk(
  'recipe/recipeByIngredient',
  async (ingredient, thunkAPI) => {
    try {
      const res = await axios.get(`ingredients?ingredient=${ingredient}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// FAVORITE;
export const addToFavorite = createAsyncThunk(
  'recipe/addFavorite',
  async (recipeId, thunkAPI) => {
    try {
      const res = await axios.post(
        `favorite/add-favorite/${recipeId}`,
        recipeId
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteFavorite = createAsyncThunk(
  'recipe/deleteFavorite',
  async (recipeId, thunkAPI) => {
    try {
      const res = await axios.delete(`favorite/delete-favorite/${recipeId}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllFavorite = createAsyncThunk(
  'recipe/getAllFavorite',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`favorite/get-favorite`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//SUBSCRIBE
export const subscribe = createAsyncThunk(
  'recipe/subscribe',
  async (_, thunkAPI) => {
    try {
      const res = await axios.post(`subscribe`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// POPULAR
export const popularRecipe = createAsyncThunk(
  'recipe/popularRecipe',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`popular-recipe`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
