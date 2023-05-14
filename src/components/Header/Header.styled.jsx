const { default: styled } = require('@emotion/styled');

export const HeaderContainer = styled.header`
  margin-top: 18px;
  display: flex;
  align-items: center;

  @media screen and (min-width: 1280px) {
    margin-top: 28px;
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
  }
`;

export const UserWrapper = styled.button`
  margin-left: auto;
  margin-right: 24px;
  display: flex;
  align-items: center;
  gap: 14px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    margin-right: 50px;
  }

  @media screen and (min-width: 1280px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

export const UserIconWr = styled.div`
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: var(--grey-color);

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }

  svg {
    width: 16px;
    height: 16px;

    @media screen and (min-width: 768px) {
      width: 18px;
      height: 18px;
    }
  }
`;

export const UserNameTitle = styled.p`
  font-weight: 600;
  font-size: 12px;
  line-height: calc(20 / 12);

  @media screen and (min-width: 768px) {
    line-height: calc(24 / 12);
  }
`;

export const MenuContainer = styled.div`
  background-color: #ebf3d4;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  transform: translateY(-200%);
  transition: transform 250ms ease-in-out;
  ${props =>
    props.isOpen
      ? ` transform: translateY(0); `
      : `transform: translateY(-200%);
    `}
`;

export const MenuHeader = styled.div`
  padding: 18px 16px 0 16px;
  display: flex;
  align-items: center;

  @media screen and (min-width: 375px) {
    max-width: 375px;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
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
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
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

  @media screen and (min-width: 768px) {
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
    color: #8baa36;

    .search-icon {
      stroke: #8baa36;
    }
  }

  .search-icon {
    width: 20px;
    height: 20px;

    @media screen and (min-width: 768px) {
      width: 24px;
      height: 24px;
    }
  }
`;

export const DesktopNavigation = styled.nav``;

export const DesktopList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  line-height: calc(22 / 14);

  .desk--search-link {
    display: flex;
    align-items: center;
  }

  a.active {
    color: #8baa36;

    .search {
      stroke: #8baa36;
    }
  }
`;
