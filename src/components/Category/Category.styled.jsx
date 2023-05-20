const { default: styled } = require('@emotion/styled');

export const OneCategoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    flex-wrap: wrap;
    gap: 32px;
    flex-direction: row;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    display: grid; 
    grid-auto-columns: 1fr; 
    grid-template-columns: 1fr 1fr 1fr 1fr; 
    grid-template-rows: 1fr 1fr; 
    gap: 100px 14px; 
  }
`;