import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 115px;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: row-reverse;
    gap: 74px;
  }
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    gap: 410px;
  }
  #hero-search {
    width: 295px;
    height: 52px;
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      margin-top: 18px;
      width: 362px;
      height: 59px;
    }
    @media (min-width: ${props => props.theme.breakpoints.desktop}) {
      margin-top: 0px;
      width: 510px;
      height: 70px;
    }

    > button {
      height: 52px;
      background-color: ${props => props.theme.colors.btnHoverText};
      @media (min-width: ${props => props.theme.breakpoints.tablet}) {
        width: 161px;
        height: 59px;
      }
      @media (min-width: ${props => props.theme.breakpoints.desktop}) {
        height: 70px;
      }
      &:hover {
        background-color: ${props => props.theme.colors.searchBtn};
      }
    }
  }
`;
