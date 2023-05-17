import styled from '@emotion/styled';

export const RecipesListContainer = styled.div`
display: flex;
flex-direction: column;
    gap: 18px;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    gap: 40px;
  }
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    gap: 50px;
  }
`;