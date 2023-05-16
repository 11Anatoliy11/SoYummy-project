import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectFavRecipes } from 'redux/favoriteRecipes/favoriteRecipesSelectors';

import MainPageTitle from 'components/MainPageTitle/MainPageTitle';
import Button from 'components/Button/Button';

import { ReactComponent as Clock } from '../../images/svg/clock.svg';
import { Descr, Time, TimeWrap, Wrapper } from './RecipePageHero.module';
import {
  addFavoriteRecipes,
  removeFromFavorite,
} from 'redux/favoriteRecipes/favoriteRecipesOperations';

export default function RecipePageHero({
  description,
  title,
  time,
  thumb,
  _id,
}) {
  const [isFavorite, setIsFavorite] = useState(false);
  const favRecipes = useSelector(selectFavRecipes);
  console.log(`🚀 ~ RecipePageHero ~ favRecipes:`, favRecipes);

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
      <Button
        type="button"
        width="150px"
        height="35px"
        border="1px solid var(--green-color)"
        borderRadius="24px 44px"
        text={
          isFavorite
            ? 'Remove from favorite recipes'
            : 'Add to favorite recipes'
        }
        onClick={toggleFavorite}
      >
        Add to favorite recipes
      </Button>
      <TimeWrap>
        <Clock width="14px" height="14px" style={{ fill: 'transparent' }} />
        <Time>{time} min</Time>
      </TimeWrap>
    </Wrapper>
  );
}
