import styled from '@emotion/styled';

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
padding-top: 147px;
background-color: transparent;
`;
export const MainList = styled.div`
display: flex;
flex-direction: column;
gap: 32px;
`;
export const CategoryWrapper = styled.div`
display: flex;
flex-direction: column;
`;
export const CategoryList = styled.ul`
display: flex;
`;
export const CategoryTitle = styled.h2`
margin-bottom: 32px;
font-weight: 600;
font-size: 28px;
line-height: 1;
letter-spacing: -0.02em;
font-feature-settings: 'liga' off;
color: ${props => props.theme.colors.sectionHeader};

`;
export const Button = styled.button`
margin-top: 24px;
margin-left: auto;
width: 94px;
height: 38px;
transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
border-radius: 6px;
color:${props => props.theme.colors.btnTextLight};
background-color: ${props => props.theme.colors.mainAccent};
cursor: pointer;
&:hover{
  transform: scale(0.95);
  color:${props => props.theme.colors.userName};

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
color:${props => props.theme.colors.mainBtnText};
background-color: ${props => props.theme.colors.otherCategoriesBtn};
cursor: pointer;
&:hover{
  transform: scale(0.95);
  color:${props => props.theme.colors.btnTextLight};
  background-color: ${props => props.theme.colors.mainAccent};
}
`;
