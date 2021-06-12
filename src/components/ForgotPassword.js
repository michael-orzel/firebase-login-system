import React from 'react'
import { Link } from 'react-router-dom'
import {
  CssBaseline, Paper, Typography,
  FormControl, Input, InputLabel,
  Button, Divider, withStyles
} from '@material-ui/core'
import formStyles from './formStyles'
import { Alert } from '@material-ui/lab'
import { useForm } from '../hooks/useForm'

function ForgotPassword(props) {
  const { 
    formError,
    loading,
    formSuccess,
    formInputChange,
    formResetPassword
  } = useForm();

  const { classes } = props;

  async function handleResetPasswordSubmit(e) {
    e.preventDefault();

    formResetPassword();
  }

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Typography variant='h5' className={classes.paperHeader}>
          Password Reset
        </Typography>
        { 
          formError && 
          <Alert severity='error' className={classes.alert}>
            <strong>Error</strong> - {formError}
          </Alert> 
        }
        { 
          formSuccess && 
          <Alert severity='success' className={classes.alert}>
            <strong>Success</strong> - {formSuccess}
          </Alert> 
        }

        <form onSubmit={(e) => handleResetPasswordSubmit(e)}
          className={classes.form}>
          <FormControl required fullWidth margin='normal'>
            <InputLabel htmlFor='reset-password-email-input' className={classes.formInput}>
              Enter your email
            </InputLabel>
            <Input autoComplete='email' autoFocus 
              id='reset-password-email-input'
              onChange={(e) => formInputChange('email', e.target.value)}
              className={classes.formInput}
            />
          </FormControl>
          <Button type='submit' fullWidth 
            variant='contained' color='primary'
            disabled={loading}
            className={classes.btn}>
              Reset Password
          </Button>
        </form>

        <div className={classes.flexCenter}>
          <Typography 
            className={classes.linkHeader}>
              Know your info?
          </Typography>
          <Link to='/signin' className={classes.link}>
            Sign in
          </Link>
        </div>

        <Divider variant='middle' className={classes.divider} />

        <div className={classes.flexCenter}>
          <Typography 
            className={classes.linkHeader}>
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

export default withStyles(formStyles)(ForgotPassword);