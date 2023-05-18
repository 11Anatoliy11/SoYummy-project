import { Title, About } from './HeroPageTitle.styled';
import { Accent } from 'components/ChooseYourBreakfast/ChooseYourBreakfast.styled';

export const HeroPageTitle=() => {
  return (
    <div>
      <Title><Accent>So</Accent>Yummy</Title>
      <About>"What to cook?" is not only a recipe app, it is, in fact, your cookbook. You can add your own recipes to save them for the future. </About>

    </div>
  );
}
