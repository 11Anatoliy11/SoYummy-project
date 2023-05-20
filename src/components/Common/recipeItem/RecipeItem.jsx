import Button from '../../Button/Button';

import { useNavigate } from 'react-router-dom';

import {
  RecipeItemBtn,
  RecipeItemContainer,
  RecipeItemBox,
  RecipeItemTitle,
  RecipeItemText,
} from './RecipeItem.styled';
import { ReactComponent as Trash } from 'images/svg/trash.svg';

export const RecipeItem = ({
  img,
  id,
  title,
  description,
  time,
  deleteRecipe,
}) => {
  console.log(`🚀 ~ time:`, time);
  const navigate = useNavigate();

  return (
    <>
      <RecipeItemContainer>
        <img src={img} loading="lazy" alt={img} />
        <RecipeItemBox>
          <RecipeItemText>
            <RecipeItemTitle>
              <h2>{title}</h2>
              <Button onClick={() => deleteRecipe(id)}>
                <Trash />
              </Button>
            </RecipeItemTitle>
            <p>{description}</p>
          </RecipeItemText>

          <RecipeItemBtn>
            <p>
              {time} min
              {/* {time.includes('min') ? '' : 'min'} */}
            </p>
            <Button
              onClick={() => {
                navigate(`/recipe/${id}`);
              }}
            >
              See recipe
            </Button>
          </RecipeItemBtn>
        </RecipeItemBox>
      </RecipeItemContainer>
    </>
  );
};
