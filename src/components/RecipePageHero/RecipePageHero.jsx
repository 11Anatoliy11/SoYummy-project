import MainPageTitle from 'components/MainPageTitle/MainPageTitle';
import { ReactComponent as Clock } from '../../images/svg/clock.svg';

export default function RecipePageHero() {
  return (
    <div>
      <MainPageTitle />
      <p>Dish description</p>
      <button type="button">Add to favorite recipes</button>
      <div>
        <Clock width="14px" height="14px" style={{ fill: 'transparent' }} />
        <span>Time in minutes</span>
      </div>
    </div>
  );
}
