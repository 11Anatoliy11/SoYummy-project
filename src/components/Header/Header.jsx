import { Link, NavLink, useLocation,useParams  } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ReactComponent as LogoIcon } from 'images/svg/logo.svg';
import { ReactComponent as BurgerMenu } from 'images/svg/burger.svg';
import { ReactComponent as SearchIcon } from 'images/svg/search.svg';
import { MobileMenu } from './MobileMenu';

import { User } from './User/User';

import { useIsSmallScreen } from 'hooks/useIsSmallScreen';
import {
  HeaderContainer,
  DesktopNavigation,
  DesktopList,
} from './Header.styled';

import { ThemeToggler } from 'components/ThemeToggler/ThemeToggler';

export const Header = ({ isRecipe }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isSmallScreen = useIsSmallScreen();
  const body = document.querySelector('body');
  const location = useLocation();
  const { recipeId } = useParams();

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
      <HeaderContainer >
        <Link to="/main" className="logo">
          <LogoIcon style={{ fill: 'none' }} />
        </Link>
        {!isSmallScreen && (
          <DesktopNavigation>
            <DesktopList isRecipePage={location.pathname.includes(`${recipeId}`)}>
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
        <User />
        {isSmallScreen && (
          <button
            type="button"
            onClick={() => toggleMenu()}
            className="burger-menu"
          >
            <BurgerMenu className="menu" />
          </button>
        )}
        {!isSmallScreen && <ThemeToggler />}
      </HeaderContainer>
      {isSmallScreen && (
        <MobileMenu toggleMenu={toggleMenu} menuOpen={menuOpen} />
      )}
    </>
  );
};
