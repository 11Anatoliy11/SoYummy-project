import { createSlice } from '@reduxjs/toolkit';

import {
  recipeByCategory,
  recipeById,
  recipeByIngredient,
  recipeMainPage,
  recipeCategoryList,
  ingredientList,
  popularRecipe,
  getAllFavorite,
  deleteFavorite,
  addToFavorite,
  unmarkAsFavorite,
  clearRecipeMainPageState,
} from './recipe-operation';

const initialState = {
  categoryList: [],
  ingredientList: [],
  recipeByCategory: {
    items: [],
    totalCount: 0
  },
  recipeMainPage: [],
  recipeById: null,
  recipeByIngredient: [],
  favoriteRecipe: {
    items: [],
    totalCount: 0
  },
  popularRecipes: [],
  isLoading: false,
};

const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      //CATEGORY LIST
      .addCase(recipeCategoryList.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(recipeCategoryList.fulfilled, (state, { payload }) => {
        if (payload) {
          state.categoryList = payload.categories;
        }
        state.isLoading = false;
      })
      .addCase(recipeCategoryList.rejected, (state, { payload }) => {
        state.isLoading = false;
      })
      //INGREDIENT LIST
      .addCase(ingredientList.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(ingredientList.fulfilled, (state, { payload }) => {
        state.ingredientList = payload.data;
        state.isLoading = false;
      })
      .addCase(ingredientList.rejected, (state, { payload }) => {
        state.isLoading = false;
      })
      // RECIPE FOR MAIN PAGE
      .addCase(recipeMainPage.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(recipeMainPage.fulfilled, (state, { payload }) => {
        state.recipeMainPage = payload.data;
        state.isLoading = false;
      })
      .addCase(recipeMainPage.rejected, (state, { payload }) => {
        state.isLoading = false;
      })
      //RECIPE BY CATEGORIES
      .addCase(recipeByCategory.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(recipeByCategory.fulfilled, (state, { payload }) => {
        state.recipeByCategory = {
          items: payload.items,
          totalCount: payload.totalCount
        };
        state.isLoading = false;
      })
      .addCase(recipeByCategory.rejected, (state, { payload }) => {
        state.isLoading = false;
      })
      // RECIPE BY INGREDIENTS
      .addCase(recipeByIngredient.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(recipeByIngredient.fulfilled, (state, { payload }) => {
        state.recipeByIngredient = payload;
        state.isLoading = false;
      })
      .addCase(recipeByIngredient.rejected, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(recipeById.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(recipeById.fulfilled, (state, { payload }) => {
        state.recipeById = payload;
        // state.recipeById = !payload?.data.length ? payload?.data[0] : null;
        state.isLoading = false;
      })
      .addCase(recipeById.rejected, (state, { payload }) => {
        state.isLoading = false;
      })

      // FAVORITE RECIPE
      .addCase(getAllFavorite.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(getAllFavorite.fulfilled, (state, { payload }) => {
        state.favoriteRecipe = {
          items: payload.items,
          totalCount: payload.totalCount
        };
        state.isLoading = false;
      })
      .addCase(getAllFavorite.rejected, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(addToFavorite.pending, (state, { meta }) => {
        state.isLoading = true;
      })
      .addCase(addToFavorite.fulfilled, (state, { meta }) => {
        state.recipeById = {
          ...state.recipeById,
          isFavorite: true,
        };
        state.favoriteRecipes.data = [
          ...state.favoriteRecipes.data,
          { _id: meta.arg },
        ];
        state.isLoading = false;
      })
      .addCase(addToFavorite.rejected, (state, { meta }) => {
        state.isLoading = false;
      })
      .addCase(unmarkAsFavorite.fulfilled, (state, { payload }) => {
        state.recipeById = {
          ...state.recipeById,
          isFavorite: false,
        };
        state.isLoading = false;
      })
      .addCase(deleteFavorite.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(deleteFavorite.fulfilled, (state, { payload }) => {
        const updateRecipes = state.favoriteRecipes.data.filter(
          recipe => recipe._id !== payload
        );
        state.favoriteRecipes.data = updateRecipes || [];
        state.isLoading = false;
      })
      .addCase(deleteFavorite.rejected, (state, { payload }) => {
        state.isLoading = false;
      })

      //POPULAR RECIPE
      .addCase(popularRecipe.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(popularRecipe.fulfilled, (state, { payload }) => {
        state.popularRecipes = payload.data;
        state.isLoading = false;
      })
      .addCase(popularRecipe.rejected, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(clearRecipeMainPageState, (state, { payload }) => {
        state.recipeMainPage = [];
      })
});

export const recipeReducer = recipeSlice.reducer;
