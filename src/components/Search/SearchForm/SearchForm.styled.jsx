import styled from '@emotion/styled';

export const Form = styled.div`
  .search-form{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:285px;
    height:53px;
    border-radius:24px 44px;
    border: 1px solid ${props => props.theme.colors.searchInputBorder};
    box-shadow: 0px 4px 4px ${props => props.theme.colors.searchInputShadow};
    background-color: ${props => props.theme.colors.searchSelectBg};
    padding-left: 32px;
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
        padding-left: 38px;
        width:362px;
        height:57px;
  }
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding-left: 48px;
        width:510px;
        height:70px;
  }
>input{
    border: none; 
    background-color: transparent;
    width: 160px; 
    height: 21px;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    color:${props => props.theme.colors.searchInputText};
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 14px;
    width:190px;
    height:40px;
  }
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    font-size: 16px;
    width:330px;
    height:50px;
  }
    :focus {
    outline: none !important;
}
}

  >button{
    width:113px;
    height:53px;
    border-radius:24px 44px;
    background-color:${props => props.theme.colors.searchInputBtnBg};
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;
    color: ${props => props.theme.colors.searchInputBtnTx};

    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 16px;
    width:161px;
    height:57px;
  }
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    width:161px;
    height:70px;
  }
  :hover{
    background-color:${props => props.theme.colors.userName};
  }
  }
  }

`;
