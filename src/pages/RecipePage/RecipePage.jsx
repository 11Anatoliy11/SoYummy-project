import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import RecipeIngredientsList from 'components/RecipeIngredientsList/RecipeIngredientsList';
import RecipePageHero from 'components/RecipePageHero/RecipePageHero';
import RecipePreparation from 'components/RecipePreparation/RecipePreparation';

import recipesData from '../../mocks/recipes.json';

export default function RecipePage() {
  // const [counter, setCounter] = useState(0);

  const { recipeId } = useParams();

  const recipe = recipesData.filter(recipe => recipe._id.$oid === recipeId);

  console.log(`🚀 ~ RecipePage ~ recipe:`, recipe);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCounter(prevCounter => (prevCounter + 1) % recipesData.length);
  //   }, 2000);

  //   return () => clearInterval(interval);
  // }, []);

  // useEffect(() => {
  //   setRecipe(recipesData[counter]);
  // }, [counter]);

  const { title, description, time, thumb, ingredients, instructions, _id } =
    recipe[0];

  return (
    <div>
      <RecipePageHero
        title={title}
        description={description}
        time={time}
        thumb={thumb}
        _id={_id}
      />
      <RecipeIngredientsList requiredIngredients={ingredients} />
      <RecipePreparation
        thumb={thumb}
        instructions={instructions}
        title={title}
      />
    </div>
  );
}
