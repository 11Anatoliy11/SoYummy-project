import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RecipesList } from 'components/RecipesList/RecipesList';
import { getFavoriteRecipes } from 'redux/favoriteRecipes/favoriteRecipesOperations';
import { removeFromFavorite } from 'redux/favoriteRecipes/favoriteRecipesOperations';
import {
  selectFavRecipes,
  selectFavError,
  selectFavIsLoading,
  selectFavRecipesCount
} from 'redux/favoriteRecipes/favoriteRecipesSelectors';
import { toast } from 'react-toastify';
import placeholder from '../../images/placeholder.webp';
import { scrollToTop } from '../utils/scrollToTop';
import 'react-responsive-pagination/themes/minimal.css';
import { FavoriteRecipesContainer } from './FavoriteRecipes.styled';

import { Paginator } from 'components/common'

export const FavoriteRecipes = () => {
  const [paginationPage, setPaginationPage] = useState(1);
  const [per_page] = useState(10);

  const data = useSelector(selectFavRecipes);
  const total = useSelector(selectFavRecipesCount);
  const pagesCount = Math.trunc(total / per_page);
  const error = useSelector(selectFavError);
  const isLoading = useSelector(selectFavIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavoriteRecipes({ page: paginationPage, pageSize: per_page }));
  }, [dispatch, paginationPage, per_page]);

  const handlePaginationClick = event => {
    scrollToTop();
    setPaginationPage(event);
  };

  return (
    <FavoriteRecipesContainer id="favoriteRecipesContainer">
      {error &&
        toast.error('Something went wrong, please try again later', {
          autoClose: 3000,
        })}

      {data?.length > 0 ? (
        <>
          <RecipesList
            paginationPage={paginationPage}
            removeRecipe={removeFromFavorite}
            data={data}
            isLoading={isLoading}
          />
          {total > 0 && (
            <Paginator
              parendContainerId="favoriteRecipesContainer"
              currentPage={paginationPage}
              pagesCout={pagesCount}
              onPaginate={handlePaginationClick}>
            </Paginator>
          )}
        </>
      ) : (
        <div >
          <img
            src={placeholder}
            alt="error"

          />
          <p>
            We are sorry,
          </p>
          <p >
            You don't have any added recipes ...
          </p>
        </div>
      )}
    </FavoriteRecipesContainer>
  );
};
