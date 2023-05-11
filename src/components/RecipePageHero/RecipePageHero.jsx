import MainPageTitle from 'components/MainPageTitle/MainPageTitle';
import { ReactComponent as Clock } from '../../images/svg/clock.svg';
import { Descr } from './RecipePageHero.module';

export default function RecipePageHero() {
  return (
    <div>
      <MainPageTitle />
      <Descr>Dish description</Descr>
      <button type="button">Add to favorite recipes</button>
      <div>
        <Clock width="14px" height="14px" style={{ fill: 'transparent' }} />
        <span>Time in minutes</span>
      </div>
    </div>
  );
}
