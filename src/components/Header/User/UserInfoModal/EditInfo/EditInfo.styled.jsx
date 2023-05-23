import styled from '@emotion/styled';

export const InputBox = styled.div`
  position: relative;
  margin-bottom: 24px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-bottom: 32px;
  }
`;
export const Input = styled.input`
  padding-left: 40px;
  width: 100%;
  height: 48px;
  border: 1px solid ${props => props.theme.colors.mainDark};
  border-radius: 6px;
  color: ${props => props.theme.colors.mainDark};
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  background-color: transparent;
  outline:none;
  opacity: 0.7;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding-left: 51px;
    height: 58px;
    font-size: 18px;
  }
  &:focus {
  border-color: 1px solid ${props => props.theme.colors.mainDark};
  opacity:1;
}
`;

export const Label = styled.label`
  .userIcon {
    position: absolute;
    top: 16.5px;
    left: 13.5px;
    width: 18px;
    height: 18px;
    fill: none;
    stroke: ${props => props.theme.colors.mainDark};
    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      top: 18px;
      left: 19px;
      width: 24px;
      height: 24px;
    }
  }
  .editIcon {
    position: absolute;
    top: 18px;
    right: 14px;
    width: 17px;
    height: 17px;
    fill: none;
    stroke: ${props => props.theme.colors.mainDark};
    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      top: 20px;
      right: 18px;
      width: 19px;
      height: 19px;
    }
  }
`;
