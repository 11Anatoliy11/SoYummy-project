import MainPageTitle from 'components/MainPageTitle/MainPageTitle';
import { ReactComponent as Clock } from '../../images/svg/clock.svg';
import { Descr, Time, TimeWrap, Wrapper } from './RecipePageHero.module';
import Button from 'components/Button/Button';

import background from '../../images/m-vegetables.png';

export default function RecipePageHero({ description, title, time }) {
  return (
    <Wrapper
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <MainPageTitle title={title} />
      <Descr>{description}</Descr>
      <Button
        type="button"
        width="150px"
        height="35px"
        border="1px solid var(--green-color)"
        borderRadius="24px 44px"
        text="Add to favorite recipes"
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
