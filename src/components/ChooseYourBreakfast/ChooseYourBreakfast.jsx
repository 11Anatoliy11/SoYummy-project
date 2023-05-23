import { ReactComponent as Arrow } from 'images/svg/arrow-narrow-right.svg';
import { ReactComponent as GroupArrow } from 'images/svg/groupDashedArrow.svg';

import {
  Wrapper,
  TextWrapper,
  GoToRecipe,
  Accent,
} from './ChooseYourBreakfast.styled';

export const ChooseYourBreakfast = () => {
  return (
    <Wrapper>
      <TextWrapper>
        <Accent>Delicious and healthy</Accent> way to enjoy a variety of fresh
        ingredients in one satisfying meal
      </TextWrapper>
      <GoToRecipe to="/categories/Breakfast">
        See recipes <Arrow />
      </GoToRecipe>
      <GroupArrow className="arrow-pointer" />
    </Wrapper>
  );
};
