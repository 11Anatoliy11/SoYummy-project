import RecipeIngredientsList from 'components/RecipeIngredientsList/RecipeIngredientsList';
import RecipePageHero from 'components/RecipePageHero/RecipePageHero';
import RecipePreparation from 'components/RecipePreparation/RecipePreparation';

export default function RecipePage() {
  return (
    <div>
      <RecipePageHero />
      <RecipeIngredientsList />
      <RecipePreparation />
    </div>
  );
}
