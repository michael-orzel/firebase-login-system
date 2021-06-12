import { firestore } from '../firebase'

export const useFirestore = () => {

  const firestoreCreateUser = (userID, userObj) => {
    firestore
      .collection('users')
      .doc(userID)
      .set(userObj)
  }

  const firestoreUpdateUser = (userID, newEmail) => {
    firestore
      .collection('users')
      .doc(userID)
      .update({
        email: newEmail
      });
  }

  return {
    firestoreCreateUser,
    firestoreUpdateUser   
  };
}