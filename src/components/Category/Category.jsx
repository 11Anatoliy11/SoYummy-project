import { useParams } from 'react-router-dom';
import recipes from 'data/recipes.json';
import { Link } from 'react-router-dom';

export const Category = () => {
  const { categoryName } = useParams();

  const categoryRecipes = recipes.filter(
    recipe => recipe.category.toLowerCase() === categoryName.toLowerCase()
  );

  console.log(categoryRecipes);

  const categorySlice = categoryRecipes.slice(0, 8)

  console.log(categorySlice)

  return (
    <ul>
      {categorySlice.map(recipe => (
        <li key={recipe._id.$oid}>
          <Link to={`/recipe/${recipe._id.$oid}`}>
            <img src={recipe.preview} alt={recipe.title}  style={{width: '100%'}}/>
            <h3>{recipe.title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
};
