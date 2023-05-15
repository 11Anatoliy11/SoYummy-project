const { default: styled } = require('@emotion/styled');

export const UserWrapper = styled.button`
position: relative;
  margin-left: auto;
  margin-right: 24px;
  display: flex;
  align-items: center;
  gap: 14px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    margin-right: 50px;
  }

  @media screen and (min-width: 1280px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

export const UserIconWr = styled.div`
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: var(--grey-color);

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }

  svg {
    width: 16px;
    height: 16px;

    @media screen and (min-width: 768px) {
      width: 18px;
      height: 18px;
    }
  }
`;

export const UserNameTitle = styled.p`
  font-weight: 600;
  font-size: 12px;
  line-height: calc(20 / 12);

  @media screen and (min-width: 768px) {
    line-height: calc(24 / 12);
  }
`;
