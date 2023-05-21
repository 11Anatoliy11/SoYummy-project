import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RecipeIngredientsList from 'components/RecipeIngredientsList/RecipeIngredientsList';
import RecipePageHero from 'components/RecipePageHero/RecipePageHero';
import RecipePreparation from 'components/RecipePreparation/RecipePreparation';

import { recipeSelector } from 'redux/recipes/recipe-select';
import { recipeById } from 'redux/recipes/recipe-operation';

// import recipesData from '../../mocks/recipes.json';

export default function RecipePage() {
  const { recipeId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(recipeById(recipeId));
  }, [dispatch, recipeId]);

  const recipe = useSelector(recipeSelector.getRecipeById);
  console.log(`🚀 ~ RecipePage ~ recipe:`, recipe);

  // const recipe = recipesData.filter(recipe => recipe._id.$oid === recipeId);

  const { title, description, time, thumb, ingredients, instructions, _id } =
    recipe || {};

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
          />
          <RecipeIngredientsList requiredIngredients={ingredients} />
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
