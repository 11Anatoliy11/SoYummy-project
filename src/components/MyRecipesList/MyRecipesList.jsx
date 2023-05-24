import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RecipeItem, Paginator, Loader } from 'components/Common';
import { getIsLoading, getOwnRecipes, getOwnRecipesCount } from 'redux/ownRecipes/own-selectors';
import {
  deleteOwnRecipes,
  getAllOwnRecipes,
} from 'redux/ownRecipes/own-operation';
import { MyRecipesContainer } from './MyRecipesList.module';
import { scrollToTop } from '../utils/scrollToTop';

export const MyRecipesList = () => {
  const dispatch = useDispatch();
  const myRecipes = useSelector(getOwnRecipes);
  const isLoading = useSelector(getIsLoading);
  const total = useSelector(getOwnRecipesCount);
  const [paginationPage, setPaginationPage] = useState(1);
  const [per_page] = useState(10);

  const pagesCount = Math.trunc(total / per_page);

  useEffect(() => {
    dispatch(getAllOwnRecipes(paginationPage, per_page));
  }, [dispatch, paginationPage, per_page]);

  const handleDelete = id => {
    dispatch(deleteOwnRecipes(id));
  };

  const handlePaginationClick = event => {
    scrollToTop();
    setPaginationPage(event);
  };

  return (
    <>
      <MyRecipesContainer id="MyRecipesContainer">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {myRecipes?.map(
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
                    key={_id}
                    id={_id}
                    img={thumb}
                    title={title}
                    description={description}
                    time={time}
                    instructions={instructions}
                    ingredients={ingredients}
                    deleteRecipe={handleDelete}
                  />
                );
              }
            )}
            <Paginator parendContainerId="MyRecipesContainer"
              currentPage={paginationPage}
              pagesCount={pagesCount}
              onPaginate={handlePaginationClick} />
          </>
        )}
      </MyRecipesContainer >
    </>
  );
}