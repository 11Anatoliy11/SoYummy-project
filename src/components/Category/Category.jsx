import { useParams } from 'react-router-dom';
import recipes from 'data/recipes.json';
import { RecipeCard } from 'components/Common';
import { OneCategoryList } from './Category.styled';
import { motion } from 'framer-motion';
import { recipeByCategory } from 'redux/recipes/recipe-operation';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { recipeSelector } from 'redux/recipes/recipe-select';

export const Category = () => {
  const { categoryName } = useParams();

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const dispatch = useDispatch();
  const recipes = useSelector(recipeSelector.getRecipeByCategory);

  useEffect(() => {
    const capitaliseName = capitalizeFirstLetter(categoryName);
    dispatch(recipeByCategory(capitaliseName));
  }, [categoryName, dispatch]);

  return (
    <OneCategoryList>
      {recipes.data.map(({ _id, title, thumb }) => (
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
      ))}
    </OneCategoryList>
  );
};
