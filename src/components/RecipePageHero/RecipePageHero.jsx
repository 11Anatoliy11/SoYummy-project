import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import {
  addToFavorite,
  deleteFavorite,
  getAllFavorite,
  unmarkAsFavorite,
} from 'redux/recipes/recipe-operation';

import MainPageTitle from 'components/MainPageTitle/MainPageTitle';
import Button from 'components/Button/Button';

import {
  ClockIcon,
  Descr,
  Time,
  TimeWrap,
  Wrapper,
} from './RecipePageHero.styled';

export default function RecipePageHero({
  description,
  title,
  time,
  _id,
  isFavoriteRecipe,
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (_id) {
      dispatch(getAllFavorite());
    }
  }, [dispatch, _id]);

  const toggleFavorite = () => {
    if (isFavoriteRecipe) {
      dispatch(unmarkAsFavorite(_id));
      return dispatch(deleteFavorite(_id));
    } else {
      dispatch(addToFavorite(_id));
    }
  };

  return (
    <Wrapper>
      <MainPageTitle title={title} />
      <Descr>{description}</Descr>
      <Button type="button" onClick={toggleFavorite}>
        {isFavoriteRecipe
          ? 'Remove from favorite'
          : 'Add to favorite recipes'}
      </Button>
      <TimeWrap>
        <ClockIcon />
        <Time>{time} min</Time>
      </TimeWrap>
    </Wrapper>
  );
}
