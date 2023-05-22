import styled from '@emotion/styled';

export const Text = styled.p`
  text-align: center;
  margin-bottom: 24px;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: ${props => props.theme.colors.mainDark};
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-bottom: 32px;
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 8px;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    gap: 16px;
  }
  .logoutBtn {
    font-size: 14px;
    line-height: 1.29;
    background-color: ${props => props.theme.colors.mainAccent};
    color: ${props => props.theme.colors.btnTextLight};
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      width: 192px;
      font-size: 16px;
      line-height: 1.12;
    }

    &:hover {
      background-color: ${props => props.theme.colors.btnHoverRevers};
    }
  }
  .cancelBtn {
    font-size: 14px;
    line-height: 1.29;
    background-color: ${props => props.theme.colors.mainGreyBg};
    color: ${props => props.theme.colors.burgerRecipeBtn};
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      width: 192px;
      font-size: 16px;
      line-height: 1.12;
    }

    &:hover {
      background-color: ${props => props.theme.colors.btnTextLight};
      border: 1px solid ${props => props.theme.colors.burgerRecipeBtn};
    }
  }
`;
