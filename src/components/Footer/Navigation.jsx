import { Link } from 'react-router-dom';
import { LinksContainer, NavLinksList } from './Footer.styled';

export const Navigation = () => {
  return (
    <LinksContainer>
      <NavLinksList>
        <li>
          <Link to="/search">Ingredients</Link>
        </li>
        <li>
          <Link to="/add">Add recipes</Link>
        </li>
        <li>
          <Link to="/my">My recipes</Link>
        </li>
        <li>
          <Link to="/favorite">Favorite</Link>
        </li>
        <li>
          <Link to="/shopping-list">Shopping list</Link>
        </li>
      </NavLinksList>
    </LinksContainer>
  );
};
