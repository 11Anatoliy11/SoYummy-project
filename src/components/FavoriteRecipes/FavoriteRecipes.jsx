import { useEffect } from 'react';
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
import { RecipesListPaginator } from 'components/RecipesListPaginator/RecipesListPaginator';
import { useState } from 'react';
import { toast } from 'react-toastify';
import placeholder from '../../images/placeholder.webp';
import { scrollToTop } from '../utils/scrollToTop';


export const FavoriteRecipes = () => {
  //улюблені рецепти
  const [paginationPage, setPaginationPage] = useState(1);
  const [per_page] = useState(10);

  const data = useSelector(selectFavRecipes);
  const total = useSelector(selectFavRecipesCount);
  const error = useSelector(selectFavError);
  const isLoading = useSelector(selectFavIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavoriteRecipes({ page: paginationPage, pageSize: per_page }));
  }, [dispatch, paginationPage, per_page]);

  const pageIncrement = () => {
    setPaginationPage(prev => prev + 1);
  };
  const pageDecrement = () => {
    setPaginationPage(prev => prev - 1);
  };

  const handlePaginationClick = event => {
    const buttonValue = Number(event.target.textContent);
    scrollToTop();
    setPaginationPage(buttonValue);
  };

  return (
    <>
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
            <RecipesListPaginator
              current_page={paginationPage}
              total={total}
              per_page={per_page}
              handlePaginationClick={handlePaginationClick}
              pageIncrement={pageIncrement}
              pageDecrement={pageDecrement}
            />
          )}
        </>
      ) : (
        <div
          className="flex flex-col items-center
         object-center text-center"
        >
          <img
            src={placeholder}
            alt="error"
            className="rounded mb-3.5 md:mb-8 pt-4 md:h-[327px] xl:h-[331px]"
          />
          <p className="text-[18px] md:text-customBase font-semibold mb-2 md:mb-3.5 dark:text-whiteText">
            We are sorry,
          </p>
          <p className="text-customXxs md:text-[18px] leading-[18px] mb-[100px] md:mb-[204px] w-48 md:w-full md:min-w-[430px] dark:text-[#FAFAFA80]">
            You don't have any added recipes ...
          </p>
        </div>
      )}
    </>
  );
};
