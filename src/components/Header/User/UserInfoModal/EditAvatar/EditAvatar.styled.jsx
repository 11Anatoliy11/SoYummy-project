import styled from '@emotion/styled';

export const AvatarBox = styled.div`
  text-align: center;
  border-radius: 50%;
`;

export const AvatarWrapper = styled.div`
  width: 88px;
  height: 88px;
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 103px;
    height: 103px;
  }
  & img {
    object-fit: cover;
    border-radius: 50%;
    width: 88px;
    height: 88px;
    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      width: 103px;
      height: 103px;
    }
  }
`;

export const Label = styled.label`
  position: relative;
  margin-bottom: 48px;
  display: inline-block;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  .addIcon {
    position: absolute;
    top: 70px;
    right: 13px;
    width: 24px;
    height: 24px;
    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      top: 81px;
      right: 10px;
    }
  }
  &:hover{
    transform:scale(0.9);
  }
`;
export const AvatarInput = styled.input`
  visibility: hidden;
  width: 0;
  height: 0;
`;
