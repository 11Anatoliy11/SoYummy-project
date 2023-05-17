import { Link } from 'react-router-dom';
import { RecipeCardContainer, RecipeCardTitle } from './RecipeCard.styled';
import noImage from 'images/no-image-picture.png';

export const RecipeCard = ({ id, title, thumb }) => {
  return (
    <Link to={`/recipe/${id}`}>
      <RecipeCardContainer>
        {thumb ? (
          <img src={thumb} alt={title} height={323} width={300} />
        ) : (
          <img src={noImage} alt={title} height={323} width={300} />
        )}
        <RecipeCardTitle>
          <p title={title}>{title}</p>
        </RecipeCardTitle>
      </RecipeCardContainer>
    </Link>
  );
};

export default RecipeCard;
