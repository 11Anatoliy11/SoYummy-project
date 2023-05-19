const { default: styled } = require('@emotion/styled');

export const ShoppingListContainer = styled.div`
  margin-top: 50px;

  @media screen and (min-width: 768px) {
    margin-top: 72px;
  }
`;

export const Head = styled.div`
  padding: 10px;
  background-color: var(--green-color);
  border-radius: 8px;
  color: var(--background-color);
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 12px;
  line-height: calc(18 / 12);

  @media screen and (min-width: 768px) {
    padding: 20px;
    font-size: 18px;
    line-height: calc(27 / 18);
    letter-spacing: 0.03em;
  }

  @media screen and (min-width: 1280px) {
    padding: 17px 40px;
  }
`;

export const HeadWrapper = styled.div`
  display: flex;
  gap: 10px;

  @media screen and (min-width: 375px) {
    gap: 24px;
  }

  @media screen and (min-width: 768px) {
    gap: 78px;
  }

  @media screen and (min-width: 1280px) {
    gap: 142px;
  }
`;

export const IngredientsList = styled.ul`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    margin-top: 50px;
    gap: 44px;
  }
`;

export const OneItem = styled.li`
  display: flex;
  align-items: flex-start;
  padding-bottom: 23px;
  border-bottom: 1px solid #e0e0e0;

  @media screen and (min-width: 768px) {
    padding-bottom: 43px;
  }
`;

export const ImageWrapper = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ebf3d4;

  @media screen and (min-width: 768px) {
    width: 93px;
    height: 97px;
  }

  img {
    width: 48px;
    height: 48px;

    @media screen and (min-width: 768px) {
      width: 81px;
      height: 81px;
    }
  }
`;

export const Title = styled.p`
  margin-left: 10px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: calc(12 / 10);
  color: #3e4462;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: calc(24 / 16);
    margin-left: 16px;
  }
`;

export const MeasureWrapper = styled.div`
  margin-left: auto;
  width: 49px;
  padding: 4px;
  background-color: var(--green-color);
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: calc(15 / 10);
  text-align: center;
  color: #fafafa;
  border-radius: 4px;

  @media screen and (min-width: 768px) {
    padding: 4px 8px;
    font-size: 18px;
    line-height: calc(27 / 18);
    width: 92px;
  }
`;

export const Delete = styled.button`
  margin-left: 36px;
  margin-right: 19px;

  svg {
    width: 14px;
    height: 14px;
    @media screen and (min-width: 768px) {
      width: 20px;
      height: 20px;
    }
  }

  @media screen and (min-width: 375px) {
    margin-left: 50px;
    // margin-left: 46px;
  }

  @media screen and (min-width: 768px) {
    margin-right: 45px;
    margin-left: 104px;
    // margin-left: 110px;
  }

  @media screen and (min-width: 1280px) {
    margin-left: 164px;
    // margin-left: 174px;
    margin-right: 68px;
  }
`;
