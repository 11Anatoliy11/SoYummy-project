import { useFormik } from 'formik';
  import {register} from 'redux/auth/auth-operations'
  import { useDispatch } from 'react-redux';
  import {useRef, useState} from 'react';
  import schemaSignIn from '../utils/schemaSignUp';
  import { ReactComponent as Person } from '../../images/svg/reg-name.svg';
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
  } from './Register.styled.js';


  const initState = {
    email: '',
    password: '',
    name:'',
  };
  const colors = {
    primary:'rgba(146,147,153,0.8)',
    warning:'#F6C23E',
    error:'#E74A3B',
    success:'#3CBC81',
    accent:'#ffff'
  }

const nameRegexp = /^[A-Za-z0-9]|[A-Z]|[a-z]$/;
const emailRegexp = /^[A-Za-z0-9][A-Za-z0-9._%+-]*@[A-Za-z0-9][A-Za-z0-9.-]+\.[A-Za-z]{1,}$/;
const passwordRegexp = /^[A-Za-z0-9]|[A-Z]|[a-z]|[1-9]$/;
// const passwordRegexp = /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;

export const Register = () => {
    const dispatch = useDispatch();
    const [focused, setFocused] = useState(null);
    const [successEmail,setSuccessEmail] = useState(null);
    const [successPass,setSuccessPass] = useState(null);
    const [successName,setSuccessName] = useState(null);
    const currEl = useRef(null);
    
    // QUESTION about re render , cause set funcs dont set to NULL
    if(currEl.current !== document.activeElement.name){
      
      currEl.current = document.activeElement.name;
      setSuccessEmail(null);
      setSuccessPass(null);
      setSuccessName(null);
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
          dispatch(register({ ...values }));
          actions.resetForm();
          setSuccessEmail(null);
          setSuccessPass(null);
          setSuccessName(null);
        }

      })

    const {handleChange,handleSubmit,errors,touched} = formik;
    const {email,password,name} = formik.values;

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

        if(name.match(nameRegexp)){
          setSuccessName(true);
          
        }else{
          setSuccessName(false);
          
        }
    }
    
    return (
        <FormContainer>
          <Text>Registration</Text>
          <Form onSubmit={handleSubmit} autoComplete='off'>
          <div style={{position:"relative", width:"100%"}}>
          <Icon>
            <Person style={{stroke:`${successName && focused === "name" ? 
              colors.success :
              errors.name && touched.name ?
               colors.error : 
               focused === "name" ? 
               colors.accent :
               colors.primary}`}}/>
            </Icon>
            <Input
              name='name'
              type="text"
              value={name}
              onChange={handleOnChange}
              placeholder="Name"
              err={errors?.name && touched?.name}
              touch={touched.name}
              onFocus={onFocus}
              onBlur={onBlur}
              success ={successName && focused === "name"}
              
            />
            {focused === "name" && successName && <IconAft><SuccessLogo/></IconAft>}
            {errors?.name && touched.name && <IconAft><ErrorLogo/></IconAft>}
            {errors?.name && touched?.name && <Error>{errors.name}</Error>}
          </div>
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
              Sign up
            </Button>
          </div>
        </Form>
        </FormContainer>
      );

};
