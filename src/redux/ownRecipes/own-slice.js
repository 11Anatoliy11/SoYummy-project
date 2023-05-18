import { createSlice } from '@reduxjs/toolkit';
import { getAllOwnRecipes } from './own-operation';

const initialState = {
  ownRecipes: [],
  isLoading: false,
};

const ownRecipesSlice = createSlice({
    name:'ownRecipes',
    initialState,
    reducers:{},
    extraReducers: builder => 
    builder
    // OWN RECIPE
    .addCase(getAllOwnRecipes.pending,(state,{payload})=>{
        state.isLoading = true;
    })
    .addCase(getAllOwnRecipes.fulfilled,(state,{payload})=>{
        state.ownRecipes = payload;
        state.isLoading = false;
    })
    .addCase(getAllOwnRecipes.rejected,(state,{payload})=>{
        state.isLoading = false;
    })
});
export const ownRecipesReducer = ownRecipesSlice.reducer;