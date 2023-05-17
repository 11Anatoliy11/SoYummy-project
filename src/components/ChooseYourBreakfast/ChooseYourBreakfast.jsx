// import { TitleAccent } from 'components/Hero/Hero.styled';
import { Wrapper, TextWrapper, GoToRecipe, TitleAccent } from './ChooseYourBreakfast.styled';
// import { BsArrowRight } from 'react-icons/bs';
import { ReactComponent as Arrow } from 'images/svg/arrow-narrow-right.svg';

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
    </Wrapper>
  );
};
