import{useSelector} from 'react-redux';

import { Main } from 'components/Main/Main';
import {RecipeCard} from 'components/Common/recipeCard/RecipeCard';
import{recipeSelector} from 'redux/recipes/recipe-select'
import{recipeMainPage} from 'redux/recipes/recipe-operation'

const MainPage = () => {

//   const recipes = useSelector(recipeSelector.getRecipeMainPage);
// console.log(recipes);
  return(
    <><Main/>
    <RecipeCard title ="Recipe"/>
    </>

  );
};

export default MainPage;
