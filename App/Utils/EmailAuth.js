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

export const signInWithFaceBook = async (token) => {
  try {
    const credential = await firebase.auth.FacebookAuthProvider.credential(
      token
    )
    // Sign in with this credential
    await firebase.auth().signInWithCredential(credential)
    return 'OK'
  } catch (error) {
    return error
  }
}
