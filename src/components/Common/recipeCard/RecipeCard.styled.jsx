import styled from '@emotion/styled';

export const RecipeCardContainer = styled.div`
  position: relative;
  width: 100%;
  border-radius: 8px;
  > img {
    border-radius: 8px;
    object-fit: cover;
    width: 100%;

    @media screen and (min-width: ${props => props.theme.breakpoints.mobile}) {
      width: 343px;
    }
    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      width: 336px;
    }
    @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
      width: 300px;
    }
  }
`;

export const RecipeCardTitle = styled.div`
p {
  position: absolute;
  z-index: 2;
  width: calc(100% - 52px);
  padding: 16px 0 16px 16px;
  background-color: var(--white-color);
  bottom: 26px;
  border-radius: 8px;
  left: 18px;
  font-weight: 500;
  font-size: 16px;
  line-height: calc(20 / 16);
  letter-spacing: -0.24px;
  color: var(--fiord-color);
  box-shadow: 0px 8px 5px -2px rgba(162, 156, 156, 0.26);

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    width: calc(100% - 48px);
  }
}
`;
