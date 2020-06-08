import * as firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

export const newUserUtils = async (data) => {
  /// TODO-
  // 1.Update User Profile
  // 2.Send Verfication Email
  // 3.Upload UserData to Firestore
  try {
    await firebase.auth().currentUser.updateProfile({
      displayName: data.displayName,
      email: data.email,
      phoneNumber: data.phoneNumber,
    })
    await firebase.auth().currentUser.sendEmailVerification()
    await firebase.firestore().collection('Users').add({
      displayName: data.displayName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      // Add More Info if required here.
    })
    return 'OK'
  } catch (error) {
    return error.message
  }
}
