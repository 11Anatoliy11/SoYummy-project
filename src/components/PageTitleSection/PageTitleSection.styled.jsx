import styled from '@emotion/styled';

export const TitleContainer = styled.div`
  position: relative;
  max-width: 767.9px;

  @media (min-width: 768px) {
    max-width: 1280px;
  }
  @media (min-width: 1280px) {
    max-width: 1980px;
  }
  .firstRectangleIcon {
    position: absolute;
    top: 12px;
    left: 120px;
    width: 8px;
    height: 8px;
    fill: var(--green-color);
    @media (min-width: 768px) {
      top: 21px;
      left: 219px;
      width: 14px;
      height: 14px;
    }
    @media (min-width: 1280px) {
      top: 52px;
      left: 327px;
    }
  }
  .secondRectangleIcon {
    position: absolute;
    top: 45px;
    left: 349px;
    width: 8px;
    height: 8px;
    fill: var(--green-color);
    @media (min-width: 768px) {
      top: 34px;
      left: 726px;
      width: 14px;
      height: 14px;
    }
    @media (min-width: 1280px) {
      top: 65px;
      left: 1250px;
    }
  }
  .sphereIcon {
    position: absolute;
    top: 78px;
    left: 247px;
    width: 6px;
    height: 6px;

    @media (min-width: 768px) {
      display: none;
    }
  }
  .thirdRectangleIcon {
    display: none;

    @media (min-width: 768px) {
      position: absolute;
      top: 91px;
      left: 437px;
      display: block;
      fill: var(--search-black-color);
      width: 12px;
      height: 12px;
    }
    @media (min-width: 1280px) {
      display: block;
      top: 135px;
      left: 807px;
    }
  }
`;

export const Title = styled.h1`
  padding-top: 50px;
  padding-bottom: 50px;
  font-weight: 600;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: var(--page-title-color);

  @media (min-width: 768px) {
    padding-top: 72px;
    padding-bottom: 97px;
    font-size: 32px;
  }
  @media (min-width: 1280px) {
    padding-top: 100px;
    padding-bottom: 92px;
    font-size: 44px;
  }
`;