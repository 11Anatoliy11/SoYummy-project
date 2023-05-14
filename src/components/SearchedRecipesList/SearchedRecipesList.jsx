import { Loader } from 'components/common';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { selectSearchedRecipes } from 'redux/search/selectors';
import { selectIsLoading } from 'redux/search/selectors';
import { selectError } from 'redux/search/selectors';
import { RecipeCard } from 'components/RecipeCard/RecipeCard';

import placeholder from 'images/placeholder.webp';

import { motion } from 'framer-motion';

export const SearchedRecipesList = () => {
  const recipes = useSelector(selectSearchedRecipes);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <>
      {error &&
        toast.error('Something went wrong, please try again later', {
          autoClose: 3000,
        })}
      {isLoading && !error && <Loader />}
      {recipes.length === 0 ? (
        <div >
          <img src={placeholder} loading="lazy" alt="vegetables assortment" />
          <p>
            Try looking for something else..
          </p>
        </div>
      ) : (
        <div>
          {recipes.map(({ _id, title, description, thumb, time }) => {
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
                  text={description}
                  thumb={thumb}
                  time={time}
                />
              </motion.div>
            );
          })}
        </div>
      )}
    </>
  );
};
