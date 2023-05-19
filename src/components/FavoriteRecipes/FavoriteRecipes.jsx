import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RecipesList } from 'components/RecipesList/RecipesList';
import placeholder from '../../images/placeholder.png';
import { scrollToTop } from '../utils/scrollToTop';
import 'react-responsive-pagination/themes/minimal.css';
import { FavoriteRecipesContainer } from './FavoriteRecipes.styled';

import { Paginator } from 'components/Common';
import { recipeSelector } from 'redux/recipes/recipe-select';
import { deleteFavorite, getAllFavorite } from 'redux/recipes/recipe-operation';

export const FavoriteRecipes = () => {
  const dispatch = useDispatch();
  const [paginationPage, setPaginationPage] = useState(1);
  const [per_page] = useState(10);

  const favRecipes = useSelector(recipeSelector.getRecipeById);
  const total = favRecipes.data.length;

  const pagesCount = Math.trunc(total / per_page);
  const isLoading = useSelector(recipeSelector.getIsLoading);

  useEffect(() => {
    dispatch(getAllFavorite({ page: paginationPage, pageSize: per_page }));
  }, [dispatch, paginationPage, per_page]);

  const handlePaginationClick = event => {
    scrollToTop();
    setPaginationPage(event);
  };

  return (
    <FavoriteRecipesContainer id="favoriteRecipesContainer">
      {favRecipes.data?.length > 0 ? (
        <>
          <RecipesList
            paginationPage={paginationPage}
            // removeRecipe={deleteFavorite}
            data={favRecipes.data}
            isLoading={isLoading}
          />
          <Paginator
            parendContainerId="favoriteRecipesContainer"
            currentPage={paginationPage}
            pagesCout={pagesCount}
            onPaginate={handlePaginationClick}
          ></Paginator>
        </>
      ) : (
        <div>
          <img src={placeholder} alt="error" />
          <p>We are sorry,</p>
          <p>You don't have any added recipes ...</p>
        </div>
      )}
    </FavoriteRecipesContainer>
  );
};
