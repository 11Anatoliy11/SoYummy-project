import styled from '@emotion/styled';

export const RecipesListContainer = styled.div`
display: flex;
flex-direction: column;
    gap: 18px;
  @media (min-width: 768px) {
    gap: 40px;
  }
  @media (min-width: 1280px) {
    gap: 50px;
  }
`;