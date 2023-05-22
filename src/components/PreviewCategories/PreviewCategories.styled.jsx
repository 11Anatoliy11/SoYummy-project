import styled from '@emotion/styled';

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
padding-top: 147px;
background-color: transparent;
@media (min-width: ${props => props.theme.breakpoints.tablet}) {
  padding-top: 240px;
  }
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
  padding-top: 324px;
  }
`;
export const MainList = styled.div`
display: flex;
flex-direction: column;
gap: 32px;
@media (min-width: ${props => props.theme.breakpoints.tablet}) {
  gap: 50px;
  }
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    gap: 100px;
  }
`;
export const CategoryWrapper = styled.div`
display: flex;
flex-direction: column;
`;
export const CategoryList = styled.ul`
display: flex;
gap:32px;
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    gap:14px;
  }
`;
export const CategoryTitle = styled.h2`
margin-bottom: 32px;
font-weight: 600;
font-size: 28px;
line-height: 1;
letter-spacing: -0.02em;
font-feature-settings: 'liga' off;
color: ${props => props.theme.colors.sectionHeader};
@media (min-width: ${props => props.theme.breakpoints.tablet}) {
  margin-bottom: 40px;
  font-size: 44px;
  }
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    margin-bottom: 50px;
  }
`;
export const Button = styled.button`
margin-top: 24px;
margin-left: auto;
width: 94px;
height: 38px;
transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
border-radius: 6px;
font-size: 14px;
line-height: 1.29;
color:${props => props.theme.colors.btnTextLight};
background-color: ${props => props.theme.colors.mainAccent};
cursor: pointer;
&:hover{
  transform: scale(0.95);
  color:${props => props.theme.colors.userName};

}
@media (min-width: ${props => props.theme.breakpoints.tablet}) {
  margin-top: 40px;
  }
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    margin-top: 50px;
  }
`;

export const OtherCategoryBtn = styled.button`
margin-top: 40px;
margin-left: auto;
margin-right: auto;
width: 195px;
height: 46px;
transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
border: 1px solid ${props => props.theme.colors.mainAccent};
border-radius: 24px 44px;
font-size: 14px;
line-height: 21px;
color:${props => props.theme.colors.mainBtnText};
background-color: ${props => props.theme.colors.otherCategoriesBtn};
cursor: pointer;
&:hover{
  transform: scale(0.95);
  color:${props => props.theme.colors.btnTextLight};
  background-color: ${props => props.theme.colors.mainAccent};
}
@media (min-width: ${props => props.theme.breakpoints.tablet}) {
  margin-top: 32px;
  width: 239px;
  height: 61px;
  font-size: 16px;
  line-height: 24px;
  }
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    margin-top: 14px;
  }
`;
