const { default: styled } = require('@emotion/styled');

export const ShoppingListContainer = styled.div`
  margin-top: 50px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
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

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 20px;
    font-size: 18px;
    line-height: calc(27 / 18);
    letter-spacing: 0.03em;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding: 17px 40px;
  }
`;

export const HeadWrapper = styled.div`
  display: flex;
  gap: 10px;

  @media screen and (min-width: ${props => props.theme.breakpoints.mobile}) {
    gap: 24px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    gap: 78px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    gap: 142px;
  }
`;

export const IngredientsList = styled.ul`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-top: 50px;
    gap: 44px;
  }
`;

export const OneItem = styled.li`
  display: flex;
  align-items: flex-start;
  padding-bottom: 23px;
  border-bottom: 1px solid ${props => props.theme.colors.shoppingIngredientBorder};

  button {
    svg {
      stroke: ${props => props.theme.colors.secondaryDark};
    }
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding-bottom: 43px;
  }
`;

export const ImageWrapper = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.shoppingListImgWrapper};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 93px;
    height: 97px;
  }

  img {
    width: 48px;
    height: 48px;

    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
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
  color: ${props => props.theme.colors.secondaryDark};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
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

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
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
    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      width: 20px;
      height: 20px;
    }
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.mobile}) {
    margin-left: 50px;
    // margin-left: 46px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-right: 45px;
    margin-left: 104px;
    // margin-left: 110px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    margin-left: 164px;
    // margin-left: 174px;
    margin-right: 68px;
  }
`;
