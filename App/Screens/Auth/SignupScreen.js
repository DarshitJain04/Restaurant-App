import React, { useState } from 'react'
import {
  ImageBackground,
  Dimensions,
  StatusBar,
  Image,
  StyleSheet,
  View,
  SafeAreaView,
  Alert,
  Platform,
} from 'react-native'
import AuthScreenBox from '../../Components/AuthScreenBox'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { Button, Input, Text } from 'react-native-elements'
import { useFormik } from 'formik'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { theme } from '../../Theme/theme'
import * as Yup from 'yup'
import { signUpWithEmailPassword } from '../../Utils/EmailAuth'
import { signInWithFaceBook } from '../../Utils/FaceBookAuth'
import { SocialIcon } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
  ImageBackgroundStyles: {
    width: width,
    height: height,
  },
  heading: {
    textAlign: 'center',
    fontSize: hp('4.5%'),
    marginTop: -25,
    color: theme.colors.green,
  },
  subheading: {
    textAlign: 'center',
    fontSize: hp('1.6%'),
    color: theme.colors.purple,
  },
  inputFocused: {
    borderBottomColor: theme.colors.purple,
    borderBottomWidth: 2,
  },
})

const SignupScreen = ({ navigation }) => {
  const [onEmail, setOnEmail] = useState(false)
  const [onPassword, setOnPassword] = useState(false)
  const [load, setLoad] = useState(false)
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().min(6).required(),
    }),
    onSubmit: (values) => {
      setLoad(true)
      const res = signUpWithEmailPassword(values.email, values.password)
      res.then((t) => {
        if (t === 'OK') {
          //Signed IN
          setLoad(false)
          navigation.navigate('Loading')
        } else {
          //Error
          Alert.alert('Error', t.message)
        }
      })
    },
  })
  const facebook = async () => {
    try {
      await Facebook.initializeAsync('260179991894606', 'Resturant App')
      const Response = await Facebook.logInWithReadPermissionsAsync()
      if (Response.type === 'success') {
        // Login with Facebook
        const Res = signInWithFaceBook(Response.token)
        Res.then((t) => {
          if (t === 'OK') {
            //Signin IN
            navigation.navigate('Loading')
          } else {
            //Error
            Alert.alert('Error', t.message)
          }
        })
      }
    } catch (error) {
      Alert.alert(error.message)
    }
  }

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <ImageBackground
        source={require('../../Assets/Images/Background.png')}
        style={styles.ImageBackgroundStyles}
      >
        <AuthScreenBox title="Sign Up">
          <Image source={require('../../Assets/Images/Plate.png')} />
          <Text style={styles.heading}>Join Us Today !</Text>
          <Text style={styles.subheading}>We would love you to join us</Text>
          <View style={{ padding: 20 }}>
            <Input
              onFocus={() => setOnEmail(true)}
              onBlur={() => {
                setOnEmail(false)
                formik.handleBlur('email')
              }}
              inputContainerStyle={onEmail ? styles.inputFocused : {}}
              keyboardType="email-address"
              onBlur={formik.handleBlur('email')}
              errorMessage={formik.touched.email && formik.errors.email}
              value={formik.values.email}
              onChangeText={formik.handleChange('email')}
              placeholder="email@address.com"
              leftIcon={<Icon name="email" size={20} color="black" />}
              autoCapitalize="none"
            />
            <Input
              onFocus={() => setOnPassword(true)}
              onBlur={() => {
                setOnPassword(false)
                formik.handleBlur('password')
              }}
              inputContainerStyle={onPassword ? styles.inputFocused : {}}
              errorMessage={formik.touched.password && formik.errors.password}
              value={formik.values.password}
              onChangeText={formik.handleChange('password')}
              secureTextEntry={true}
              placeholder="Password"
              leftIcon={<Icon name="lock" size={20} color="black" />}
              autoCapitalize="none"
            />
          </View>
          <View>
            <Button
              loading={load}
              onPress={formik.handleSubmit}
              buttonStyle={{
                height: hp('6%'),
                width: wp('20%'),
                backgroundColor: theme.colors.purple,
              }}
              containerStyle={{
                alignSelf: 'center',
                marginTop: -20,
              }}
              icon={
                <Ionicons
                  name="ios-arrow-round-forward"
                  size={hp('5%')}
                  color="white"
                />
              }
            />
          </View>
        </AuthScreenBox>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginBottom: 50,
          }}
        >
          <Button
            onPress={() => {
              navigation.navigate('Login')
            }}
            type="solid"
            raised={true}
            buttonStyle={{
              backgroundColor: '#6644CC',
              height: hp('7%'),
            }}
            containerStyle={{
              borderRadius: 12,
              width: wp('40%'),
            }}
            title="Sign In"
          />
          <Text style={{ color: '#FFFFFF', fontSize: hp('3%') }}>OR</Text>
          <SocialIcon
            onPress={() => {
              {
                Platform.OS === 'android'
                  ? facebook()
                  : Alert.alert('Currently Not Supported for iOS')
              }
            }}
            type="facebook"
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}
export default SignupScreen
