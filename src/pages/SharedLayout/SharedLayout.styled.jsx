const { default: styled } = require('@emotion/styled');

export const SharedLayoutContainer = styled.div`
  margin:  auto;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;

  @media screen and (min-width: 375px) {
    max-width: 343px;
  }

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    max-width: 704px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1240px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;
