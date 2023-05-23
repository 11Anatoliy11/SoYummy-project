const { default: styled } = require('@emotion/styled');

export const UserWrapper = styled.button`
  margin-left: auto;
  margin-right: 24px;
  display: flex;
  align-items: center;
  gap: 14px;
  outline: none;
  cursor: pointer;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-right: 50px;
  }
`;

export const UserIconWr = styled.div`
  > img {
    width: 34px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      width: 44px;
      height: 44px;
    }
  }
`;

export const UserNameTitle = styled.p`
  font-weight: 600;
  font-size: 12px;
  line-height: calc(20 / 12);
  color: ${props => props.theme.colors.userNameHeader};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    line-height: calc(24 / 12);
  }
`;
