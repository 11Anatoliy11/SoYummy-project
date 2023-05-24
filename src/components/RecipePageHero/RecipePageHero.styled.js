import styled from '@emotion/styled';

import { ReactComponent as Clock } from '../../images/svg/clock.svg';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  height: 391px;
  padding: 0 20px;
  margin-bottom: 32px;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    height: 428px;
    padding: 0 100px;
    margin-bottom: 50px;
  }
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    height: 419px;
    padding: 0 292px;
  }

  > Button {
    margin-top: 24px;
    width: 150px;
    height: 35px;

    font-size: 10px;
    line-height: 1.5;
    border: 1px solid var(--green-color);
    border-radius: 24px 44px;

    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      width: 278px;
      height: 59px;

      font-size: 16px;
    }
  }
`;

export const Descr = styled.span`
  margin-top: 18px;

  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.02em;
  color: var(--search-black-color);

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-top: 24px;

    font-size: 18px;
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    margin-top: 30px;
  }
`;

export const TimeWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  margin-top: 42px;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    gap: 8px;

    margin-top: 60px;
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    margin-top: 48px;
  }
`;

export const ClockIcon = styled(Clock)`
  width: 14px;
  height: 14px;
  fill: transparent;

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const Time = styled.span`
  font-weight: 500;
  font-size: 10px;
  line-height: 1.4;
  letter-spacing: -0.24px;
  color: var(--edit-modal-text-color);

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 14px;
  }
`;
