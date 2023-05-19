import Button from '../../Button/Button';
import React from 'react';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

//import { getFavoriteRecipes } from 'redux/favoriteRecipes/favoriteRecipesOperations';
import {
  RecipeItemBtn,
  RecipeItemContainer,
  RecipeItemBox,
  RecipeItemTitle,
  RecipeItemText,
} from './RecipeItem.styled';
import { ReactComponent as Trash } from 'images/svg/trash.svg';
import { deleteFavorite } from 'redux/recipes/recipe-operation';

export const RecipeItem = ({
  img,
  id,
  title,
  description,
  time,
  // paginationPage,
}) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const deleteRecipe = () => {
    dispatch(deleteFavorite(id));
  };

  return (
    <>
      <RecipeItemContainer>
        <img src={img} loading="lazy" alt={img} />
        <RecipeItemBox>
          <RecipeItemText>
            <RecipeItemTitle>
              <h2>{title}</h2>
              <Button
                onClick={() => {
                  deleteRecipe();
                }}
              >
                <Trash />
              </Button>
            </RecipeItemTitle>
            <p>{description}</p>
          </RecipeItemText>

          <RecipeItemBtn>
            <p>
              {time} {time.includes('min') ? '' : 'min'}
            </p>
            <Button
              onClick={() => {
                navigate(`/recipe/${id}`);
              }}
            >
              {' '}
              See recipe{' '}
            </Button>
          </RecipeItemBtn>
        </RecipeItemBox>
      </RecipeItemContainer>
    </>
  );
};
