import * as firebase from 'firebase'
import 'firebase/auth'

export const signUpWithEmailPassword = async (email, password) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    return 'OK'
  } catch (error) {
    return error
  }
}

export const signInWithEmailPassword = async (email, password) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password)
    return 'OK'
  } catch (error) {
    return error
  }
}
