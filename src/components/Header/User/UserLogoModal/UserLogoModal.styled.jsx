import styled from '@emotion/styled';
import Popover from '@mui/material/Popover';

export const PopoverWrapper = styled.div``;
export const PopoverStyled = styled(Popover)`
  & .MuiPaper-root {
    border-radius: 8px;
    margin-top: 8px;
    margin-left: -44px;
    outline: none;
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      margin-top: 14px;
      margin-left: -80px;
    }
    @media (min-width: ${props => props.theme.breakpoints.desktop}) {
      margin-top: 21px;
      margin-left: -44px;
    }
  }
`;

export const ModalWrapper = styled.div`
  width: 161px;
  padding: 17px;
  border: 1px solid ${props => props.theme.colors.mainAccent};
  border-radius: 8px;
  background-color: ${props => props.theme.colors.bodyBg};
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 18px;
    width: 177px;
    border: 1px solid ${props => props.theme.colors.borderModal};
  }
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding: 18px;
    width: 177px;
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    margin-top: 20px;
    font-size: 14px;
    line-height: 1.5;
    color: ${props => props.theme.colors.btnTextLight};
    background-color: ${props => props.theme.colors.mainAccent};
    &:hover {
      background-color: ${props => props.theme.colors.btnHoverRevers};
    }
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      width: 141px;
      height: 43px;
      margin-top: 32px;
    }
    > svg {
      width: 18px;
      height: 18px;
    }
  }
`;
export const EditWrapper = styled.button`
  display: flex;
  align-items: center;
  gap: 37px;
  cursor: pointer;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  > svg {
    fill: none;
    stroke: ${props => props.theme.colors.mainDark};
    width: 14px;
    height: 14px;
  }
  &:hover {
    outline: none;
    transform: scale(0.95);
  }
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    gap: 53px;
  }
`;
export const EditText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.6;
  color: ${props => props.theme.colors.mainDark};
`;
