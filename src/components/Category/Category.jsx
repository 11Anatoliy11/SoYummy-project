import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RecipeCard } from 'components/Common';
import { OneCategoryList } from './Category.styled';
import { motion } from 'framer-motion';
import { recipeByCategory } from 'redux/recipes/recipe-operation';
import { getRecipeByCategory, getIsLoading, getRecipeByCategoryCount } from 'redux/recipes/recipe-select';
import { Paginator, Loader } from 'components/Common';
import { scrollToTop } from '../utils/scrollToTop';
import placeholder from '../../images/placeholder.png';
import { SearchedRecipesListError } from '../Search/SearchedRecipesList/SearchedRecipesList.styled';

export const Category = () => {
  const dispatch = useDispatch();

  const { categoryName } = useParams();
  const [paginationPage, setPaginationPage] = useState(1);
  const [per_page] = useState(10);

  const isLoading = useSelector(getIsLoading);
  const total = useSelector(getRecipeByCategoryCount);
  const pagesCount = Math.trunc(total / per_page);
  const recipes = useSelector(getRecipeByCategory);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const handlePaginationClick = event => {
    scrollToTop();
    setPaginationPage(event);
  };

  useEffect(() => {
    const capitaliseName = capitalizeFirstLetter(categoryName);
    dispatch(recipeByCategory({ category: capitaliseName }));
  }, [categoryName, dispatch]);

  return (
    <OneCategoryList id="oneCategoryListContainer">
      {isLoading ? (
        <Loader />
      ) : (
        !!recipes ?
          <>
            {
              recipes.map(({ _id, title, thumb }) => (
                <motion.div
                  initial={{
                    y: -20,
                    opacity: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                  }}
                  key={_id}
                >
                  <RecipeCard id={_id} title={title} thumb={thumb} />
                </motion.div>
              ))
            }
            <Paginator parendContainerId="oneCategoryListContainer"
              currentPage={paginationPage}
              pagesCount={pagesCount}
              onPaginate={handlePaginationClick} />
          </> :
          <SearchedRecipesListError >
            <img src={placeholder} loading="lazy" alt="vegetables assortment" />
            <p>
              We are sorry,<br />
              You don't have any added recipes ...
            </p>
          </SearchedRecipesListError>
      )
      }
    </OneCategoryList>
  );
};
