import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
  width: 225px;
  padding: 8px;
  margin-left: 70px;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.breakfastRecipes};

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 260px;
    padding: 12px;
    margin-left: 0px;
  }
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    width: 298px;
    padding: 16px;
  }
  & .arrow-pointer{
    display: none;
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    position: absolute;
    width: 150px;
    top:50px;
    left:55px;
    display: block;
    fill: none;
  }
@media (min-width: ${props => props.theme.breakpoints.desktop}) {
  top:72px;
  left:48px;
  width: 200px;
  }
  }
`;

export const TextWrapper = styled.div`
  margin-bottom: 7px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.24px;
  color: ${props => props.theme.colors.secondaryDark};
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-bottom: 4px;
    font-size: 14px;
    line-height: 1.29;
  }
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    line-height: 1.43;
  }

`;

export const Accent = styled.span`
  color: ${props => props.theme.colors.mainAccent};
`;

export const GoToRecipe = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 4px;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: 0.2px;
  color: ${props => props.theme.colors.secondaryDark};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  > svg {
    width: 18px;
    height: 18px;
    stroke: currentColor;
    transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      stroke: currentColor;
    }
  }
  &:hover {
    color: ${props => props.theme.colors.linkHover};
  }
`;

