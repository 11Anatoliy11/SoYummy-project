export const recipeSelector = {
  getCategoryList: state => state.recipeCommon.categoryList,
  getIngredientList: state => state.recipe.ingredientList,
  getRecipeByCategory: state => state.recipeCommon.recipeByCategory,
  getRecipeMainPage: state => state.recipe.recipeMainPage,
  getRecipeBySearch: state => state.recipe.recipeBySearch,
  getRecipeById: state => state.recipeCommon.recipeById,
  getRecipeByIngredient: state => state.recipe.recipeByIngredient,
  getFavoriteRecipes: state => state.recipeCommon.favoriteRecipes,
  getPopularRecipes: state => state.recipeCommon?.popularRecipes,
  getIsLoading: state => state.recipeCommon.isLoading,
};
