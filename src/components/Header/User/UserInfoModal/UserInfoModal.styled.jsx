import styled from '@emotion/styled';

export const Form = styled.form`
  display: block;
  .changeBtn {
    color: ${props => props.theme.colors.btnTextLight};
    background-color: ${props => props.theme.colors.mainAccent};
    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      width: 400px;
      height: 59px;
    }
    &:hover {
      color: ${props => props.theme.colors.btnHoverBg};
    }
  }
`;
