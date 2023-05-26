import styled from '@emotion/styled';
import imgDesk from '../../images/d-welcome.png';
import imgMob from '../../images/m-welcome.png';
import imgTab from '../../images/t-welcome.png';
import Button from 'components/Button/Button';

export const BackgroundStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${imgMob});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;

  background-position: center;

  @media screen and (min-width: 767.99px) {
    background-image: url(${imgTab});
  }

  @media screen and (min-width: 1199.99px) {
    background-image: url(${imgDesk});
  }
`;

export const TextCont = styled.div`
  margin: 0 auto;
  margin-bottom: 40px;
  width:305px;
  text-align: center;
  @media (min-width: 768px) {
    width:505px;
  }
  @media (min-width: 1200px) {
    width:540px;
  }
`;

export const TitleStyled = styled.h1`
  font-family: 'Poppins';
  margin-bottom: 14px;
  margin-top: 44px;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 30px;
  color: var(--background-color);
 
`;

export const TextStyled = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: var(--background-color);
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const BtnGroup = styled.div`
  display: flex;
  gap: 12px;

  @media (min-width: 768px) {
    gap: 18px;
  }
`;

export const RegisterBtn = styled(Button)`
  width: 132px;
  height: 45px;
  border-radius: 24px 44px;
  background-color: var(--green-color);
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: var(--background-color);
  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 21px;
    width: 184px;
    height: 67px;
  }
`;

export const SigninBtn = styled(Button)`
  width: 95px;
  height: 45px;
  border-radius: 24px 44px;
  border: 1px solid var(--background-color);
  background-color: transparent;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: var(--background-color);
  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 21px;
    width: 141px;
    height: 67px;
  }

  &:hover {
    background-color: transparent;
  }
`;
