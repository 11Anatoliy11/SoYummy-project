const { default: styled } = require('@emotion/styled');

export const NotFoundContainer = styled.div`
  padding-bottom: 100px;

  @media screen and (min-width: 768px) {
    padding-bottom: 204px;
  }

  @media screen and (min-width: 1280px) {
    padding-bottom: 203px;
  }
`;

export const NotFoundWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  .icon {
    padding-bottom: 14px;

    @media screen and (min-width: 768px) {
      padding-bottom: 32px;
      width: 498px;
      height: 327px;
    }
  }
`;

export const SorryTitle = styled.h3`
  font-weight: 600;
  font-size: 18px;
  line-height: calc(20 / 18);
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
  color: #000000;
  padding-bottom: 8px;

  @media screen and (min-width: 768px) {
    line-height: calc(24 / 24);
    font-size: 24px;
    padding-bottom: 14px;
  }
`;

export const ExplanText = styled.p`
  width: 206px;
  font-size: 14px;
  line-height: calc(18 / 14);
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
  color: #000000;
  opacity: 0.5;
  text-align: center;

  @media screen and (min-width: 768px) {
    width: unset;
    font-size: 18px;
    line-height: calc(24 / 18);
  }
`;
