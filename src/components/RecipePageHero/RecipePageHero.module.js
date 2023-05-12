import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  padding: 80px 38px 90px;
  margin-bottom: 32px;

  /* background-image: url('../../images/m-vegetables.png');
  background-size: cover;
  background-position: center center; */

  > Button {
    margin-top: 24px;

    font-weight: 400;
    font-size: 10px;
    line-height: 1.5;
  }
`;

export const Descr = styled.span`
  margin-top: 18px;

  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.02em;
  color: var(--search-black-color);
`;

export const TimeWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  margin-top: 42px;
`;

export const Time = styled.span`
  font-weight: 500;
  font-size: 10px;
  line-height: 1.4;
  letter-spacing: -0.24px;
  color: #23262a;
`;
