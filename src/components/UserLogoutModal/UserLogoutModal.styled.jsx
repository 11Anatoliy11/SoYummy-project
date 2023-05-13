import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 44px 24px;
  @media screen and (min-width: 768px) {
    padding: 50px 40px;
  }
`
export const Text = styled.p`
  margin-bottom: 24px;
  font-size: 14px;
  letter-spacing: -0.02em;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

export const ButtonBox = styled.div`
  display: flex;
  gap: 8px;
  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`

export const Button = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  color: black;
  background-color: green;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    height: 60px;
    font-size: 18px;
  }
`
