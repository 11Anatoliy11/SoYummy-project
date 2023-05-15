import { Register } from 'components/Register/Register';
import { ReactComponent as RectangleDesk } from '../../images/svg/RectangleBlackDesk.svg';
import { ReactComponent as OrderPana } from '../../images/svg/Order-pana.svg';
import styled from '@emotion/styled';
import { ReactComponent as RectangleMob } from '../../images/svg/RectangleMob.svg';
import { useWindowSize } from 'react-use';
import img from '../../images/RectangleMob.png'
import { Link } from 'react-router-dom';


const StyledRect = styled.div`
  margin-left:auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: 100% 490px;
  background-position:bottom;
`

const imgPath = '../../images/RectangleMob.png'

const StyledLink = styled(Link)`
  text-decoration: underline;
  color:#ffff;
  margin-bottom: 118px;
  margin-top: 18px;
`;

const RegisterPage = () => {
  const {width} = useWindowSize();

  return (
  <StyledRect img={imgPath} >
    <OrderPana width='285px' height='250px' />
    <Register/>
    <StyledLink to='/signin'>Sign in</StyledLink>
  </StyledRect>
  );
};

export default RegisterPage;
