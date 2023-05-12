export const selectFavRecipes = state => state.favoriteRecipes.items;
export const selectFavRecipesCount = state => state.favoriteRecipes.totalCount;
export const selectFavIsLoading = state => state.favoriteRecipes.isLoading;
export const selectFavError = state => state.favoriteRecipes.error;
