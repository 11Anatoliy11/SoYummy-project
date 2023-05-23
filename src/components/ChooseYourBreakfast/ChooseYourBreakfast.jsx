
import { Wrapper, TextWrapper, GoToRecipe, Accent, ArrowPointer } from './ChooseYourBreakfast.styled';

import { ReactComponent as Arrow } from 'images/svg/arrow-narrow-right.svg';
import groupArrow from 'images/groupArrow.png';

export const ChooseYourBreakfast = () => {
  return (
    <Wrapper>
      <TextWrapper>
        <Accent>Delicious and healthy</Accent> way to enjoy a variety
        of fresh ingredients in one satisfying meal
      </TextWrapper>
      <GoToRecipe to="/categories/Breakfast">
        See recipes <Arrow />
      </GoToRecipe>
      {/* <ArrowPointer>
      <img src={groupArrow} alt="arrow pointer"
          />
      </ArrowPointer> */}
    </Wrapper>
  );
};
