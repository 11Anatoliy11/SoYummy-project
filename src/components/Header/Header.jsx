import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ReactComponent as LogoIcon } from 'images/svg/logo.svg';
import { ReactComponent as UserIcon } from 'images/svg/user.svg';
import { ReactComponent as BurgerMenu } from 'images/svg/burger.svg';
import { ReactComponent as SearchIcon } from 'images/svg/search.svg';
import { MobileMenu } from './MobileMenu';
import { useIsSmallScreen } from 'hooks/useIsSmallScreen';
import {
  HeaderContainer,
  UserWrapper,
  UserIconWr,
  UserNameTitle,
  DesktopNavigation,
  DesktopList,
} from './Header.styled';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isSmallScreen = useIsSmallScreen();
  const body = document.querySelector('body');

  useEffect(() => {
    if (!isSmallScreen) {
      setMenuOpen(false);
      body.classList.remove('mobile-menu-open');
    }
  }, [body, isSmallScreen]);

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
    body.classList.toggle('mobile-menu-open');
  };

  return (
    <>
      <HeaderContainer>
        <Link to="/main" className="logo">
          <LogoIcon style={{ fill: 'none' }} />
        </Link>
        {!isSmallScreen && (
          <DesktopNavigation>
            <DesktopList>
              <li>
                <NavLink to="/categories">Categories</NavLink>
              </li>
              <li>
                <NavLink to="/add">Add recipes</NavLink>
              </li>
              <li>
                <NavLink to="/my">My recipes</NavLink>
              </li>
              <li>
                <NavLink to="/favorite">Favorites</NavLink>
              </li>
              <li>
                <NavLink to="/shopping-list">Shopping list</NavLink>
              </li>
              <li>
                <NavLink to="/search" className="desk--search-link">
                  <SearchIcon style={{ fill: 'none' }} className="search" />
                </NavLink>
              </li>
            </DesktopList>
          </DesktopNavigation>
        )}
        <UserWrapper>
          <UserIconWr>
            <UserIcon style={{ fill: 'none' }} />
          </UserIconWr>
          <UserNameTitle>Olena</UserNameTitle>
        </UserWrapper>
        {isSmallScreen && (
          <button
            type="button"
            onClick={() => toggleMenu()}
            className="burger-menu"
          >
            <BurgerMenu />
          </button>
        )}
      </HeaderContainer>
      {isSmallScreen && (
        <MobileMenu toggleMenu={toggleMenu} menuOpen={menuOpen} />
      )}
    </>
  );
};
