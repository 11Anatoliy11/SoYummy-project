const { default: styled } = require('@emotion/styled');

export const AppContainer = styled.div`
  background-color: ${props => props.theme.colors.bodyBg};
`;