//import liraries
import React, { Component } from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import * as firebase from 'firebase'
import 'firebase/auth'
import { useFormik } from 'formik'
import { Button, Input, Text } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { newUserUtils } from '../../Utils/NewUserUtils'

// create a component
const UpdateScreen = ({ navigation }) => {
  const userData = navigation.getParam('user')
  console.log(userData)
  const formik = useFormik({
    initialValues: {
      displayName: userData.displayName,
      email: userData.email,
      phoneNumber: userData.phoneNumber,
    },
    onSubmit: (values) => {
      // TODO-
      // 1.Update User Profile
      // 2.Send Verfication Email
      // 3.Upload UserData to Firestore
      newUserUtils(values).then((res) => {
        if (res === 'OK') {
          // TODO , modify this alert box to properly display the success message
          Alert.alert('Verification Link Sent to Your mail.')
        } else {
          // error
          Alert.alert(res)
        }
      })
      //   Alert.alert(JSON.stringify(values))
    },
  })
  return (
    <View>
      <Text style={{ textAlign: 'center' }}>UpdateScreen</Text>
      <View style={{ padding: 20 }}>
        <Input
          onChangeText={formik.handleChange('displayName')}
          onBlur={formik.handleBlur('displayName')}
          value={formik.values.displayName}
          placeholder="Name"
          label="Name"
        />
        <Input
          keyboardType="email-address"
          onChangeText={formik.handleChange('email')}
          onBlur={formik.handleBlur('email')}
          value={formik.values.email}
          label="Email"
          placeholder="Email"
        />
        <Input
          keyboardType="numeric"
          onChangeText={formik.handleChange('phoneNumber')}
          onBlur={formik.handleBlur('phoneNumber')}
          value={formik.values.phoneNumber}
          label="Mobile"
          placeholder="+91"
        />
      </View>
      <Button
        containerStyle={{ margin: 20 }}
        title="Submit"
        onPress={formik.handleSubmit}
      />
      <Button
        containerStyle={{ margin: 20 }}
        title="Send Verification Email"
        onPress={() => {
          const user = firebase.auth().currentUser
          user.sendEmailVerification().then(
            (res) => {
              Alert.alert('Email Sent')
            },
            (res) => {
              Alert.alert(res.message)
            }
          )
        }}
      />
      <Button
        containerStyle={{ margin: 20 }}
        title="Sign Out"
        onPress={() => {
          firebase
            .auth()
            .signOut()
            .then(
              () => {
                navigation.navigate('Loading')
              },
              (res) => {
                console.error(res)
              }
            )
        }}
      />
    </View>
  )
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default UpdateScreen
