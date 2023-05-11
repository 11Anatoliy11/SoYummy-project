import styled from '@emotion/styled';

export const Title = styled.h2`
  margin-bottom: 28px;

  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.02em;

  color: #3e4462;
`;

export const List = styled.ul`
  display: flex;
  gap: 14px;

  margin-bottom: 40px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const Number = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 21px;
  height: 21px;
  background-color: var(--green-color);
  border-radius: 50%;

  font-weight: 600;
  font-size: 12px;
  line-height: 1.5;

  color: #ffffff;
`;

export const Text = styled.p`
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: -0.02em;
  color: rgba(0, 0, 0, 0.8);
`;

export const Image = styled.img`
  margin-bottom: 100px;
`;
