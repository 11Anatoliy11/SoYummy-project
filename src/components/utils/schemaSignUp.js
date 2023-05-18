import * as yup from 'yup';

const emailRegexp =
/^[A-Za-z0-9][A-Za-z0-9._%+-]*@[A-Za-z0-9][A-Za-z0-9.-]+\.[A-Za-z]{1,}$/;

const passwordRegexp = /^[A-Za-z0-9]|[A-Z]|[a-z]|[1-9]$/;
const nameRegexp = /^[A-Za-z0-9]|[A-Z]|[a-z]$/;

const schemaSignUp = yup.object().shape({
  name: yup.string()
  .min(3,'Name should be at least 3 characters')
  .max(15,'Max length is 15 chars')
  .matches(nameRegexp,'Name can contain A-Za-z and numbers')
  .required('Username is required'),
  email: yup
  .string()
  .required('Email is required')
  .matches(emailRegexp,'Correct format is example@mail.com'),
  password: yup
    .string()
    .required('Password is required')
    .matches(
        passwordRegexp,
        "Password must contain at least 8 characters, one uppercase, one number and one special case character"
      ),
  
});

export default schemaSignUp;
