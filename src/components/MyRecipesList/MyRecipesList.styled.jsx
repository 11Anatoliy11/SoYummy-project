import styled from '@emotion/styled';
export const MyRecipesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 43px;
  gap: 18px;
  @media (min-width: 768px) {
    padding-top: 97px;
    gap: 40px;
  }
  @media (min-width: 1280px) {
    padding-top: 93px;
    margin-bottom: -100px;
    gap: 50px;
  }
`;
