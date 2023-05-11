const { default: styled } = require('@emotion/styled');

export const SharedLayoutContainer = styled.div`
  margin: 0 auto;
  padding-left: 16px;
  padding-right: 16px;

  @media screen and (min-width: 375px) {
    max-width: 375px;
  }

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    max-width: 768px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;
