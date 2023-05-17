import { Signin } from 'components/Signin/Signin';
import { ReactComponent as OrderPanaDesk } from '../../images/svg/Order-panaDesk.svg';
import { ReactComponent as OrderPanaMob } from '../../images/svg/Order-panaMob.svg';
import styled from '@emotion/styled';
import { useWindowSize } from 'react-use';
import rect from '../../images/RectangleMob.png'
import { Link } from 'react-router-dom';


const StyledRect = styled.div`
  margin-left:auto;
  margin-right: auto;
  margin-top: 105px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${rect});
  background-repeat: no-repeat;
  background-size: 100% 490px;
  background-position:bottom right;

  @media screen and (min-width: 767.98px){
    background-size: 100% 606px;
    margin-top:50px;
  }
  @media screen and (min-width: 1200px){
    flex-direction: row;
    align-items: flex-start;
    background-size: 100% 325px;
    margin-top:320px;
  }
`

const imgPath = '../../images/RectangleMob.png'

const StyledLink = styled(Link)`
  text-decoration: underline;
  color:var(--white-color);
  margin-bottom: 118px;
  margin-top: 18px;
`;
const SigninPage = () => {
  const { width } = useWindowSize();
  return (
    <StyledRect img={imgPath} >
      {width >= 1200 && <OrderPanaDesk width='532px' height='458px' />}
      {width <= 767.99 && <OrderPanaMob width='285px' height='250px' />}
      {width >= 767.99 && width <= 1199.98 && <OrderPanaMob width='409px' height='350px' />}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Signin />
        <StyledLink to='/register'>Sign up</StyledLink>
      </div>
    </StyledRect>
  );
};

export default SigninPage;
