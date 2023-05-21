import { createSlice } from '@reduxjs/toolkit';

import {
    recipeByCategory,
    recipeById,
    recipeByIngredient,
    recipeMainPage,
    recipeCategoryList,
    ingredientList,
    popularRecipe,
} from './recipe-operation';

const initialState = {
    categoryList: [],
    ingredientList: [],
    recipeByCategory: [],
    recipeMainPage: [],
    recipeById: null,
    recipeByIngredient: [],
    popularRecipes: [],
    isLoading: false,
};

const recipeSlice = createSlice({
    name: 'recipe',
    initialState,
    reducers:{},
    extraReducers:builder =>
    builder
    //CATEGORY LIST
    .addCase(recipeCategoryList.pending,(state,{payload})=>{
        state.isLoading = true;
    })
    .addCase(recipeCategoryList.fulfilled,(state,{payload})=>{
        if (payload) {
            state.categoryList = payload.categories;
          }
          state.isLoading = false;
    })
    .addCase(recipeCategoryList.rejected,(state,{payload})=>{
        state.isLoading = false;
    })
    //INGREDIENT LIST
    .addCase(ingredientList.pending,(state,{payload})=>{
        state.isLoading = true;
    })
    .addCase(ingredientList.fulfilled,(state,{payload})=>{
        state.ingredientList = payload;
        state.isLoading = false;
    })
    .addCase(ingredientList.rejected,(state,{payload})=>{
        state.isLoading = false;
    })
    // RECIPE FOR MAIN PAGE
    .addCase(recipeMainPage.pending,(state,{payload})=>{
        state.isLoading = true;
    })
    .addCase(recipeMainPage.fulfilled,(state,{payload})=>{
        state.recipeMainPage = payload;
        state.isLoading = false;
    })
    .addCase(recipeMainPage.rejected,(state,{payload})=>{
        state.isLoading = false;
    })
    //RECIPE BY CATEGORIES
    .addCase(recipeByCategory.pending,(state,{payload})=>{
        state.isLoading = true;
    })
    .addCase(recipeByCategory.fulfilled,(state,{payload})=>{
        state.recipeByCategory = payload.data;
        state.isLoading = false;
    })
    .addCase(recipeByCategory.rejected,(state,{payload})=>{
        state.isLoading = false;
    })
    // RECIPE BY INGREDIENTS
    .addCase(recipeByIngredient.pending,(state,{payload})=>{
        state.isLoading = true;
    })
    .addCase(recipeByIngredient.fulfilled,(state,{payload})=>{
        state.recipeByIngredient = payload;
        state.isLoading = false;
    })
    .addCase(recipeByIngredient.rejected,(state,{payload})=>{
        state.isLoading = false;
    })
//    // RECIPE BY SEARCH
//    .addCase(recipeBySearch.pending,(state,{payload})=>{
//     state.isLoading = true;
//     })
//     .addCase(recipeBySearch.fulfilled,(state,{payload})=>{
//         state.recipeBySearch = payload;
//         state.isLoading = false;
//     })
//     .addCase(recipeBySearch.rejected,(state,{payload})=>{
//         state.isLoading = false;
//     })
    //RECIPE BY ID
    .addCase(recipeById.pending,(state,{payload})=>{
        state.isLoading = true;
    })
    .addCase(recipeById.fulfilled,(state,{payload})=>{
        state.recipeById = payload;
        state.isLoading = false;
    })
    .addCase(recipeById.rejected,(state,{payload})=>{
        state.isLoading = false;
    })
    
    // // FAVORITE RECIPE
    // .addCase(getAllFavorite.pending,(state,{payload})=>{
    //     state.isLoading = true;
    // })
    // .addCase(getAllFavorite.fulfilled,(state,{payload})=>{
    //     state.favoriteRecipes = payload;
    //     state.isLoading = false;
    // })
    // .addCase(getAllFavorite.rejected,(state,{payload})=> {
    //     state.isLoading = false;
    // })
    //POPULAR RECIPE
    .addCase(popularRecipe.pending,(state,{payload})=> {
        state.isLoading = true;
    })
    .addCase(popularRecipe.fulfilled,(state,{payload})=> {
        state.popularRecipes = payload;
        state.isLoading = false;
    })
    .addCase(popularRecipe.rejected,(state,{payload})=> {
        state.isLoading = false;
    })
    // // SHOPPING RECIPE
    // .addCase(getAllShopping.pending,(state,{payload})=> {
    //     state.isLoading = true;
    // })
    // .addCase(getAllShopping.fulfilled,(state,{payload})=>{
    //     state.shoppingList = payload;
    //     state.isLoading = false;
    // })
    // .addCase(getAllShopping.rejected,(state,{payload})=> {
    //     state.isLoading = false;
    // })
});

export const recipeReducer = recipeSlice.reducer;
