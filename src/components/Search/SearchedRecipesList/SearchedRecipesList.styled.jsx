import styled from '@emotion/styled';

export const SearchedRecipesListError = styled.div`
  padding-top: 50px;
  width: 208px;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 350px;
  }
  > img {
    width: 208px;
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      width: 350px;
    }
  }
  >p{
    font-weight: 500;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: ${props => props.theme.colors.searchTypeTx};
  opacity: 0.5;
  }
`;
export const SearchedRecipesListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 42px;
  justify-content: center;
  gap: 28px;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding-top: 40px;
    gap: 32px;
  }
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding-top: 90px;
    gap: 100px 13px;
  }
`;
