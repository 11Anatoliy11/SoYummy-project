import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RecipesList } from 'components/RecipesList/RecipesList';
import placeholder from '../../images/placeholder.png';
import { scrollToTop } from '../utils/scrollToTop';
import 'react-responsive-pagination/themes/minimal.css';
import { FavoriteRecipesContainer } from './FavoriteRecipes.styled';

import { Paginator } from 'components/Common';
import { getFavoriteRecipes, getIsLoading, getFavoriteRecipesCount } from 'redux/recipes/recipe-select';
import { deleteFavorite, getAllFavorite } from 'redux/recipes/recipe-operation';
import { SearchedRecipesListError } from '../Search/SearchedRecipesList/SearchedRecipesList.styled'

export const FavoriteRecipes = () => {
  const dispatch = useDispatch();
  const [paginationPage, setPaginationPage] = useState(1);
  const [per_page] = useState(10);

  const favRecipes = useSelector(getFavoriteRecipes);
  const total = useSelector(getFavoriteRecipesCount);

  const pagesCount = Math.trunc(total / per_page);
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(getAllFavorite({ page: paginationPage, pageSize: per_page }));
  }, [dispatch, paginationPage, per_page]);

  const handlePaginationClick = event => {
    scrollToTop();
    setPaginationPage(event);
  };

  const handleDelete = id => {
    dispatch(deleteFavorite(id));
    dispatch(getAllFavorite({ page: paginationPage, pageSize: per_page }));
  };

  return (
    <FavoriteRecipesContainer id="favoriteRecipesContainer">
      {favRecipes?.length > 0 ? (
        <>
          <RecipesList
            paginationPage={paginationPage}
            data={favRecipes}
            isLoading={isLoading}
            deleteRecipe={handleDelete}
          />
          <Paginator parendContainerId="SearchPageContainer"
            currentPage={paginationPage}
            pagesCount={pagesCount}
            onPaginate={handlePaginationClick} />
        </>
      ) : (
        <SearchedRecipesListError >
          <img src={placeholder} loading="lazy" alt="vegetables assortment" />
          <p>
            We are sorry,<br />
            You don't have any added recipes ...
          </p>
        </SearchedRecipesListError>
      )}
    </FavoriteRecipesContainer>
  );
};
