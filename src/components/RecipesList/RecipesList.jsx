import { Loader } from 'components/common';
import { RecipeItem } from '../RecipeItem/RecipeItem';
import { RecipesListContainer } from './RecipesList.styled'

export const RecipesList = ({
  data,
  cssClass,
  removeRecipe,
  isLoading,
  paginationPage,
}) => {
  return (
    <>
      <RecipesListContainer>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {data.map(itemProps => {
              return (
                <RecipeItem
                  paginationPage={paginationPage}
                  remove={removeRecipe}
                  key={itemProps._id.$oid}
                  id={itemProps._id.$oid}
                  img={itemProps.thumb}
                  title={itemProps.title}
                  description={itemProps.description}
                  time={itemProps.time}
                  cssClass={cssClass}
                ></RecipeItem>
              );
            })}
          </>
        )}
      </RecipesListContainer>
    </>
  );
};
