import { useParams } from 'react-router-dom';
import recipes from 'data/recipes.json';
import { RecipeCard } from 'components/Common';
import { OneCategoryList } from './Category.styled';
import { motion } from 'framer-motion';

export const Category = () => {
  const { categoryName } = useParams();

  const categoryRecipes = recipes.filter(
    recipe => recipe.category.toLowerCase() === categoryName.toLowerCase()
  );

  const categorySlice = categoryRecipes.slice(0, 8);

  return (
    <OneCategoryList>
      {categorySlice.map(({ _id, title, thumb }) => (
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
          <RecipeCard id={_id.$oid} title={title} thumb={thumb} />
        </motion.div>
      ))}
    </OneCategoryList>
  );
};
