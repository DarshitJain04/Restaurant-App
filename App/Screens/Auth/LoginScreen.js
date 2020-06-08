import React from 'react'
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
import {
  signInWithEmailPassword,
  signInWithFaceBook,
} from '../../Utils/EmailAuth'
import * as Facebook from 'expo-facebook'
import { SocialIcon } from 'react-native-elements'

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
    color: theme.colors.purple,
  },
  subheading: {
    textAlign: 'center',
    fontSize: hp('1.6%'),
    color: theme.colors.green,
  },
})

const LoginScreen = ({ navigation }) => {
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
      signInWithEmailPassword(values.email, values.password).then((res) => {
        if (res === 'OK') {
          // Logged In
          navigation.navigate('Loading')
        } else {
          // Error
          Alert.alert(res.message)
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
            Alert.alert(t.message)
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
        <AuthScreenBox title="Sign In">
          <Image source={require('../../Assets/Images/Plate.png')} />
          <Text style={styles.heading}>Welcome</Text>
          <Text style={styles.subheading}>We love to see you again.</Text>
          <View style={{ padding: 20 }}>
            <Input
              onBlur={formik.handleBlur('email')}
              errorMessage={formik.touched.email && formik.errors.email}
              value={formik.values.email}
              onChangeText={formik.handleChange('email')}
              placeholder="email@address.com"
              leftIcon={<Icon name="email" size={20} color="black" />}
              autoCapitalize="none"
            />
            <Input
              onBlur={formik.handleBlur('password')}
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
              icon={<Icon name="arrow-right" size={15} color="white" />}
            />
          </View>
        </AuthScreenBox>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            paddingBottom: 50,
          }}
        >
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
          <Text style={{ color: '#FFFFFF', fontSize: hp('3%') }}>OR</Text>
          <Button
            onPress={() => {
              navigation.navigate('Signup')
            }}
            type="solid"
            raised={true}
            titleStyle={{ color: '#00BA40' }}
            buttonStyle={{
              backgroundColor: '#FFFFFF',
              height: hp('7%'),
            }}
            containerStyle={{
              borderRadius: 12,
              width: wp('40%'),
            }}
            title="Sign Up"
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}
export default LoginScreen
