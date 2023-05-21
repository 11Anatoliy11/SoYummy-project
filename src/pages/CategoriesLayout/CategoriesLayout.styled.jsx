const { default: styled } = require('@emotion/styled');

export const LayoutContainer = styled.div`
  margin-bottom: 32px;
  margin-top: 50px;
  position: relative;
  // border-bottom: 1px solid ${props => props.theme.colors.categoryLine};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-bottom: 50px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    margin-top: 100px;
  }

.ListOfCategories {
  display: flex;
gap: 22px;
padding: 10px 29px 32px 29px;  

@media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
  gap: 49px;
  padding: 10px 30px 29px 30px;
}

}
.CategoryItem {
    box-sizing: border-box;
    white-space: nowrap;
    padding: 0 3px 32px 3px;


    .tabItem {
      font-size: 14px;
      line-height: 14px;  
      color: ${props => props.theme.colors.searchInputText};
      
      &[aria-selected="true"] {
      color: var(--green-color);
      }
    }

    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      padding: 0 3px 27px 3px;
      font-size: 18px;
      line-height: 18px;
    }
  }
`;



