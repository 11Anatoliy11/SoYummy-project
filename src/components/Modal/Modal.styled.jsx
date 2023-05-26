import styled from '@emotion/styled';

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

  &.userLogoOverlayModal {
    position: absolute;
    background-color: transparent;
  }
`;

export const ModalWindow = styled.div`
  position: relative;
  width: 330px;
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      width: 480px;
    }
    @media (min-width: ${props => props.theme.breakpoints.desktop}) {
      width: 500px;
    }

  &.userLogoModal {
    background-color: ${props => props.theme.colors.logoModalBg};
    .closeBtn {
      display: none;
    }
  }
  &.logoutModal {
    padding: 44px 24px;
    background-color: ${props => props.theme.colors.breakfastRecipes};
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      padding: 50px 40px;
    }
    @media (min-width: ${props => props.theme.breakpoints.desktop}) {
      padding: 50px;
    }
  }
  &.userInfoModal {
    padding: 32px 24px;
    background-color: ${props => props.theme.colors.breakfastRecipes};
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      padding: 50px 40px;
    }
    @media (min-width: ${props => props.theme.breakpoints.desktop}) {
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
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    top: 24px;
    right: 24px;
  }
  &:hover {
    transform: scale(0.9);
  }
  > svg {
    stroke: ${props => props.theme.colors.iconColor};
    width: 20px;
    height: 20px;

    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      width: 24px;
      height: 24px;
    }
  }
`;
