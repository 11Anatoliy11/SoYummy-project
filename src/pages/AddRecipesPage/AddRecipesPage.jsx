import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { popularRecipe } from 'redux/recipes/recipe-operation';
import { recipeSelector } from 'redux/recipes/recipe-select';
import { AddRecipeForm } from 'components/AddRecipeForm/AddRecipeForm';
import PageTitleSection from 'components/PageTitleSection/PageTitleSection';
import { PopularRecipes } from 'components/PopularRecipes/PopularRecipes';
import { WrapperAddRecipes } from './AddRecipesPage.styled';

const AddRecipesPage = () => {

  return (
    
     <><PageTitleSection text="Add recipe" />
     <WrapperAddRecipes>
      <AddRecipeForm />
      <PopularRecipes />
    </WrapperAddRecipes></>);
};

export default AddRecipesPage;
