import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  > Button {
    font-weight: 400;
    font-size: 10px;
    line-height: 1.5;
  }
`;

export const Descr = styled.span`
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.02em;
  color: var(--search-black-color);
`;

export const Time = styled.span`
  font-weight: 500;
  font-size: 10px;
  line-height: 1.4;
  letter-spacing: -0.24px;
  color: #23262a;
`;

export const TimeWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
