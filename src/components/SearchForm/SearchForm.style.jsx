import styled from '@emotion/styled';

export const Form = styled.div`
  .search-form{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:285px;
    height:53px;
    border-radius:24px 44px;
    border: 1px solid #F0F0F0;
    background-color: #FFFFFF;
    padding-left: 32px;
    @media (min-width: 768px) {
        padding-left: 38px;
        width:362px;
        height:57px;
  }
  @media (min-width: 1280px) {
    padding-left: 48px;
        width:510px;
        height:70px;
  }
>input{
    border: none; 
    background-color: transparent;
    width: 160px; 
    height: 21px;
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    @media (min-width: 768px) {
    font-size: 14px;
    line-height: 21px;
    width:190px;
    height:40px;
  }
  @media (min-width: 1280px) {
    font-size: 16px;
    line-height: 24px;
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
    background-color:var(--green-color);
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: var(--background-color);

    @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    width:161px;
    height:57px;
  }
  @media (min-width: 1280px) {
    width:161px;
    height:70px;
  }
  :hover{
    background-color:var(--search-black-color);
  }
  }
  }

`;
