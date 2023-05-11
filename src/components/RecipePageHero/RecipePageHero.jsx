import MainPageTitle from 'components/MainPageTitle/MainPageTitle';
import { ReactComponent as Clock } from '../../images/svg/clock.svg';
import { Descr, Time, TimeWrap, Wrapper } from './RecipePageHero.module';
import Button from 'components/Button/Button';

export default function RecipePageHero() {
  return (
    <Wrapper>
      <MainPageTitle />
      <Descr>
        Is a healthy salad recipe that’s big on nutrients and flavor. A moist,
        pan seared salmon is layered on top of spinach, avocado, tomatoes, and
        red onions. Then drizzled with a homemade lemon vinaigrette.
      </Descr>
      <Button
        type="button"
        width="150px"
        height="35px"
        border="1px solid var(--green-color)"
        borderRadius="24px 44px"
        text="Add to favorite recipes"
      />
      <TimeWrap>
        <Clock width="14px" height="14px" style={{ fill: 'transparent' }} />
        <Time>20 min</Time>
      </TimeWrap>
    </Wrapper>
  );
}
