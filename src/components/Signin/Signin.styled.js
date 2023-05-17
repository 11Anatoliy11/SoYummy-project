import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  `
    export const Input = styled.input`
      width: 100%;
      background-color: #2A2C36;
      border-radius: 6px;
      padding: 12px 4px 12px 40px;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      letter-spacing: 0.04em;
      color: #ffff;
      margin-bottom: ${({touch,err}) => {
        
         return touch && err ? '4px' : '24px'
         }};
      border: ${(props) => (props.success ? '1px solid #3CBC81':props.err ?'1px solid #E74A3B':'1px solid rgba(146,147,153,0.8)')};
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
        border: ${(props)=>(props.success ? '1px solid #3CBC81': props.err ? '1px solid #E74A3B':'1.2px solid #ffff')};
        outline: none;

        &::placeholder{
          color:#ffff;
        }
      }

      @media screen and (min-width: 767.98px) {
        padding: 16px 8px 16px 50px;
    
      }
`;

export const FormContainer = styled.div`
  width: 290px;
  padding: 32px 28px;
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  background-color: #2A2C36;
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
  color: #FAFAFA;
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
  background-color: #f6f7fb;
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
  background-color: #8BAA36;
  color: #FAFAFA;
  margin-top: 25px;
  /* margin-right: ${props => (props.login ? '15px' : 0)}; */
  transition: transform 250ms ease;
  &:hover {
    transform: scale(1.05);
  }
`;

export const Error = styled.div`
  color: #E74A3B;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  margin-bottom: 10px;
`;
