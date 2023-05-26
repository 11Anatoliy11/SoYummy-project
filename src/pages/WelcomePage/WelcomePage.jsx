import {
  BackgroundStyled,
  BtnGroup,
  RegisterBtn,
  SigninBtn,
  TextCont,
  TextStyled,
  TitleStyled,
} from './Welcome.styled.jsx';
import { Link } from 'react-router-dom';
import { useWindowSize } from 'react-use';
import { ReactComponent as LogoDesk } from '../../images/svg/logoDesk.svg';
import { ReactComponent as LogoMob } from '../../images/svg/logoMob.svg';


const WelcomePage = () => {
  const { width } = useWindowSize();

  return (
    <BackgroundStyled>

      {width <= 768 ? <LogoMob /> : <LogoDesk />}
      <TitleStyled>Welcome to app!</TitleStyled>
      <TextCont>
        <TextStyled>
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
        </TextStyled>
      </TextCont>
      <BtnGroup>
        <Link to="/register">
          <RegisterBtn> Registration </RegisterBtn>
        </Link>
        <Link to="/signin">
          <SigninBtn> Signin </SigninBtn>
        </Link>
      </BtnGroup>
    </BackgroundStyled>
  );
};

export default WelcomePage;
