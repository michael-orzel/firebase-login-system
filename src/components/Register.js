import React from 'react'
import { Link } from 'react-router-dom'
import {
  CssBaseline, Paper, Typography,
  FormControl, Input, InputLabel,
  Button, Switch, Divider, 
  withStyles, FormControlLabel
} from '@material-ui/core'
import formStyles from './formStyles'
import { Alert } from '@material-ui/lab'
import { useForm } from '../hooks/useForm'

function Register(props) {
  const {
    staySignedin,
    loading,
    formError,
    formInputChange,
    formPasswordsUnequal,
    formToggleSwitch,
    formRegister
  } = useForm();

  const { classes } = props;

  async function handleRegisterSubmit(e) {
    e.preventDefault();

    if(formPasswordsUnequal()) return;
    formRegister();
  }

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Typography variant='h5' className={classes.paperHeader}>
          Register
        </Typography>
        { 
          formError && 
          <Alert severity='error' className={classes.alert}>
            <strong>Error</strong> - {formError}
          </Alert> 
        }
        
        <form onSubmit={(e) => handleRegisterSubmit(e)} className={classes.form}>
          <FormControl required fullWidth margin='normal'>
            <InputLabel htmlFor='register-email-input' className={classes.formInput}>
              Enter your email
            </InputLabel>
            <Input autoComplete='email' autoFocus 
              id='register-email-input'
              onChange={(e) => formInputChange('email', e.target.value)} 
              className={classes.formInput}
            />
          </FormControl>
          <FormControl required fullWidth margin='normal'>
            <InputLabel htmlFor='register-password-input' className={classes.formInput}>
              Create a password
            </InputLabel>
            <Input type='password'
              id='register-password-input'
              onChange={(e) => formInputChange('password', e.target.value)}
              className={classes.formInput}
            />
          </FormControl>
          <FormControl required fullWidth margin='normal'>
            <InputLabel htmlFor='register-password-confirm-input' className={classes.formInput}>
              Confirm your password
            </InputLabel>
            <Input type='password'
              id='register-password-confirm-input'
              onChange={(e) => formInputChange('passwordConfirm', e.target.value)}
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
          </div>
          <Button type='submit' fullWidth
            variant='contained' color='primary'
            disabled={loading}
            className={classes.btn}>
            Submit
          </Button>
        </form>

        <Divider variant='middle' className={classes.endDivider} />

        <div className={classes.flexCenter}>
          <Typography 
            className={classes.linkHeader}>
              Have an account?
          </Typography>
          <Link to='/signin' className={classes.link}>
            Sign in
          </Link>
        </div>
      </Paper>
    </main>
  )
}

export default withStyles(formStyles)(Register);