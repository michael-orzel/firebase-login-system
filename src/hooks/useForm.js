import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export const useForm = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordConfirm, setPasswordConfirm] = useState(null);
  const [staySignedin, setStaySignedin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');
  const [formErrorTwo, setFormErrorTwo] = useState('');
  const [formSuccessTwo, setFormSuccessTwo] = useState('');

  const { 
    currentUser,
    authRegisterEmail, 
    authSigninEmail,
    authSigninSocial,
    authSignout,
    authResetPassword,
    authVerifyEmail,
    authUpdateEmail,
    authUpdatePassword
  } = useAuth();
  const history = useHistory();
  
  const formInputChange = (type, input) => {
    switch (type) {
      case 'email':
        setEmail(input);
        break;
      
      case 'password':
        setPassword(input);
        break;

      case 'passwordConfirm':
        setPasswordConfirm(input);
        break;

      default:
        break;
    }
  }

  const formPasswordsUnequal = () => {
    if(password !== passwordConfirm) {
      setFormError('Passwords do not match.');
    }
    return password !== passwordConfirm;
  }

  const formToggleSwitch = (value) => {
    setStaySignedin(value);
  }

  const formResetAlerts = () => {
    setFormError('');
    setFormErrorTwo('');
    setFormSuccess('');
    setFormSuccessTwo('');
  }

  const formHandleAuthResponse = (response) => {
    if(response.hasOwnProperty('message')) {
      setFormError(response.message);
    }
    if(response.hasOwnProperty('user')) {
      setLoading(false);
      history.push('/');
    }
  }

  async function formRegister() {
    setFormError('');
    setLoading(true);

    try {
      const response = await authRegisterEmail(email, password, staySignedin);
      formHandleAuthResponse(response);
    } catch {
      setFormError('Failed to create an account.');
    }

    setLoading(false);
  }

  async function formEmailSignin() {
    setFormError('');
    setLoading(true);
    
    try {
      const response = await authSigninEmail(email, password, staySignedin);
      formHandleAuthResponse(response);
    } catch {
      setFormError('Failed to sign in with email and password.');
    }

    setLoading(false);
  }

  async function formSocialSignin(type) {
    setFormError('');
    setLoading(true);

    try {
      const response = await authSigninSocial(type, staySignedin);
      formHandleAuthResponse(response);
    } catch {
      setFormError('Failed to sign in with ' + type + ' account.');
    }

    setLoading(false);
  }

  async function formSignout() {
    setFormError('');
    
    try {
      await authSignout();
      history.push('/signin');
    } catch {
      setFormError('Failed to sign out.');
    }
  }

  async function formResetPassword() {
    setFormSuccess('');
    setFormError('');
    setLoading(true);
    
    try {
      const response = await authResetPassword(email);
      if(response) {
        setFormError(response);
        setLoading(false);
        return;
      }
      setFormSuccess('Check your email inbox for further instructions.');
    } catch {
      setFormError('Failed to reset password.');
    }

    setLoading(false);
  }

  async function formVerifyEmail() {
    setFormSuccess('');
    setFormError('');
    setLoading(true);
    
    try {
      await authVerifyEmail(email);
      setFormSuccess('Check your inbox to verify your email.');
    } catch {
      setFormError('Failed to send email verification link.');
    }

    setLoading(false);
  }

  async function formUpdateProfile() {
    formResetAlerts();
    setLoading(true);
    
    if(email !== currentUser.email && email !== null) {
      try {
        await authUpdateEmail(email);
        setFormSuccess('Email has been updated.');
      } catch {
        setFormError('Failed to update email.');
      }
    }
    if(password) {
      try {
        await authUpdatePassword(password);
        setFormSuccessTwo('Password has been updated.');
      } catch {
        setFormErrorTwo('Failed to update password.');
      }
    }

    setLoading(false);
  }

  return {
    staySignedin,
    loading,
    formError, 
    formSuccess,
    formErrorTwo,
    formSuccessTwo,
    formInputChange,
    formPasswordsUnequal,
    formToggleSwitch,
    formResetAlerts,
    formRegister,
    formEmailSignin,
    formSocialSignin,
    formSignout,
    formResetPassword,
    formVerifyEmail,
    formUpdateProfile
  };
}
