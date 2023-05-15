const { default: styled } = require('@emotion/styled');

export const LayoutContainer = styled.div`
  margin-bottom: 32px;
`;

export const ListOfCategories = styled.ul`
margin-top: 50px;
display: flex;
gap: 22px;
padding: 10px 0 32px 29px;  
// 32px
overflow-x: scroll;
scrollbar-height: 1px; 

&::-webkit-scrollbar {
    height: 1px; /* Adjust as needed */
    width: 1px;
    background-color: transparent;
  }
  
  &::-webkit-scrollbar-track {
    background-color: #E0E0E0;
    width: 1px;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: #E0E0E0;
    border-radius: 4px;
    height: 1px;
    width: 1px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background-color: #E0E0E0;
    width: 1px;
`;

export const CategoryItem = styled.li`
  box-sizing: border-box;

  a {
    padding: 0 3px 32px 3px;
    font-size: 14px;
    line-height: 14px;
    color: #e0e0e0;

    &.active {
      border-bottom: 2px solid #8baa36;
      color: #8baa36;
    }
  }
`;
