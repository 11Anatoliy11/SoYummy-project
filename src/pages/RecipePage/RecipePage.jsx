import { useParams } from 'react-router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RecipeIngredientsList from 'components/RecipeIngredientsList/RecipeIngredientsList';
import RecipePageHero from 'components/RecipePageHero/RecipePageHero';
import RecipePreparation from 'components/RecipePreparation/RecipePreparation';

import { recipeSelector } from 'redux/recipes/recipe-select';
import { recipeById } from 'redux/recipes/recipe-operation';

export default function RecipePage() {
  const { recipeId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(recipeById(recipeId));
  }, [dispatch, recipeId]);

  const recipe = useSelector(recipeSelector.getRecipeById);
  const isFavoriteRecipe = recipe.isFavorite;

  const { title, description, time, thumb, ingredients, instructions, _id } =
    recipe.result[0] || {};

  return (
    <div>
      {!recipe ? (
        <></>
      ) : (
        <>
          <RecipePageHero
            title={title}
            description={description}
            time={time}
            _id={_id}
            isFavoriteRecipe={isFavoriteRecipe}
          />
          <RecipeIngredientsList
            requiredIngredients={ingredients}
            recipeId={_id}
          />
          <RecipePreparation
            thumb={thumb}
            instructions={instructions}
            title={title}
          />
        </>
      )}
    </div>
  );
}
