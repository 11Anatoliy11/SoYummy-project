const { default: styled } = require('@emotion/styled');

export const LayoutContainer = styled.div`
  margin-bottom: 32px;
  margin-top: 50px;
  position: relative;

  @media screen and (min-width: 768px) {
    margin-bottom: 50px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 100px;
    border-bottom: 1px solid #e0e0e0;
  }
`;

export const ListOfCategories = styled.ul`
display: flex;
gap: 22px;
padding: 10px 29px 32px 29px;  
overflow-x: scroll;
// border-bottom: 1px solid #E0E0E0;
-ms-overflow-style: none;  
scrollbar-width: none; 

@media screen and (min-width: 768px) {
  gap: 49px;
  padding: 10px 30px 29px 30px;
}

  &::after {
    content: "";
    position: absolute;
    height: 1px;
    width: 100%;
    bottom: 0;
    background-color: #E0E0E0;
    left: 0;
    z-index: -1;
  }



// кастомний горизонтальний скрол
&::-webkit-scrollbar {
  display: none;
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
  white-space: nowrap;

  a {
    padding: 0 3px 32px 3px;
    font-size: 14px;
    line-height: 14px;
    color: #e0e0e0;

    &.active {
      border-bottom: 2px solid #8baa36;
      color: #8baa36;
    }

    @media screen and (min-width: 768px) {
      padding: 0 3px 27px 3px;
      font-size: 18px;
      line-height: 18px;
    }
  }
`;
