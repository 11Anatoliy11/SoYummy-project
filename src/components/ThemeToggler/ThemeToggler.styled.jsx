import styled from '@emotion/styled';

export const Switcher = styled.div`
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Check = styled.input`
  opacity: 0;
  position: absolute;
  left: 0;
  top: 0;

  &:checked + label > span {
    transform: translateX(30px);
  }
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 5px;
  gap: 14px;
  width: 48px;
  height: 24px;
  background-color: ${p =>
    p.mode === 'dark' ? p.theme.colors.mainAccent : p.theme.colors.switchBg};
  box-shadow: inset 0px 6px 8px 3px rgba(0, 0, 0, 0.1);
  border-radius: ${props => props.theme.radii.switch};
  cursor: pointer;
`;

export const Ball = styled.span`
  position: absolute;
  width: 16px;
  height: 16px;
  background: linear-gradient(180deg, #ffffff 0%, #e8eaea 100%);
  border-radius: ${props => props.theme.radii.circle};
  filter: drop-shadow(2px 1px 6px rgba(0, 0, 0, 0.1));
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
