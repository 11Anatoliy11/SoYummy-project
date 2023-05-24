import styled from '@emotion/styled';

export const Text = styled.p`
  text-align: center;
  margin-bottom: 24px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: ${props => props.theme.colors.mainDark};
  margin-top: 20px;
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-bottom: 32px;
    font-size: 18px;
    line-height: 1.33;
  }
`;

