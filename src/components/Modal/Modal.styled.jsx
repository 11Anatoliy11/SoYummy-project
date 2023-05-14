import styled from "styled-components";

export const Overlay = styled.div`
z-index: 15;
position: fixed;
left: 0;
top: 0;
display: flex;
justify-content: center;
align-items: center;
width: 100vw;
height: 100vh;
background-color: rgba(0, 0, 0, 0.4);
`;
export const ModalWindow = styled.div`
position: relative;
box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
border-radius: 30px;
background-color: var(--background-color);

&.userLogoModal{
  bottom: 35%;
  left: 17%;

   @media (min-width: 768px) {

  }
  @media (min-width: 1280px) {

  }
  .closeBtn{
    display: none;
  }
  }
  &.logoutModal {
   padding: 44px 24px;
   @media (min-width: 768px) {
    padding: 50px 40px;
  }
  @media (min-width: 1280px) {
    padding: 50px;
  }
  }
  &.userInfoModal{
    padding: 32px 24px;
   @media (min-width: 768px) {
    padding: 50px 40px;
  }
  @media (min-width: 1280px) {
    padding: 60px 50px;
  }
  }
`;
export const CloseButton = styled.button`
position: absolute;
top: 18px;
right: 18px;
background-color: transparent;
cursor: pointer;
 transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
 @media (min-width: 768px) {
  top: 24px;
right: 24px;
  }
 &:hover {
    transform: scale(0.9);
  }
  >svg{
    width: 20px;
 height: 20px;

  @media (min-width: 768px) {
    width: 24px;
 height: 24px;
  }
  }
`;
