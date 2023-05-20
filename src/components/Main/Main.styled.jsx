import styled from '@emotion/styled';

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
gap: 115px;

@media (min-width: ${props => props.theme.breakpoints.tablet}) {
  display: flex;
flex-direction: row;
gap: 62px;

  }
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    /* width: 298px;
    padding: 16px; */

  }
  #hero-search{
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      /* padding-top: 18px; */

    >button{
      background-color: ${props =>props.theme.colors.btnHoverText};

  }

    }

  }
`;
