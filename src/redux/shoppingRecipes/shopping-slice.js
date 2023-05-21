import { createSlice } from '@reduxjs/toolkit';
import {
  getAllShopping,
  deleteFromShopping,
  addToShopping,
} from './shopping-operation';

const initialState = {
  shoppingList: [],
  isLoading: false,
};

const shopRecipesSlice = createSlice({
  name: 'shoppingList',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      // SHOPPING RECIPE
      .addCase(getAllShopping.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(getAllShopping.fulfilled, (state, { payload }) => {
        state.shoppingList = payload.data.shoppingList;
        state.isLoading = false;
      })
      .addCase(getAllShopping.rejected, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(deleteFromShopping.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(deleteFromShopping.fulfilled, (state, { payload }) => {
        state.shoppingList = payload.data;
        state.isLoading = false;
      })
      .addCase(deleteFromShopping.rejected, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(addToShopping.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(addToShopping.fulfilled, (state, { payload }) => {
        state.shoppingList = payload.data;
        state.isLoading = false;
      })
      .addCase(addToShopping.rejected, (state, { payload }) => {
        state.isLoading = false;
      })
});
export const shopRecipesReducer = shopRecipesSlice.reducer;
