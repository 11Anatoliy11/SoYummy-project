import styled from 'styled-components';

export const InputBox = styled.div`
position: relative;
margin-bottom: 24px;


  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }

`;
export const Input = styled.input`
  padding-left: 40px;
  width: 100%;
  height: 48px;
  border: 1px solid var(--grey-color);
  border-radius: 6px;
  background-color: transparent;
  color: var(--edit-modal-text-color);
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;

  @media screen and (min-width: 768px) {
    padding-left: 51px;
    height: 58px;
    font-size: 18px;

  }
`;

export const Label = styled.label`
    .userIcon{
    position: absolute;
    top:16.5px;
    left:13.5px;
    width: 18px;
    height: 18px;
    fill: none;
    @media screen and (min-width: 768px) {
      top:18px;
    left:19px;
        width: 24px;
      height: 24px;
  }
  }
    .editIcon{
      position: absolute;
      top:18px;
      right:14px;
      width: 17px;
      height: 17px;
      @media screen and (min-width: 768px) {
        top:20px;
      right:18px;
        width: 19px;
      height: 19px;
  }
    }

`;
