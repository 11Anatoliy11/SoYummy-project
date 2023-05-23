import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RecipeItem } from 'components/Common';

import { ownRecipesSelector } from 'redux/ownRecipes/own-selectors';
import { getAllOwnRecipes } from 'redux/ownRecipes/own-operation';

import { MyRecipesContainer } from './MyRecipesList.module';

export default function MyRecipesList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOwnRecipes());
  }, [dispatch]);

  const myRecipes = useSelector(ownRecipesSelector.getOwnRecipes);
  console.log(`🚀 ~ MyRecipesList ~ myRecipes:`, myRecipes.data);

  return (
    <>
      <MyRecipesContainer>
        {myRecipes.data.map(
          ({
            _id,
            title,
            description,
            thumb,
            instructions,
            ingredients,
            time,
          }) => {
            return (
              <RecipeItem
                //   remove={removeRecipe}
                key={_id}
                id={_id}
                img={thumb}
                title={title}
                description={description}
                time={time}
                instructions={instructions}
                ingredients={ingredients}
              />
            );
          }
        )}
      </MyRecipesContainer>
    </>
  );
}
