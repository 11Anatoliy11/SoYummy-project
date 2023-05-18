import styled from '@emotion/styled';





// @media (min-width: ${props => props.theme.breakpoints.tablet}) {

//   }
//   @media (min-width: ${props => props.theme.breakpoints.desktop}) {

//   }


export const Wrapper = styled.div`
display: flex;
flex-direction: column;
gap: 115px;
/* width: 225px;
padding: 8px;
margin-left: 70px;
border-radius: 8px;
background-color: ${props => props.theme.colors.breakfastRecipes}; */

@media (min-width: ${props => props.theme.breakpoints.tablet}) {
  /* width: 261px;
  padding: 12px; */

  }
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    /* width: 298px;
    padding: 16px; */

  }
  .hero-search{
    width:100%
    >button{
      background-color: red;
    }

  }
`;
