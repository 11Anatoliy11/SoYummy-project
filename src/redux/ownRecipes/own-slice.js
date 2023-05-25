import { createSlice } from '@reduxjs/toolkit';
import {
  addOwnRecipes,
  deleteOwnRecipes,
  getAllOwnRecipes,
} from './own-operation';

const initialState = {
  ownRecipes: [],
  recipesCount: 0,
  isLoading: false,
};

const ownRecipesSlice = createSlice({
  name: 'ownRecipes',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      // GET OWN RECIPE
      .addCase(getAllOwnRecipes.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(getAllOwnRecipes.fulfilled, (state, { payload }) => {
        state.ownRecipes = payload.items;
        state.recipesCount = payload.totalCount;
        state.isLoading = false;
      })
      .addCase(getAllOwnRecipes.rejected, (state, { payload }) => {
        state.isLoading = false;
      })
      //DELETE
      .addCase(deleteOwnRecipes.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(deleteOwnRecipes.fulfilled, (state, { payload }) => {
        state.ownRecipes = state.ownRecipes.filter(it => it._id !== payload._id);
        state.isLoading = false;
      })
      .addCase(deleteOwnRecipes.rejected, (state, { payload }) => {
        state.isLoading = false;
      })
      //PATCH
      .addCase(addOwnRecipes.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(addOwnRecipes.fulfilled, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(addOwnRecipes.rejected, (state, { payload }) => {
        state.isLoading = false;
      }),
});
export const ownRecipesReducer = ownRecipesSlice.reducer;
