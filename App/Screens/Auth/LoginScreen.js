import React from 'react'
import {
  Text,
  ImageBackground,
  Dimensions,
  StatusBar,
  Image,
  StyleSheet,
} from 'react-native'
import AuthScreenBox from '../../Components/AuthScreenBox'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const styles = StyleSheet.create({
  ImageBackgroundStyles: {
    width: width,
    height: height,
    resizeMode: 'cover',
  },
  heading: {
    textAlign: 'center',
    fontSize: hp('4.3%'),
    marginTop: -25,
  },
  subheading: {
    textAlign: 'center',
    fontSize: hp('1.6%'),
  },
})

const LoginScreen = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ImageBackground
        source={require('../../Assets/Images/Background.png')}
        style={styles.ImageBackgroundStyles}
      >
        <AuthScreenBox title="Sign In">
          <Image source={require('../../Assets/Images/Plate.png')} />
          <Text style={styles.heading}>Welcome Back</Text>
          <Text style={styles.subheading}>We love to see you again.</Text>
          <Text style={styles.subheading}>Form</Text>
        </AuthScreenBox>
      </ImageBackground>
    </>
  )
}
export default LoginScreen
