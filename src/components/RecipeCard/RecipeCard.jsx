import { Link } from 'react-router-dom';
import { RecipeCardConteiner, RecipeCardTitle } from './RecipeCard.stiled'

export const RecipeCard = ({ id, title, thumb }) => {
  return (
    <Link to={`/recipes/${id}`}>
      <RecipeCardConteiner >
        <img
          src={thumb}
          alt={title}
          height={323}
          width={300}
        />
        <RecipeCardTitle >
          <p
            title={title}
          >
            {title}
          </p>
        </RecipeCardTitle>
      </RecipeCardConteiner>
    </Link>
  );
};

export default RecipeCard;
