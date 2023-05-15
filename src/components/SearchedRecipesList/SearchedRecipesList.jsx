import { Loader } from 'components/common';
import { useSelector } from 'react-redux';
import { selectSearchedRecipes } from 'redux/search/selectors';
import { selectIsLoading } from 'redux/search/selectors';
import { RecipeCard } from 'components/RecipeCard/RecipeCard';
import { SearchedRecipesListError, SearchedRecipesListContainer } from './SearchedRecipesList.styled'

import placeholder from 'images/placeholder.png';

import { motion } from 'framer-motion';

export const SearchedRecipesList = () => {
  const recipes = useSelector(selectSearchedRecipes);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {isLoading && <Loader />}
      {recipes.length === 0 ? (
        <SearchedRecipesListError >
          <img src={placeholder} loading="lazy" alt="vegetables assortment" />
          <p>
            Try looking for something else..
          </p>
        </SearchedRecipesListError>
      ) : (
        <SearchedRecipesListContainer>
          {recipes.map(({ _id, title, thumb }) => {
            return (
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
                key={_id.$oid}
              >
                <RecipeCard
                  id={_id.$oid}
                  title={title}
                  thumb={thumb}
                />
              </motion.div>
            );
          })}
        </SearchedRecipesListContainer>
      )}
    </>
  );
};
