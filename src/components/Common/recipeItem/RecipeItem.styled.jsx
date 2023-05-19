import styled from '@emotion/styled';
export const RecipeItemContainer = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.recipeBlockBg};
  width: 100%;
  background-color: ${props => props.theme.colors.recipeBlockBg};
  display: flex;
  padding: 14px 9px;
  max-width: 767.9px;
  border-radius: 8px;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    max-width: 1280px;
    padding: 28px 24px;
  }
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    max-width: 1980px;
    padding: 40px 40px;
  }
  >img{
        width: 124px;
        height: 124px;
        border-radius: 8px;
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 228px;
    height: 232px;
    }
    @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    width: 318px;
    height: 324px;
    }
  }
`;
export const RecipeItemBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    margin-left: 14px;
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      margin-left: 24px;
    }
    @media (min-width: ${props => props.theme.breakpoints.desktop}) {
      margin-left: 54px;
    }
`;
export const RecipeItemTitle = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom:10px;
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
        margin-bottom:18px;
    }
    @media (min-width: ${props => props.theme.breakpoints.desktop}) {
        margin-bottom:30px;
    }
    >h2{
    font-weight: 500;
    font-size: 14px;
    line-height: 1.0;
    line-height: 1.0;
    letter-spacing: -0.24px;
    color: ${props => props.theme.colors.secondaryDark};
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
        font-weight: 500;
        font-size: 24px;
    }
    }
    >Button{
      display: flex;
      align-items: center;
      justify-content: center;
      width:24px;
      height:24px;
      border-radius:4px;
      background-color:${props => props.theme.colors.secondaryAccent};
      background-color:${props => props.theme.colors.secondaryAccent};
        @media (min-width: ${props => props.theme.breakpoints.tablet}) {
        width:38px;
        height:38px;
    }
    @media (min-width: ${props => props.theme.breakpoints.desktop}) {
        width:44px;
        height:44px;
    }
    :hover{
      background-color:${props => props.theme.colors.footerBg};
    }
    :hover{
      background-color:${props => props.theme.colors.footerBg};
    }
    >svg{
      padding: 5px;
      width:24px;
      height:24px;
      stroke: ${props => props.theme.colors.mainBtnText};
      stroke: ${props => props.theme.colors.mainBtnText};
      fill: transparent;
      @media (min-width: ${props => props.theme.breakpoints.tablet}) {
        padding: 8px;
        width:38px;
        height:38px;
    }
    @media (min-width: ${props => props.theme.breakpoints.desktop}) {
      padding: 11px;
        width:44px;
        height:44px;
    }
    :hover{
      stroke: ${props => props.theme.colors.deleteBtnIcon};
    }
    }
    }
`;
export const RecipeItemText = styled.div`
    font-weight: 400;
    font-size: 8px;
    line-height: 1.25;
    letter-spacing: -0.02em;
    color: ${props => props.theme.colors.mainDark};
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
        font-size: 14px;
        line-height: 1.29;
        }
    @media (min-width: ${props => props.theme.breakpoints.desktop}) {
        font-size: 18px;
        line-height: 1.33;
    }
`;
export const RecipeItemBtn = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
>p{
font-weight: 500;
font-size: 10px;
line-height: 1.4;
color: ${props => props.theme.colors.secondaryDark};
line-height: 1.4;
color: ${props => props.theme.colors.secondaryDark};
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
        font-size: 14px;
        line-height: 1.43;
        line-height: 1.43;
    }
}
  >button{
    width:87px;
    height:27px;
    border-radius:24px 44px;
    background-color:${props => props.theme.colors.footerBg};
    background-color:${props => props.theme.colors.footerBg};
    font-weight: 400;
    font-size: 10px;
    line-height: 1.5;
    line-height: 1.5;
    color: var(--background-color);
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 14px;
    width:138px;
    height:45px;
  }
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    font-size: 16px;
    width:172px;
    height:59px;
  :hover{
    background-color:${props => props.theme.colors.deleteBtnBg};
    }
  }
  :hover{
    background-color:${props => props.theme.colors.deleteBtnBg};
    }
  }
`;