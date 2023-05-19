import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { recipeSelector } from 'redux/recipes/recipe-select';
import { addToFavorite, deleteFavorite } from 'redux/recipes/recipe-operation';

import MainPageTitle from 'components/MainPageTitle/MainPageTitle';
import Button from 'components/Button/Button';

import {
  ClockIcon,
  Descr,
  Time,
  TimeWrap,
  Wrapper,
} from './RecipePageHero.styled';

export default function RecipePageHero({ description, title, time, _id }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const favRecipes = useSelector(recipeSelector.getFavoriteRecipes);

  const dispatch = useDispatch();

  useEffect(() => {
    if (favRecipes.length === 0) {
      return;
    }

    const isRecipeFavorite = favRecipes.data.favorites.some(
      id => id === _id.$oid
    );
    setIsFavorite(isRecipeFavorite);
  }, [_id, favRecipes]);

  const toggleFavorite = () => {
    if (isFavorite) {
      return dispatch(deleteFavorite(_id.$oid));
    } else {
      dispatch(addToFavorite(_id.$oid));
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
