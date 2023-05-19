import { TitleContainer, Title } from './PageTitleSection.styled';
import { ReactComponent as Rectangle } from '../../images/svg/rectangle.svg';

export default function PageTitleSection({ text }) {
  return (
    <>
      <TitleContainer>
        <Title>
          {text}
        </Title>
        <Rectangle className='firstRectangleIcon' />
        <Rectangle className='secondRectangleIcon' />
        <Rectangle className='thirdRectangleIcon' />
      </TitleContainer>
    </>
  );
}
