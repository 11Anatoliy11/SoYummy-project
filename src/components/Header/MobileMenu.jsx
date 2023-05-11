import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as LogoIcon } from 'images/svg/logo.svg';
import { ReactComponent as CrossIcon } from 'images/svg/cross.svg';
import { ReactComponent as SearchIcon } from 'images/svg/search.svg';
import {
  MenuContainer,
  MenuHeader,
  NavContainer,
  NavigationList,
} from './Header.styled';

export const MobileMenu = ({ toggleMenu, menuOpen }) => {
  const open = menuOpen;

  return (
    <MenuContainer isOpen={open}>
      <MenuHeader>
        <Link to="/main" onClick={() => toggleMenu()}>
          <LogoIcon style={{ fill: 'none' }} />
        </Link>
        <button
          type="button"
          className="menu--close-btn"
          onClick={() => toggleMenu()}
        >
          <CrossIcon />
        </button>
      </MenuHeader>
      <NavContainer>
        <NavigationList>
          <li>
            <NavLink to="/categories" onClick={() => toggleMenu()}>
              Categories
            </NavLink>
          </li>
          <li>
            <NavLink to="/add" onClick={() => toggleMenu()}>
              Add recipes
            </NavLink>
          </li>
          <li>
            <NavLink to="/my" onClick={() => toggleMenu()}>
              My recipes
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorite" onClick={() => toggleMenu()}>
              Favorites
            </NavLink>
          </li>
          <li>
            <NavLink to="/shopping-list" onClick={() => toggleMenu()}>
              Shopping list
            </NavLink>
          </li>
          <li>
            <NavLink
              className="search-link"
              to="/search"
              onClick={() => toggleMenu()}
            >
              <SearchIcon style={{ fill: 'none' }} className="search-icon" />
              Search
            </NavLink>
          </li>
        </NavigationList>
      </NavContainer>
    </MenuContainer>
  );
};
