import styled from '@emotion/styled';

export const RecipeItemContainer = styled.div`
  background-color: var(--white-color);
  display: flex;
  padding: 14px 9px;
  max-width: 767.9px;
  border-radius: 8px;

  @media (min-width: 768px) {
    max-width: 1280px;
    padding: 28px 24px;
  }
  @media (min-width: 1280px) {
    max-width: 1980px;
    padding: 40px 40px;
  }
  >img{
        width: 124px;
        height: 124px;
        border-radius: 8px;

    @media (min-width: 768px) {
    width: 228px;
    height: 232px;
    }
    @media (min-width: 1280px) {
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
    @media (min-width: 768px) {
      margin-left: 24px;
    }
    @media (min-width: 1280px) {
      margin-left: 54px;
    }
`;

export const RecipeItemText = styled.div`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 8px;
    line-height: 10px;
    letter-spacing: -0.02em;
    color: var(--edit-modal-text-color);
    @media (min-width: 768px) {
        font-size: 14px;
        line-height: 18px;
        }
    @media (min-width: 1280px) {
        font-size: 18px;
        line-height: 24px;
    }
`;

export const RecipeItemTitle = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom:10px;

    @media (min-width: 768px) {
        margin-bottom:18px;
    }
    @media (min-width: 1280px) {
        margin-bottom:30px;
    }
    >h2{
        font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: -0.24px;
    color: var(--edit-modal-text-color);

    @media (min-width: 768px) {
        font-weight: 500;
        font-size: 24px;
        line-height: 24px;
    }
    }
    >Button{
      display: flex;
      align-items: center;
      justify-content: center;
      width:24px;
      height:24px;
      border-radius:4px;
        @media (min-width: 768px) {
        width:38px;
        height:38px;
    }
    @media (min-width: 1280px) {
        width:44px;
        height:44px;
    }
    >svg{
      padding: 5px;
      width:14px;
      height:14px;
      stroke: var(--search-black-color);
      fill: transparent;
      @media (min-width: 768px) {
        padding: 8px;
        width:22px;
        height:22px;
    }
    @media (min-width: 1280px) {
      padding: 11px;
        width:24px;
        height:24px;
    }
    :hover{
      stroke: var(--background-color);
    }
    }
    }
`;

export const RecipeItemBtn = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
>p{
    font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 10px;
line-height: 14px;
letter-spacing: -0.24px;
color: var(--edit-modal-text-color);
    @media (min-width: 768px) {
        font-size: 14px;
        line-height: 20px;
    }
}

  >button{
    width:87px;
    height:27px;
    border-radius:24px 44px;
    background-color:var(--search-black-color);
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 15px;
    color: var(--background-color);
    @media (min-width: 768px) {
    font-size: 14px;
    line-height: 21px;
    width:138px;
    height:45px;
  }
  @media (min-width: 1280px) {
    font-size: 16px;
    line-height: 24px;
    width:172px;
    height:59px;
  }}
`;
