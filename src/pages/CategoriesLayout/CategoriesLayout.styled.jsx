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
    border-bottom: 1px solid var(--alto-color);
  }
`;

export const ListOfCategories = styled.ul`
display: flex;
gap: 22px;
padding: 10px 29px 32px 29px;  
overflow-x: scroll;
// border-bottom: 1px solid var(--alto-color);
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
    background-color: var(--alto-color);
    left: 0;
    z-index: -1;
  }



// кастомний горизонтальний скрол
&::-webkit-scrollbar {
  display: none;
  }
  
  &::-webkit-scrollbar-track {
    background-color: var(--alto-color);
    width: 1px;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: var(--alto-color);
    border-radius: 4px;
    height: 1px;
    width: 1px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background-color: var(--alto-color);
    width: 1px;
  }
`;

export const CategoryItem = styled.li`
  box-sizing: border-box;
  white-space: nowrap;

  a {
    padding: 0 3px 32px 3px;
    font-size: 14px;
    line-height: 14px;  
    color: var(--alto-color);

    &.active {
      border-bottom: 2px solid var(--green-color);
      color: var(--green-color);
    }

    @media screen and (min-width: 768px) {
      padding: 0 3px 27px 3px;
      font-size: 18px;
      line-height: 18px;
    }
  }
`;
