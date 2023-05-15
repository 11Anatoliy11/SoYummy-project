import { useFormik } from 'formik';
  import {login} from 'redux/auth/auth-operations'
  import { useDispatch } from 'react-redux';
  import {useRef, useState} from 'react';
  import schemaSignIn from '../utils/schemaSignIn';
  import { ReactComponent as Lock } from '../../images/svg/reg-password.svg';
  import { ReactComponent as Email } from '../../images/svg/reg-email.svg';
  import { ReactComponent as ErrorLogo } from '../../images/svg/Error-logo.svg';
  import { ReactComponent as SuccessLogo } from '../../images/svg/Success.svg';
  import {
    Form,
    FormContainer,
    Text,
    Button,
    Error,
    Icon,
    Input,
    IconAft,
  } from './Signin.styled.js';


  const initState = {
    email: '',
    password: '',
  };
  const colors = {
    primary:'rgba(146,147,153,0.8)',
    warning:'#F6C23E',
    error:'#E74A3B',
    success:'#3CBC81',
    accent:'#ffff'
  }


const emailRegexp =/^[A-Za-z0-9][A-Za-z0-9._%+-]*@[A-Za-z0-9][A-Za-z0-9.-]+\.[A-Za-z]{1,}$/;

const passwordRegexp = /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;

export const Signin = () => {
    const dispatch = useDispatch();
    const [focused, setFocused] = useState(null);
    const [successEmail,setSuccessEmail] = useState(null);
    const [successPass,setSuccessPass] = useState(null);
   
    const currEl = useRef(null);
    
    // QUESTION about re-render , cause set funcs dont set to NULL
    if(currEl.current !== document.activeElement.name){
      
      currEl.current = document.activeElement.name;
      setSuccessEmail(null);
      setSuccessPass(null);
      
    }

    const onFocus = (e) => {
      setFocused(e.target.name);
    }
    const onBlur = (e) => setFocused(null);

    const formik = useFormik({
        initialValues:initState,
        validationSchema:schemaSignIn,
        validateOnChange:true,
        onSubmit:(values,actions) => {
          console.log(values)
          dispatch(login({ ...values }));
          actions.resetForm();
          setSuccessEmail(null);
          setSuccessPass(null);
          
        }

      })

    const {handleChange,handleSubmit,errors,touched} = formik;
    const {email,password} = formik.values;

    const handleOnChange = (e) => {
        handleChange(e);
        if(email.match(emailRegexp)){
          setSuccessEmail(true);
        }else{
          setSuccessEmail(false);
        }
        if(password.match(passwordRegexp)){
          setSuccessPass(true);
         
        }else{
          setSuccessPass(false);
        }
    }
    
    return (
        <FormContainer>
          <Text>Sign In</Text>
          <Form onSubmit={handleSubmit} autoComplete='off'>
          <div style={{position:"relative"}}>
          <Icon>
            <Email style={{stroke:`${successEmail && focused === "email" ? 
              colors.success:
              errors.email && touched.email ? 
              colors.error : 
              focused === "email" ? 
              colors.accent : 
              colors.primary}`}}/>
            </Icon>
            <Input
              name='email'
              type="text"
              value={email}
              onChange={handleOnChange}
              placeholder="Email"
              err={errors?.email && touched.email}
              touch={touched?.email}
              onFocus={onFocus}
              onBlur={onBlur}
              success={successEmail && focused === "email"}
            />
            {focused === "email" && successEmail && <IconAft><SuccessLogo/></IconAft>}
            {errors?.email && touched.email && <IconAft><ErrorLogo/></IconAft>}
            {errors?.email && touched?.email && <Error>{errors.email}</Error>}
          </div>
          <div style={{position:"relative"}}>
            <Icon>
              <Lock style={{stroke:`${successPass && focused === "password" ?
              colors.success:
              errors?.password && touched?.password ? 
              colors.error : 
              focused === "password" ? 
              colors.accent : 
              colors.primary}`}}/>
            </Icon>
            <Input
            name='password'
              type="password"
              value={password}
              onChange={handleOnChange}
              placeholder="Password"
              err={errors?.password && touched?.password}
              touch={touched?.password}
              success={successPass && focused === "password"}
              onFocus={onFocus}
              onBlur={onBlur}
             
            />
            {focused === "password" && successPass && <IconAft><SuccessLogo/></IconAft>}
            {errors?.password && touched.password && <IconAft><ErrorLogo/></IconAft>}
            {errors?.password && touched?.password && <Error>{errors.password}</Error>}
          </div>

          <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            <Button type="submit" >
              Sign In
            </Button>
          </div>
        </Form>
        </FormContainer>
      );

};
