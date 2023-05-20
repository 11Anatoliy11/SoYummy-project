const { default: styled } = require('@emotion/styled');

export const HeaderContainer = styled.header`
  padding-top: 18px;
  display: flex;
  align-items: center;

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding-top: 28px;
    justify-content: space-between;
  }

  .logo {
    display: flex;
    align-items: center;
    height: 46px;
  }

  .burger-menu {
    height: 34px;
    display: flex;
    align-items: center;
    
    svg {
      stroke: ${props => props.theme.colors.mainHeaderText};
    }
    
  }
`;

export const MenuContainer = styled.div`
  background-color: ${props => props.theme.colors.secondaryAccent};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  transform: translateY(-200%);
  transition: transform 250ms ease-in-out;
  z-index: 5;
  ${props =>
    props.isOpen
      ? ` transform: translateY(0); z-index: 5; `
      : `transform: translateY(-200%);
    `}
`;

export const MenuHeader = styled.div`
  padding: 18px 16px 0 16px;
  display: flex;
  align-items: center;

  @media screen and (min-width: ${props => props.theme.breakpoints.mobile}) {
    max-width: ${props => props.theme.breakpoints.mobile};
    margin: 0 auto;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    max-width: ${props => props.theme.breakpoints.tablet};
    padding-left: 32px;
    padding-right: 32px;
  }

  a {
    display: flex;
    align-items: center;
    height: 46px;
  }

  .menu--close-btn {
    margin-left: auto;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      stroke: ${props => props.theme.colors.mainHeaderText};
    }
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  padding-bottom: calc(100vh / 3.5);
`;

export const NavigationList = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 124px;
  gap: 32px;
  font-weight: 500;
  font-size: 18px;
  line-height: calc(18 / 18);
  letter-spacing: -0.02em;
  color: ${props => props.theme.colors.mainHeaderText};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    gap: 40px;
    font-size: 24px;
  }

  li {
    display: flex;
    justify-content: center;
  }

  .search-link {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  a.active {
    color: var(--green-color);

    .search-icon {
      stroke: var(--green-color);
    }
  }

  .search-icon {
    width: 20px;
    height: 20px;

    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      width: 24px;
      height: 24px;
    }
  }
`;

export const DesktopNavigation = styled.nav`
  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    margin-left: 187px;
  }
`;

export const DesktopList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  line-height: calc(22 / 14);
  color: ${props => props.theme.colors.mainHeaderText};

  .desk--search-link {
    display: flex;
    align-items: center;
  }

  a.active {
    color: var(--green-color);

    .search {
      stroke: var(--green-color);
    }
  }
`;
