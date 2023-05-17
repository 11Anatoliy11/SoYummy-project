import { TitleContainer, Title } from './PageTitleSection.styled';
import { ReactComponent as Rectangle } from 'images/svg/rectangle.svg';
import { ReactComponent as Sphere } from 'images/svg/round.svg';

export default function PageTitleSection({ text }) {
  return (
    <>
      <TitleContainer>
        <Title>
          {text}
        </Title>
        <Rectangle className='firstRectangleIcon' />
        <Rectangle className='secondRectangleIcon' />
        <Sphere className='sphereIcon' />
        <Rectangle className='thirdRectangleIcon' />
      </TitleContainer>
    </>
  );
}
