import styled from '@emotion/styled';

export const Title = styled.h1`
padding-top: 68px;
text-align: center;
font-weight: 400;
font-size: 60px;
line-height: 1;
letter-spacing: -0.005em;
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      padding-top: 140px;
      text-align: start;
      font-size: 72px;
        }
    @media (min-width: ${props => props.theme.breakpoints.desktop}) {
      padding-top: 162px;
      font-size: 100px;
    }
`;
export const About = styled.p`
margin: 0 auto;
text-align: center;
max-width: 248px;
padding-top:14px;
padding-bottom:157px;
font-size: 14px;
line-height: 1.29;
letter-spacing: -0.02em;
color: ${props => props.theme.colors.mainDark};
@media (min-width: ${props => props.theme.breakpoints.tablet}) {
  max-width: 362px;
  padding-top: 24px;
  padding-bottom: 18px;
  margin: 0;
  text-align: start;
        }
    @media (min-width: ${props => props.theme.breakpoints.desktop}) {
      max-width: 465px;
      padding-top: 14px;
      padding-bottom: 50px;
      font-size: 18px;
      line-height: 1.33;

    }
`;

