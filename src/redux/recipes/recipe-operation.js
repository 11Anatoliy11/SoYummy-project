import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import axios from 'axios';

export const recipeByCategory = createAsyncThunk(
  'recipe/recipeByCategory',
  async ({ category, page = 1, pageSize = 10 }, thunkAPI) => {
    try {
      const res = await axios.get(`recipes/${category}?page=${page}&limit=${pageSize}`);
      return {
        items: res?.data?.data,
        totalCount: 20
      };
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
      const res = await axios.get(`recipes/id/${id}`);
      // console.log(res.data);
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
      await axios.post(`favorite/add-favorite/${recipeId}`, recipeId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const unmarkAsFavorite = createAsyncThunk(
  'recipe/unmarkAsFavorite',
  async (recipeId, thunkAPI) => {
    try {
      await axios.delete(`favorite/delete-favorite/${recipeId}`);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// For all favorite recipes
export const deleteFavorite = createAsyncThunk(
  'recipe/deleteFavorite',
  async (recipeId, thunkAPI) => {
    try {
      await axios.delete(`favorite/delete-favorite/${recipeId}`);
      return recipeId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllFavorite = createAsyncThunk(
  'recipe/getAllFavorite',
  async ({ page = 1, pageSize = 10 }, thunkAPI) => {
    try {
      const result = await axios.get(
        `/favorite/get-favorite?page=${page}&limit=${pageSize}`
      );
      return {
        items: result?.data?.data,
        totalCount: 20
      };
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
      const res = await axios.get(`recipes/popular`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const clearRecipeMainPageState = createAction('recipe/clear-recipe-main-page')
