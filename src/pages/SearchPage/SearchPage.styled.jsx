import styled from '@emotion/styled';

export const SearchPageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 43px;
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
        padding-top: 37px;
        }
    @media (min-width: ${props => props.theme.breakpoints.desktop}) {
        padding-top: 93px;
    }

`;