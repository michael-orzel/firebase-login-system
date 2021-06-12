import React, { useContext, useState, useEffect } from 'react'
import firebase from 'firebase/app'
import { auth } from '../firebase'
import { useFirestore } from '../hooks/useFirestore';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const {
    firestoreCreateUser,
    firestoreUpdateUser
  } = useFirestore();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, [])

  const authPersistenceType = (staySignedin) => {
    if(!staySignedin) {
      return firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);  
    }
    return firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
  }

  async function authRegisterEmail(email, password, staySignedin) {
    authPersistenceType(staySignedin);

    const user = await auth.createUserWithEmailAndPassword(email, password)
      .then(newUser => {
        const userObj = {
          email: newUser.user.email
        };
        firestoreCreateUser(newUser.user.uid, userObj);
      },  authError => {
            return authError;
          })

      return user;
  }

  const authAssignProvider = (type) => {
    switch (type) {
      case 'Google':
        return new firebase.auth.GoogleAuthProvider();
      
      case 'Facebook':
        return new firebase.auth.FacebookAuthProvider();

      case 'Twitter':
        return new firebase.auth.TwitterAuthProvider();

      default:
        break;
    }
  }

  async function authSigninEmail(email, password, staySignedin) {    
    authPersistenceType(staySignedin);
    const user = await auth.signInWithEmailAndPassword(email, password)
      .catch(authError => {
        return authError;
      })
    
    return user;
  }

  async function authSigninSocial(type, staySignedin) {
    authPersistenceType(staySignedin);
    const provider = authAssignProvider(type);

    const user = await auth.signInWithPopup(provider)
      .then(result => {
        if(result.additionalUserInfo.isNewUser) {
          const userObj = {
            email: result.user.email
          };
          firestoreCreateUser(result.user.uid, userObj);
        }
        return result;
      },  authError => {
            return authError;
          })

      return user;
  }

  function authSignout() {
    return auth.signOut();
  }

  async function authResetPassword(email) {
    const message = await auth.sendPasswordResetEmail(email)
      .catch((error) => {
        return error.message;
      })
      return message;
  }

  async function authVerifyEmail() {
    return currentUser.sendEmailVerification();
  }

  async function authUpdateEmail(email) {
    return currentUser.updateEmail(email)
      .then(() => {
        firestoreUpdateUser(currentUser.uid, email);
      })
  }

  async function authUpdatePassword(password) {
    return currentUser.updatePassword(password);
  }

  const value = {
    currentUser,
    authRegisterEmail,
    authSigninEmail,
    authSigninSocial,
    authSignout,
    authResetPassword,
    authVerifyEmail,
    authUpdateEmail,
    authUpdatePassword
  };

  return (
    <div>
      <AuthContext.Provider value={value}>
        {!loading && children}
      </AuthContext.Provider>
    </div>
  )
}
