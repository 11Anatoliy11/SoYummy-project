import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { popularRecipe } from 'redux/recipes/recipe-operation';
import { recipeSelector } from 'redux/recipes/recipe-select';
import { AddRecipeForm } from 'components/AddRecipeForm/AddRecipeForm';
import { PopularRecipes } from 'components/PopularRecipes/PopularRecipes';
import { scrollToTop } from '../../components/utils/scrollToTop';


const AddRecipesPage = ({ onClose }) => {
  const popular = useSelector(recipeSelector.getPopularRecipes);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(popularRecipe());
    scrollToTop();
  }, [dispatch]);

  return (
    <>
      <AddRecipeForm />
      {popular.length > 0 ? <PopularRecipes data={popular} /> : <></>}
    </>);
};

export default AddRecipesPage;
