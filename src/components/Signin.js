import React from 'react'
import { Link } from 'react-router-dom'
import {
  CssBaseline, Paper, Typography,
  FormControl, Input, InputLabel,
  Button, Switch, Divider,
  withStyles, FormControlLabel
} from '@material-ui/core'
import formStyles from './formStyles'
import {
  GoogleLoginButton,
  FacebookLoginButton,
  TwitterLoginButton
} from 'react-social-login-buttons'
import { Alert } from '@material-ui/lab'
import { useForm } from '../hooks/useForm'

function Signin(props) {
  const {
    staySignedin,
    loading,
    formError,
    formInputChange,
    formToggleSwitch,
    formEmailSignin,
    formSocialSignin,
  } = useForm();

  const { classes } = props;

  async function handleSigninSubmit(e) {
    e.preventDefault();

    formEmailSignin();
  }

  return (
    <main style={loading ? {pointerEvents: 'none', opacity: '0.4'} : {}} 
      className={classes.main}
    >
      <CssBaseline />
      <Paper className={classes.paper}>
        <Typography variant='h5' className={classes.paperHeader}>
          Sign in
        </Typography>
        { 
          formError && 
          <Alert severity='error' className={classes.alert}>
            <strong>Error</strong> - {formError}
          </Alert> 
        }

        <form onSubmit={(e) => handleSigninSubmit(e)}
          className={classes.form}>
          <FormControl required fullWidth margin='normal'>
            <InputLabel htmlFor='signin-email-input' className={classes.formInput}>
              Enter your email
            </InputLabel>
            <Input autoComplete='email' autoFocus 
              id='signin-email-input'
              onChange={(e) => formInputChange('email', e.target.value)}
              className={classes.formInput}
            />
          </FormControl>
          <FormControl required fullWidth margin='normal'>
            <InputLabel htmlFor='signin-password-input' className={classes.formInput}>
              Enter your password
            </InputLabel>
            <Input type='password'
              id='signin-password-input'
              onChange={(e) => formInputChange('password', e.target.value)}
              className={classes.formInput}
            />
          </FormControl>
          <div className={classes.flexSpaceBetween}>
            <FormControlLabel
              control={
                <Switch color='primary'
                  checked={staySignedin}
                  onChange={(e) => formToggleSwitch(e.target.checked)} />
              }
              label={<Typography className={classes.switchLabel}>Stay signed in</Typography>}
            />
            <Link to='/forgot-password' className={classes.link}>
              Forgot password?
            </Link>
          </div>
          <Button type='submit' fullWidth 
            variant='contained' color='primary'
            disabled={loading}
            className={classes.btn}
          >
              Sign in
          </Button>
        </form>

        <Divider variant='middle' className={classes.midDivider} />
        
        <Typography variant='h6' className={classes.formSubHeader}>
          Or
        </Typography>

        <GoogleLoginButton
          disabled={loading}
          onClick={() => formSocialSignin('Google')}
          style={{
            display: 'flex', 
            flexDirection: 'row',
            justifyContent: 'center', 
            alignItems: 'center',
            fontFamily: 'Poppins',
            fontSize: '17px',
            marginTop: '20px',
          }}
          size='40px'
          iconSize='24px'
        />

        <FacebookLoginButton
          disabled={loading}
          onClick={() => formSocialSignin('Facebook')}
          style={{
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            fontFamily: 'Poppins',
            fontSize: '17px',
            marginTop: '20px',
          }}
          size='40px'
          iconSize='24px'
        />

        <TwitterLoginButton
          disabled={loading}
          onClick={() => formSocialSignin('Twitter')}
          style={{
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            fontFamily: 'Poppins',
            fontSize: '17px',
            marginTop: '20px',
          }}
          size='40px'
          iconSize='24px'
        />

        <Divider variant='middle' className={classes.endDivider} />

        <div className={classes.flexCenter}>
          <Typography className={classes.linkHeader}>
              Need an account?
          </Typography>
          <Link to='/register' className={classes.link}>
            Create one
          </Link>
        </div>
      </Paper>
    </main>
  );
}

export default withStyles(formStyles)(Signin);