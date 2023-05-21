export const recipeSelector = {
    getCategoryList: state => state.recipe.categoryList,
    getIngredientList: state => state.recipe.ingredientList,
    getRecipeByCategory: state => state.recipe.recipeByCategory,
    getRecipeMainPage: state => state.recipe.recipeMainPage,
    getRecipeBySearch: state => state.recipe.recipeBySearch,
    getRecipeById: state => state.recipe.recipeById,
    getRecipeByIngredient: state => state.recipe.recipeByIngredient,
    getFavoriteRecipes: state => state.recipe.favoriteRecipes,
    getPopularRecipes: state => state.recipe.popularRecipes,
    getIsloading: state => state.recipe.isLoading,
}