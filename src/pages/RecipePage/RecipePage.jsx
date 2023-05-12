import { useState } from 'react';

import RecipeIngredientsList from 'components/RecipeInngredientsList/RecipeIngredientsList';
import RecipePageHero from 'components/RecipePageHero/RecipePageHero';
import RecipePreparation from 'components/RecipePreparation/RecipePreparation';

import recipesData from '../../mocks/recipes.json';

export default function RecipePage() {
  const [recipe, setRecipe] = useState(recipesData[35]);
  console.log(`🚀 ~ RecipePage ~ recipe:`, recipe);

  const { title, description, time, thumb, ingredients, instructions } = recipe;

  return (
    <div>
      <RecipePageHero title={title} description={description} time={time} />
      <RecipeIngredientsList requiredIngredients={ingredients} />
      <RecipePreparation
        thumb={thumb}
        instructions={instructions}
        title={title}
      />
    </div>
  );
}
