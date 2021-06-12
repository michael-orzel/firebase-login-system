import React from 'react'
import { Switch, BrowserRouter as Router } from 'react-router-dom'
import { AuthProvider } from '../contexts/AuthContext'
import Dashboard from './Dashboard'
import UpdateProfile from './UpdateProfile'
import Register from './Register'
import Signin from './Signin'
import ForgotPassword from './ForgotPassword'
import SignedInRoute from '../PrivateRoutes/SignedInRoute'
import SignedOutRoute from '../PrivateRoutes/SignedOutRoute'

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <div id='root'>  
          <Switch>
            <SignedInRoute exact path="/" component={Dashboard} />
            <SignedInRoute path="/update-profile" component={UpdateProfile} />
            <SignedOutRoute path="/register" component={Register} />
            <SignedOutRoute path="/signin" component={Signin} />
            <SignedOutRoute path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </div>
      </AuthProvider>
    </Router>
  )
}