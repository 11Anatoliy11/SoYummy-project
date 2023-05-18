import { Signin } from 'components/Signin/Signin';
import { ReactComponent as OrderPanaDesk } from '../../images/svg/Order-panaDesk.svg';
import { ReactComponent as OrderPanaMob } from '../../images/svg/Order-panaMob.svg';
import { useWindowSize } from 'react-use';
import { FormWrapper, StyledLink, StyledRect, Wrapper } from '../RegisterPage/RegisterPage.styled';



const SigninPage = () => {
  const { width } = useWindowSize();
  return (
    <StyledRect>
    <Wrapper signin={true}>
      {width >= 1200 && <OrderPanaDesk width='562px' height='498px' />}
      {width<= 767.99 && <OrderPanaMob width='285px' height='250px' />}
      {width>= 767.99 && width <= 1199.98 && <OrderPanaMob width='409px' height='359px' />}
      <FormWrapper>
        <Signin/>
        <StyledLink to='/register'>Register</StyledLink>
      </FormWrapper>
    </Wrapper>
  </StyledRect>
    );
};

export default SigninPage;
