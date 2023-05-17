import styled from "@emotion/styled";
import rect from '../../images/RectangleMob.png'
import { Link } from "react-router-dom";

export const StyledRect = styled.div`
  width:100vw;
  height:100vh;
  position:relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${rect});
  background-repeat: no-repeat;
  background-size: 100% 490px;
  background-position:bottom right;

  @media screen and (min-width: 767.98px){
    background-size: 100% 566px;
    
  }
  @media screen and (min-width: 1200px){
    flex-direction: row;
    align-items: flex-start;
    background-size: 100% 425px;
    
  }
`

export const StyledLink = styled(Link)`
  text-decoration: underline;
  color:#ffff;
  margin-top: 18px;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
    margin:0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    gap:0px;
    position: absolute;
    bottom:100px;
    
    @media screen and (min-width: 767.98px){
    bottom:${props=>props.signin ? '140px': '60px'};
    align-items: center;
    
  }

    @media screen and (min-width: 1200px){
    gap:50px;
    flex-direction: row;
    bottom:252px;
  }

  >svg{
    position: absolute;
    top:-220px;
    z-index: -1;

    @media screen and (min-width: 767.98px){
        top:-345px;
        z-index: 10;
  }

    @media screen and (min-width: 1200px){
    position:relative;
    top:0;
    z-index: 10;
  }
  }
`;