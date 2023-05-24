import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { nanoid } from 'nanoid';

import { RecipeCard } from 'components/Common/recipeCard/RecipeCard';
import { getRecipeMainPage } from 'redux/recipes/recipe-select';
import { recipeMainPage, clearRecipeMainPageState } from 'redux/recipes/recipe-operation';
import { useIsMobileScreen } from 'hooks/useIsMobileScreen';
import { useIsSmallScreen } from 'hooks/useIsSmallScreen';
import { scrollToTop } from '../utils/scrollToTop';

import {
  Wrapper,
  MainList,
  CategoryWrapper,
  CategoryList,
  CategoryTitle,
  Button,
  OtherCategoryBtn,
} from './PreviewCategories.styled';

export const PreviewCategories = () => {
  const isMobile = useIsMobileScreen();
  const isTablet = useIsSmallScreen();
  const recipes = useSelector(getRecipeMainPage);
  const dispatch = useDispatch();

  const recipesByMediaHandle = recipes => {
    if (isMobile) {
      return recipes.slice(0, 1);
    }
    if (isTablet) {
      return recipes.slice(0, 2);
    }
    return recipes;
  };

  const onButtonClick = () => {
    scrollToTop();
    dispatch(clearRecipeMainPageState());
  }

  useEffect(() => {
    dispatch(recipeMainPage());
  }, [dispatch]);

  return (
    <Wrapper>
      {recipes.length > 0 && (
        <MainList key={nanoid()}>
          {recipes?.map(({ category, documents }) => {
            return (
              <CategoryWrapper key={category}>
                <CategoryTitle>{category}</CategoryTitle>
                <CategoryList>
                  {recipesByMediaHandle(documents)?.map(
                    ({ _id, thumb, title }) => {
                      return (
                        <RecipeCard
                          key={_id}
                          thumb={thumb}
                          title={title}
                          id={_id}
                        />
                      );
                    }
                  )}
                </CategoryList>
                <Button to={`/categories/${category}`}
                  onClick={onButtonClick}>
                  See all
                </Button>
              </CategoryWrapper>
            );
          })}
        </MainList>
      )}
      <OtherCategoryBtn to="/categories/Beef" onClick={onButtonClick}>
        Other categories
      </OtherCategoryBtn>
    </Wrapper>
  );
};
