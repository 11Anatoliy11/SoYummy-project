const { default: styled } = require('@emotion/styled');

export const SharedLayoutContainer = styled.div`
  margin: 0 auto;
  padding: 18px 16px 28px 16px;
  background-color:var(--background-color);

  @media screen and (min-width: 375px) {
    max-width: 375px;
  }

  @media screen and (min-width: 768px) {
    padding: 18px 32px 32px 32px;
    max-width: 768px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding: 18px 100px 50px 100px;
  }
`;
