export const getCategoryList = state => state.recipeCommon.categoryList;
export const getIngredientList = state => state.recipeCommon.ingredientList;
export const getRecipeByCategory = state =>
  state.recipeCommon.recipeByCategory?.items || [];
export const getRecipeByCategoryCount = state =>
  state.recipeCommon.recipeByCategory?.totalCount || 0;
export const getRecipeMainPage = state => state.recipeCommon.recipeMainPage;
export const getRecipeBySearch = state => state.recipeCommon.recipeBySearch;
export const getRecipeById = state => state.recipeCommon.recipeById;
export const getRecipeByIngredient = state =>
  state.recipeCommon.recipeByIngredient;
export const getFavoriteRecipes = state =>
  state.recipeCommon.favoriteRecipe?.items || [];
export const getFavoriteRecipesCount = state =>
  state.recipeCommon.favoriteRecipe?.totalCount || 0;
export const getPopularRecipes = state => state.recipeCommon?.popularRecipes;
export const getIsLoading = state => state.recipeCommon.isLoading;
