import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectFavRecipes } from 'redux/favoriteRecipes/favoriteRecipesSelectors';

import MainPageTitle from 'components/MainPageTitle/MainPageTitle';
import Button from 'components/Button/Button';

import {
  ClockIcon,
  Descr,
  Time,
  TimeWrap,
  Wrapper,
} from './RecipePageHero.styled';
import {
  addFavoriteRecipes,
  removeFromFavorite,
} from 'redux/favoriteRecipes/favoriteRecipesOperations';

export default function RecipePageHero({ description, title, time, _id }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const favRecipes = useSelector(selectFavRecipes);

  const dispatch = useDispatch();

  useEffect(() => {
    const isRecipeFavorite = favRecipes.some(recipe => recipe.title === title);
    setIsFavorite(isRecipeFavorite);
  }, [favRecipes, title]);

  const toggleFavorite = () => {
    // const recipe = { title, description, time, thumb, _id };
    // console.log(`🚀 ~ toggleFavorite ~ recipe:`, recipe);

    if (isFavorite) {
      return dispatch(removeFromFavorite(_id));
    } else {
      dispatch(addFavoriteRecipes(_id));
    }
  };

  return (
    <Wrapper>
      <MainPageTitle title={title} />
      <Descr>{description}</Descr>
      <Button type="button" onClick={toggleFavorite}>
        {isFavorite
          ? 'Remove from favorite recipes'
          : 'Add to favorite recipes'}
      </Button>
      <TimeWrap>
        <ClockIcon />
        <Time>{time} min</Time>
      </TimeWrap>
    </Wrapper>
  );
}
