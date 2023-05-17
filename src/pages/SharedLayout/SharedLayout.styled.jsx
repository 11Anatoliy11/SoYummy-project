const { default: styled } = require('@emotion/styled');

export const SharedLayoutContainer = styled.div`
  margin:  auto;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;

  @media screen and (min-width: 375px) {
    max-width: 343px;
    padding-left: unset;
  padding-right: unset;
  }

  @media screen and (min-width: 768px) {
    max-width: 704px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1240px;

  }
`;
