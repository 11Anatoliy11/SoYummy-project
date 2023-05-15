export const selectSearchedRecipes = state => state.search.items;
export const selectSearchedRecipesCount = state => state.search.totalCount;
export const selectIsLoading = state => state.search.isLoading;
export const selectError = state => state.search.error;
export const selectQueryType = state => state.search.queryType;
export const selectQuery = state => state.search.query;
