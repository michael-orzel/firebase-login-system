import React from 'react'
import { Link } from 'react-router-dom'
import {
  CssBaseline, Paper, Typography,
  FormControl, Input, InputLabel,
  Button, Divider, withStyles
} from '@material-ui/core'
import formStyles from './formStyles'
import { Alert } from '@material-ui/lab'
import { useAuth } from '../contexts/AuthContext'
import { useForm } from '../hooks/useForm'

function UpdateProfile(props) {
  const { currentUser } = useAuth();
  const {
    loading,
    formError,
    formErrorTwo,
    formSuccess,
    formSuccessTwo,
    formInputChange,
    formPasswordsUnequal,
    formResetAlerts,
    formUpdateProfile
  } = useForm();

  const { classes } = props;

  async function handleUpdateProfileSubmit(e) {
    e.preventDefault();

    if(formPasswordsUnequal()) {
      formResetAlerts();
      formPasswordsUnequal();
      return;
    }
    formUpdateProfile();
  }

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Typography variant='h5' className={classes.paperHeader}>
          Update Profile
        </Typography>
        { 
          formError && 
          <Alert severity='error' className={classes.alert}>
            <strong>Error</strong> - {formError}
          </Alert> 
        }
        { 
          formErrorTwo && 
          <Alert severity='error' className={classes.alert}>
            <strong>Error</strong> - {formErrorTwo}
          </Alert> 
        }
        { 
          formSuccess && 
          <Alert severity='success' className={classes.alert}>
            <strong>Success</strong> - {formSuccess}
          </Alert> 
        }
        { 
          formSuccessTwo && 
          <Alert severity='success' className={classes.alert}>
            <strong>Success</strong> - {formSuccessTwo}
          </Alert> 
        }

        <form onSubmit={(e) => handleUpdateProfileSubmit(e)}
          className={classes.form}>
          <FormControl required fullWidth margin='normal'>
            <InputLabel htmlFor='update-profile-email-input' className={classes.formInput}>
              Change your email
            </InputLabel>
            <Input autoComplete='email' autoFocus 
              defaultValue={currentUser.email}
              id='update-profile-email-input'
              onChange={(e) => formInputChange('email', e.target.value)}
              className={classes.formInput}
            />
          </FormControl>
          <FormControl fullWidth margin='normal'>
            <InputLabel htmlFor='profile-update-password-input' className={classes.formInput}>
              Change your password?
            </InputLabel>
            <Input type='password'
              id='profile-update-password-input'
              placeholder='Leave blank to keep current password'
              onChange={(e) => formInputChange('password', e.target.value)}
              className={classes.formInput}
            />
          </FormControl>
          <FormControl fullWidth margin='normal'>
            <InputLabel htmlFor='profile-update-password-confirm-input' className={classes.formInput}>
              Confirm new password
            </InputLabel>
            <Input type='password'
              id='profile-update-password-confirm-input'
              placeholder='Leave blank to keep current password'
              onChange={(e) => formInputChange('passwordConfirm', e.target.value)}
              className={classes.formInput}
            />
          </FormControl>
          <Button type='submit' fullWidth 
            variant='contained' color='primary'
            disabled={loading}
            className={classes.btn}>
              Update
          </Button>
        </form>

        <Divider variant='middle' className={classes.updateProfileDivider} />

        <Link to='/' className={classes.link}>
        Cancel update
      </Link>
      </Paper>
    </main>
  );
}

export default withStyles(formStyles)(UpdateProfile);