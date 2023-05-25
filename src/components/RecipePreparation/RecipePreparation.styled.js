import styled from '@emotion/styled';

export const Wrapper = styled.div`
  margin-bottom: 100px;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-bottom: 200px;
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    display: flex;
    gap: 50px;
  }
`;

export const InnerWrapper = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.h2`
  margin-bottom: 28px;

  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: ${props => props.theme.colors.secondaryDark};
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-bottom: 32px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;

  margin-bottom: 40px;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    gap: 18px;

    margin-bottom: 50px;
  }
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
  height: 21px;

  font-weight: 600;
  font-size: 12px;
  line-height: 1.5;
  color: var(--white-color);
  background-color: var(--green-color);
  border-radius: 50%;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 14px;
  }
`;

export const Text = styled.p`
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: -0.02em;
  color: ${props => props.theme.colors.mainBlack};

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 14px;
    line-height: 1.29;
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 250px;
  border-radius: 8px;
  background-image: url(${props => props.src});
  background-size: cover;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    min-width: 433px;
    max-width: 433px;
    height: 332px;
  }
`;
