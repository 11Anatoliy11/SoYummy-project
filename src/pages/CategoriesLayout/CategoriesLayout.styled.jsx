const { default: styled } = require('@emotion/styled');

export const LayoutContainer = styled.div`
  height:46px;
  margin-bottom: 32px;
  margin-top: 50px;
  position: relative;
  padding:0;
  border-bottom: 1px solid ${props => props.theme.colors.categoryLine};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-top: 55px;
    margin-bottom: 50px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    margin-top: 100px;
  }

  .categoryItem {
    display: flex;
    align-items: center;
    .MuiTabs-flexContainer {
      gap: 50px;
    }
    .MuiButtonBase-root.MuiTabScrollButton-root.MuiTabs-scrollButtons{
      padding-bottom: 28px;
    }
    .MuiSvgIcon-root.MuiSvgIcon-fontSizeSmall{
      color:${props => props.theme.colors.searchSelectText};
    }
    .tabItem {
      min-width: unset;
      min-height: unset;
      padding:unset;
      padding-bottom: 28px;
      text-transform: unset;
      font-weight: 400;
      font-size: 14px;
      line-height: 1.0;  
      color: ${props => props.theme.colors.categoriesMainText};
      
      &[aria-selected="true"] {
      color: ${props => props.theme.colors.mainAccent};
      }
    }

    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: 18px;
    }
  }
`;



