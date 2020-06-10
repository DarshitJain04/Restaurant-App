//import liraries
import React, { Component, useState } from 'react'
import {
  View,
  StyleSheet,
  Alert,
  Image,
  KeyboardAvoidingView,
} from 'react-native'
import { SafeAreaView } from 'react-navigation'
import * as firebase from 'firebase'
import 'firebase/auth'
import { useFormik } from 'formik'
import { Button, Input, Text } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { newUserUtils } from '../../Utils/NewUserUtils'
import { FontAwesome5 } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { theme } from '../../Theme/theme'
import { AntDesign } from '@expo/vector-icons'

// create a component

const UpdateScreen = ({ navigation }) => {
  const [onName, setOnName] = useState(false)
  const [onEmail, setOnEmail] = useState(false)
  const [onNumber, setOnNumber] = useState(false)
  const [load, setLoad] = useState(false)
  console.ignoredYellowBox = ['Setting a timer']
  const userData = navigation.getParam('user')
  const formik = useFormik({
    initialValues: {
      displayName: userData.displayName,
      email: userData.email,
      phoneNumber: userData.phoneNumber,
    },
    onSubmit: (values, actions) => {
      setLoad(true)
      // TODO-
      // 1.Update User Profile
      // 2.Send Verfication Email
      // 3.Upload UserData to Firestore
      newUserUtils(values).then((res) => {
        if (res === 'OK') {
          setLoad(false)
          // TODO , modify this alert box to properly display the success message
          Alert.alert('Success !', 'Verification link send to you mail !', [
            {
              text: 'OK',
              onPress: () => {
                // logout the user and navigate to loadingScreen
                firebase
                  .auth()
                  .signOut()
                  .then(() => {
                    navigation.navigate('Loading')
                  })
              },
            },
          ])
        } else {
          // error
          Alert.alert(res)
        }
      })
    },
  })
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'padding'}
        keyboardVerticalOffset={hp('4%')}
      >
        <Image
          style={styles.image}
          source={require('../../Assets/Images/Profile2.png')}
        />
        <View style={{ padding: 20 }}>
          <Input
            autoCorrect={false}
            onFocus={() => setOnName(true)}
            onChangeText={formik.handleChange('displayName')}
            onBlur={() => {
              setOnName(false)
              formik.handleBlur('displayName')
            }}
            inputContainerStyle={onName ? styles.inputFocused : {}}
            value={formik.values.displayName}
            placeholder="Name"
            label="Name"
            leftIcon={
              <FontAwesome5
                name="user-alt"
                size={24}
                color={theme.colors.purple}
              />
            }
            autoCapitalize="none"
          />
          <Input
            autoCorrect={false}
            onFocus={() => setOnEmail(true)}
            keyboardType="email-address"
            onChangeText={formik.handleChange('email')}
            onBlur={() => {
              setOnEmail(false)
              formik.handleBlur('email')
            }}
            inputContainerStyle={onEmail ? styles.inputFocused : {}}
            value={formik.values.email}
            label="Email"
            placeholder="Email"
            leftIcon={
              <Icon name="email" size={24} color={theme.colors.purple} />
            }
            autoCapitalize="none"
          />
          <Input
            autoCorrect={false}
            onFocus={() => setOnNumber(true)}
            keyboardType="numeric"
            onChangeText={formik.handleChange('phoneNumber')}
            onBlur={() => {
              setOnNumber(false)
              formik.handleBlur('phoneNumber')
            }}
            value={formik.values.phoneNumber}
            inputContainerStyle={onNumber ? styles.inputFocused : {}}
            label="Mobile"
            placeholder="+91"
            leftIcon={
              <MaterialIcons
                name="call"
                size={24}
                color={theme.colors.purple}
              />
            }
            autoCapitalize="none"
          />
        </View>
        <Button
          loading={load}
          containerStyle={{ margin: 20 }}
          title="Submit"
          onPress={formik.handleSubmit}
          raised={true}
          buttonStyle={{
            height: hp('7%'),
            backgroundColor: theme.colors.purple,
          }}
          containerStyle={{
            width: wp('30%'),
            borderRadius: hp('5%'),
            alignSelf: 'center',
          }}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    height: hp('31%'),
    width: wp('100%'),
  },
  inputFocused: {
    borderBottomColor: theme.colors.purple,
    borderBottomWidth: 2,
  },
})

export default UpdateScreen
