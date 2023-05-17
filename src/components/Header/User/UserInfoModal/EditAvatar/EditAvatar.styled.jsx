import styled from 'styled-components';

export const AvatarBox = styled.div`
  text-align: center;
  border-radius: 50%;
`;

export const AvatarWrapper = styled.div`
    width: 88px;
    height: 88px;
    @media screen and (min-width: 768px) {
      width: 103px;
      height: 103px;
    }
      & img {
    object-fit: cover;
    border-radius: 50%;
    width: 88px;
    height: 88px;
    @media screen and (min-width: 768px) {
      width: 103px;
      height: 103px;
    }
  }
`;

export const Label = styled.label`
  position: relative;
  margin-bottom: 48px;
  display: inline-block;
  cursor: pointer;

  .addIcon {
    position: absolute;
    top: 70px;
    right: 13px;
    width: 24px;
    height: 24px;
    @media screen and (min-width: 768px) {
      top: 81px;
      right: 10px;
    }
  }

`;
export const AvatarInput = styled.input`
  visibility: hidden;
  width: 0;
  height: 0;
`;
