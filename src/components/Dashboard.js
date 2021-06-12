import React from 'react'
import { Link } from 'react-router-dom'
import {
  CssBaseline, Paper, Typography,
  Button, withStyles
} from '@material-ui/core'
import formStyles from './formStyles'
import { Alert } from '@material-ui/lab'
import { useAuth } from '../contexts/AuthContext'
import { useForm } from '../hooks/useForm'

function Dashboard(props) {
  const { currentUser } = useAuth();
  const { 
    formError, 
    formSuccess, 
    formSignout, 
    formVerifyEmail 
  } = useForm();
  
  const { classes } = props;

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Typography variant='h5' className={classes.paperHeader}>
          Profile
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

        { 
          currentUser && 
          <Typography className={classes.userInfo}>
            <strong>User:</strong> {currentUser.email}
          </Typography>
        }
        
        <Link to='/update-profile' className={classes.link}>
          Update Profile
        </Link>
        
        {
          !currentUser.emailVerified && currentUser.email &&
          <Button type='button' fullWidth
            variant='contained' color='primary'
            onClick={() => formVerifyEmail()}
            className={classes.btn}>
              Verify Email
          </Button>
        }
        <Button type='button' fullWidth
          variant='contained' color='primary'
          onClick={() => formSignout()}
          className={classes.btn}>
            Sign out
        </Button>
      </Paper>
    </main>
  )
}

export default withStyles(formStyles)(Dashboard);