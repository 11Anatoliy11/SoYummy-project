import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getRecipesByQuery, getRecipesByIngredient } from './searchOperations';
import { toast } from 'react-hot-toast';

const initialState = {
  items: [],
  totalCount: 0,
  query: '',
  queryType: 'title',
  isLoading: false,
  error: null,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getRecipesByQuery.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload.items;
        state.totalCount = action.payload.totalCount;
      })
      .addCase(getRecipesByIngredient.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload.items;
        state.totalCount = action.payload.totalCount;
      })
      .addCase(getRecipesByQuery.pending, state => {
        state.isLoading = true;
      })
      .addCase(getRecipesByIngredient.pending, state => {
        state.isLoading = true;
      })
      .addMatcher(
        isAnyOf(
          getRecipesByQuery.rejected,
          getRecipesByIngredient.rejected
        ),
        (state, action) => {
          state.error = action.payload;
          state.isLoading = false;
          toast.error('Something went wrong, please try again later', {
            autoClose: 3000,
          })
        }
      );
  },
  reducers: {
    changeQueryType(state, action) {
      state.queryType = action.payload;
    },
    changeQuery(state, action) {
      state.query = action.payload;
    },
  },
});

export const searchReducer = searchSlice.reducer;

export const { changeQueryType } = searchSlice.actions;
export const { changeQuery } = searchSlice.actions;
