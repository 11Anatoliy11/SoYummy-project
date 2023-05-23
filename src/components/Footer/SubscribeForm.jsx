import { useState, useEffect } from 'react';
import { ReactComponent as EmailIcon } from 'images/svg/email.svg';

import Button from 'components/Button/Button';
import InputAdornment from '@mui/material/InputAdornment';
import { useMediaQuery } from '@mui/material';
import { useIsSmallScreen } from 'hooks/useIsSmallScreen';
import TextField from '@mui/material/TextField';
import { Form, FormCont, SubsCont } from './Footer.styled';
import { subscribe } from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useAuth } from 'hooks/useAuth';

export const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [iconMarginRight, setIconMarginRight] = useState(1.5);
  const matches = useMediaQuery('(min-width:768px)');
  const isSmallScreen = useIsSmallScreen();
  const dispatch = useDispatch();
  const { subscribeMessage } = useAuth();
  console.log(subscribeMessage);

  useEffect(() => {
    if (matches) {
      setIconMarginRight(2);
    } else {
      setIconMarginRight(1.5);
    }
  }, [matches]);

  const handleEmailChange = evt => {
    const value = evt.target.value;
    setEmail(value);

    value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
      ? setIsValid(true)
      : setIsValid(false);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    dispatch(subscribe(email));
    toast.success('Subscription email sent successfully', {});
    setEmail('');
    setIsValid(false);
  };

  const buttonClassName = 'submit-button';
  const disabledButton = !isValid ? 'disabled-btn' : '';

  return (
    <FormCont>
      {!isSmallScreen && (
        <SubsCont>
          <h3>Subscribe to our Newsletter</h3>
          <p>
            Subscribe up to our newsletter. Be in touch with latest news and
            special offers, etc.
          </p>
        </SubsCont>
      )}
      <Form onSubmit={handleSubmit}>
        <TextField
          className="email-input"
          label=""
          variant="outlined"
          placeholder="Enter your email address"
          value={email}
          onChange={handleEmailChange}
          error={!isValid && email !== ''}
          helperText={!isValid && email !== '' ? 'Invalid email address' : ''}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" sx={{ mr: iconMarginRight }}>
                <EmailIcon style={{ fill: 'none' }} className="icon-email" />
              </InputAdornment>
            ),
          }}
        />
        <Button
          type="submit"
          width="204px"
          height="38px"
          disabled={!isValid}
          borderRadius="6px"
          textColor="var(--background-color)"
          backgroundColor="var(--green-color)"
          className={buttonClassName + ' ' + disabledButton}
        >
          Subcribe
        </Button>
      </Form>
    </FormCont>
  );
};
