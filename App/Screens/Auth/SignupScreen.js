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
import { signUpWithEmailPassword } from '../../Utils/EmailAuth'
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
    color: theme.colors.green,
  },
  subheading: {
    textAlign: 'center',
    fontSize: hp('1.6%'),
    color: theme.colors.purple,
  },
})

const SignupScreen = ({ navigation }) => {
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
      const res = signUpWithEmailPassword(values.email, values.password)
      res.then((t) => {
        if (t === 'OK') {
          //Signed IN
          navigation.navigate('Loading')
        } else {
          //Error
          Alert.alert(t.message)
        }
      })
    },
  })
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
