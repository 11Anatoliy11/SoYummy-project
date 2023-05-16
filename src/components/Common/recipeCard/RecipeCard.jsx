import { Link } from 'react-router-dom';
import { RecipeCardContainer, RecipeCardTitle } from './RecipeCard.styled'

export const RecipeCard = ({ id, title, thumb }) => {
  return (
    <Link to={`/recipes/${id}`}>
      <RecipeCardContainer >
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
      </RecipeCardContainer>
    </Link>
  );
};

export default RecipeCard;
