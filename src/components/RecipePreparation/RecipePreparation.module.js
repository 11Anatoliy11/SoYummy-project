import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 0 16px;
`;

export const Title = styled.h2`
  margin-bottom: 28px;

  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.02em;

  color: var(--fiord-color);
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;

  margin-bottom: 40px;
`;

export const Item = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 14px;
`;

export const Number = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 21px;
  max-width: 70px;
  height: 21px;
  background-color: var(--green-color);
  border-radius: 50%;

  font-weight: 600;
  font-size: 12px;
  line-height: 1.5;

  color: var(--white-color);
`;

export const Text = styled.p`
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: -0.02em;
  color: rgba(0, 0, 0, 0.8);
`;

export const Image = styled.div`
  margin-bottom: 100px;
  border-radius: 8px;
  background-image: url(${props => props.src});
  background-size: cover;
  width: 100%;
  height: 250px;
`;
