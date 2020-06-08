import * as firebase from 'firebase'
import 'firebase/auth'

export const signInWithFaceBook = async (token) => {
  try {
    const credential = await firebase.auth.FacebookAuthProvider.credential(
      token
    )
    // Sign in with this credential
    const Res = await firebase.auth().signInWithCredential(credential)
    console.log(Res.additionalUserInfo.isNewUser)
    return 'OK'
  } catch (error) {
    return error
  }
}
