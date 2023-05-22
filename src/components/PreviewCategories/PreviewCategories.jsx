import{ useDispatch, useSelector} from 'react-redux';
import { useState, useEffect } from 'react';

import {RecipeCard} from 'components/Common/recipeCard/RecipeCard';
import{recipeSelector} from 'redux/recipes/recipe-select'
import{recipeMainPage} from 'redux/recipes/recipe-operation'

// import { useLocation, useParams } from "react-router-dom";


import {Wrapper, MainList, CategoryWrapper, CategoryList, CategoryTitle, Button } from "./PreviewCategories.styled";

export const PreviewCategories = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(recipeMainPage());
  }, [dispatch]);

const recipes = useSelector(recipeSelector.getRecipeMainPage);

// const categories = recipes.reduce((acc, item) => {
//   if (item._id === 'Breakfast') {
//     acc[0] = item;
//   } else if (item._id === 'Miscellaneous') {
//     acc[1] = item;
//   } else if (item._id === 'Chicken') {
//     acc[2] = item;
//   } else if (item._id === 'Desserts') {
//     acc[3] = item;
//   }
//   return acc;
// }, []);


console.log(recipes);
return (
  <Wrapper>
    {recipes && (
      <MainList>
        {recipes.map(({ _id, documents }) => {
          return (
            <CategoryWrapper>
              <CategoryTitle>{_id}</CategoryTitle>
              <CategoryList key={_id}>
              {documents.map(({ _id, thumb, title }) => {
                return (
                  <RecipeCard
                    key={_id}
                    thumb={thumb}
                    title={title}
                    id={_id}
                  />
                );
              })}
                </CategoryList>
              <Button to={`/categories/${_id}`}>See all</Button>
              </CategoryWrapper>
          );
        })}
      </MainList>
    )}
  </Wrapper>
);
};
