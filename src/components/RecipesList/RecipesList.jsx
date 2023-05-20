import { Loader } from 'components/Common';
import { RecipeItem } from '../Common';
import { RecipesListContainer } from './RecipesList.styled';

export const RecipesList = ({
  data,
  cssClass,
  deleteRecipe,
  isLoading,
  paginationPage,
}) => {
  console.log(`🚀 ~ data:`, data);
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
                  deleteRecipe={deleteRecipe}
                  key={itemProps._id}
                  id={itemProps._id}
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
