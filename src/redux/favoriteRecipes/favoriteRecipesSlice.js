import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addFavoriteRecipes,
  getFavoriteRecipes,
  removeFromFavorite,
} from './favoriteRecipesOperations';
import { toast } from 'react-hot-toast';

const initialState = {
  items: [],
  totalCount: 0,
  isLoading: false,
  error: null,
};

export const favoriteRecipesSlice = createSlice({
  name: 'favoriteRecipes',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getFavoriteRecipes.fulfilled, (state, action) => {
        state.error = null;
        state.items = action.payload.items;
        state.totalCount = action.payload.totalCount;
        state.isLoading = false;
      })
      .addCase(addFavoriteRecipes.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.error = null;
        state.items.data.push(action.payload.data);
      })
      .addCase(removeFromFavorite.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.data.findIndex(
          item => item._id === action.payload.data._id
        );
        state.items.data.splice(index, 1);
      })
      .addMatcher(
        isAnyOf(
          getFavoriteRecipes.rejected,
          addFavoriteRecipes.rejected,
          removeFromFavorite.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
          toast.error('Something went wrong, please try again later', {
            autoClose: 3000,
          });
        }
      )
      .addMatcher(
        isAnyOf(
          getFavoriteRecipes.pending,
          addFavoriteRecipes.pending,
          removeFromFavorite.pending
        ),
        state => {
          state.isLoading = true;
        }
      );
  },
});

export default favoriteRecipesSlice.reducer;
