import { createSlice } from '@reduxjs/toolkit';
import { getAllShopping } from './shopping-operation';

const initialState = {
  shoppingRecipes: [],
  isLoading: false,
};

const shopRecipesSlice = createSlice({
    name:'shoppingRecipes',
    initialState,
    reducers:{},
    extraReducers: builder => 
    builder
      // SHOPPING RECIPE
      .addCase(getAllShopping.pending,(state,{payload})=> {
        state.isLoading = true;
    })
    .addCase(getAllShopping.fulfilled,(state,{payload})=>{ 
        state.shoppingList = payload;
        state.isLoading = false;
    })
    .addCase(getAllShopping.rejected,(state,{payload})=> {
        state.isLoading = false;
    })
});
export const shopRecipesReducer = shopRecipesSlice.reducer;