import PageTitleSection from "components/PageTitleSection/PageTitleSection";
import { ReactComponent as NotFoundIcon } from 'images/svg/404.svg';
import { NotFoundContainer, NotFoundWrapper , SorryTitle, ExplanText } from './NotFound.styled';

export const NotFound = () => {
  return (
    <NotFoundContainer>
      <PageTitleSection text={""}/>
      <NotFoundWrapper>
        <NotFoundIcon className='icon'/>
        <SorryTitle>We are sorry,</SorryTitle>
        <ExplanText>
          but the page you were looking for can’t be found..
        </ExplanText>
      </NotFoundWrapper>
    </NotFoundContainer>
  );
};
