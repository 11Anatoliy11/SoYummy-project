export const recipeSelector = {
    getCategoryList:state => state.recipeCommon.categoryList,
    getIngredientList:state => state.recipeCommon.ingredientList,
    getRecipeByCategory:state => state.recipeCommon.recipeByCategory,
    getRecipeMainPage:state => state.recipeCommon.recipeMainPage,
    getRecipeBySearch:state => state.recipeCommon.recipeBySearch,
    getRecipeById:state => state.recipeCommon.recipeById,
    getRecipeByIngredient:state => state.recipeCommon.recipeByIngredient,
    getFavoriteRecipes:state => state.recipeCommon.favoriteRecipes,
    getPopularRecipes:state => state.recipeCommon.popularRecipes,
    getIsloading:state => state.recipeCommon.isLoading,
}