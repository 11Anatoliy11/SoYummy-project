import Button from '../Button/Button';
import React from 'react';
//import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
//import { getFavoriteRecipes } from 'redux/favoriteRecipes/favoriteRecipesOperations';
import { RecipeItemBtn, RecipeItemContainer, RecipeItemBox, RecipeItemTitle, RecipeItemText } from './RecipeItem.styled';
import { ReactComponent as Trash } from 'images/svg/trash.svg';

export const RecipeItem = ({
  img,
  id,
  title,
  description,
  time,
  // remove,
  // paginationPage,
}) => {
  //const dispatch = useDispatch();
  const navigate = useNavigate();
  // const deleteHandler = async () => {
  //   await dispatch(remove(id));
  //   await dispatch(getFavoriteRecipes(paginationPage));
  // };
  return (
    <>
      <RecipeItemContainer>
        <img
          src={img}
          loading="lazy"
          alt={img}
        />
        <RecipeItemBox>
          <RecipeItemText>
            <RecipeItemTitle>
              <h2>
                {title}
              </h2>
              <Button
                width="24px"
                height="24px"
                borderRadius="4px"
                backgroundColor="var(--green-color)"
                text={<Trash />}>
                onClick={() => {
                  navigate(`/recipes/${id}`);
                }}
              </Button>
            </RecipeItemTitle>
            <p>
              {description}
            </p>
          </RecipeItemText>

          <RecipeItemBtn>
            <p>
              {time} {time.includes('min') ? '' : 'min'}
            </p>
            <Button
              text="See recipe"
              width="87px"
              height="27px"
              borderRadius="24px 44px"
              backgroundColor="var(--search-black-color)"
              textColor="#FAFAFA"
              onClick={() => {
                navigate(`/recipes/${id}`);
              }}
            />
          </RecipeItemBtn>
        </RecipeItemBox>
      </RecipeItemContainer>
    </>
  );
};
