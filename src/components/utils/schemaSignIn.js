import * as yup from 'yup';

const emailRegexp =
  /^[A-Za-z0-9][A-Za-z0-9._%+-]*@[A-Za-z0-9]{1,5}\.[A-Za-z]{1,}$/;


const schemaSignIn = yup.object().shape({
  email: yup
  .string()
  .matches(emailRegexp,'Incorrect format')
  .required('Email is required'),
  password: yup
    .string()
    .required('Password is required'),
});

export default schemaSignIn;