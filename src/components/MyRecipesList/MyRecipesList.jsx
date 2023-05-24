// import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { scrollToTop } from 'components/utils/scrollToTop';

import { RecipeItem } from 'components/Common';

// import { getAllOwnRecipes } from 'redux/recipes/recipe-operation';
import recipesData from '../../mocks/recipes.json';
import { MyRecipesContainer } from './MyRecipesList.module';

export default function MyRecipesList() {
  // eslint-disable-next-line no-unused-vars
  const [recipes, setRecipes] = useState(recipesData);
  //   console.log(`🚀 ~ MyRecipesPage ~ recipe:`, recipes);
  //   const myRecipes = useSelector(getAllOwnRecipes);

  //   const { title, description, time, thumb, ingredients, instructions, _id } =
  //     recipes;

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <MyRecipesContainer>
        {recipes.map(itemProps => {
          return (
            <RecipeItem
              //   remove={removeRecipe}
              key={itemProps._id.$oid}
              id={itemProps._id.$oid}
              img={itemProps.thumb}
              title={itemProps.title}
              description={itemProps.description}
              time={itemProps.time}
            />
          );
        })}
      </MyRecipesContainer>
    </>
  );
}
