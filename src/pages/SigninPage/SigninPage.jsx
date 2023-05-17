import { Signin} from 'components/Signin/Signin';
import { ReactComponent as OrderPanaDesk } from '../../images/svg/Order-panaDesk.svg';
import { ReactComponent as OrderPanaMob } from '../../images/svg/Order-panaMob.svg';
import { useWindowSize } from 'react-use';
import { FormWrapper, StyledLink, StyledRect, Wrapper } from '../RegisterPage/RegisterPage.styled';


// const StyledRect = styled.div`
//   margin-left:auto;
//   margin-right: auto;
//   margin-top: 225px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   background-image: url(${rect});
//   background-repeat: no-repeat;
//   background-size: 100% 490px;
//   background-position:bottom;

//   @media screen and (min-width: 767.98px){
//     background-size: 100% 520px;
//     margin-top:100px;
//   }
//   @media screen and (min-width: 1200px){
//     flex-direction: row;
//     align-items: flex-start;
//     background-size: 100% 325px;
//     margin-top:445px;
//   }
// `;

// const StyledLink = styled(Link)`
//   text-decoration: underline;
//   color:#ffff;
//   margin-bottom: 118px;
//   margin-top: 18px;
// `;
const SigninPage = () => {
  const {width} = useWindowSize();
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
