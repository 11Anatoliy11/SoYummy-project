import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  `
export const Input = styled.input`
      width: 244px;
      background-color: var(--charade-color);
      border-radius: 6px;
      padding: 12px 4px 12px 40px;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      letter-spacing: 0.04em;
      color: var(--white-color);
      margin-bottom: ${({ touch, err }) => {

    return touch && err ? '4px' : '24px'
  }};
      border: ${(props) => (props.success ? '1px solid var(--ocean-green-color)' : props.err ? '1px solid var(--cinnabar-color)' : '1px solid rgba(146,147,153,0.8)')};
      &::placeholder {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 0.04em;
        color: rgba(146,147,153,0.8);
        
      }
      &:focus{
        border: ${(props) => (props.success ? '1px solid var(--ocean-green-color)' : props.err ? '1px solid var(--cinnabar-color)' : '1.2px solid var(--white-color)')};
        outline: none;

        &::placeholder{
          color:var(--white-color);
        }
      }

      @media screen and (min-width: 767.98px) {
        width: 424px;
        padding: 16px 8px 16px 50px;
    
      }
`;

export const FormContainer = styled.div`
  /* z-index: 10000; */
  width: 290px;
  height:350px;
  padding: 32px 28px;
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  background-color: var(--charade-color);
  display: inline-block;


  @media screen and (min-width: 767.98px) {
    width: 500px;
    padding: 44px 50px;
  }
`;

export const Text = styled.p`
  font-family: 'poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  letter-spacing: -0.02;
  line-height: calc(30 / 28);
  color: var(--background-color);
  margin-bottom: 32px;
  text-align: ${props => (props.google ? 'center' : null)};

  @media screen and (min-width: 767.98px) {
    font-size: 28px;
    margin-bottom: 16px;
  }
`;
export const Icon = styled.div`
  display: inline-flex;
  position: absolute;
  top:20%;
  left:18px;
`
export const IconAft = styled.div`
  display: inline-flex;
  position: absolute;
  top:20%;
  right:18px;
`
export const StyledLink = styled(Link)`
  background-color: var(--white-lila-color);
  border-radius: 26px;
  padding: 10px 19px;
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  width: 120px;
  margin: 0px auto 23px auto;
  transition: transform 250ms ease;
  &:hover {
    transform: scale(1.05);
  }
`;

export const Button = styled.button`
  cursor: pointer;
  border: none;
  padding: 15px 16px;
  border-radius: 6px;
  width: 100%;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  background-color: var(--green-color);
  color: var(--background-color);
  margin-top: 25px;
  /* margin-right: ${props => (props.login ? '15px' : 0)}; */
  transition: transform 250ms ease;
  &:hover {
    transform: scale(1.05);
  }
`;

export const Error = styled.div`
  color: var(--cinnabar-color);
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  margin-bottom: 10px;
`;
