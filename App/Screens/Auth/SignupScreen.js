import React, { useContext, useEffect } from 'react'
import {
  Text,
  ImageBackground,
  Dimensions,
  StatusBar,
  Image,
  StyleSheet,
  View,
} from 'react-native'
import AuthScreenBox from '../../Components/AuthScreenBox'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { Button } from 'react-native-elements'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const styles = StyleSheet.create({
  ImageBackgroundStyles: {
    width: width,
    height: height,
  },
  heading: {
    textAlign: 'center',
    fontSize: hp('4.3%'),
    marginTop: -25,
    fontFamily: 'Montserrat-Bold',
  },
  subheading: {
    textAlign: 'center',
    fontSize: hp('1.6%'),
    fontFamily: 'Montserrat-Bold',
  },
})

const SignupScreen = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ImageBackground
        source={require('../../Assets/Images/Background.png')}
        style={styles.ImageBackgroundStyles}
      >
        <AuthScreenBox title="Sign Up">
          <Image source={require('../../Assets/Images/Plate.png')} />
          <Text style={styles.heading}>Welcome</Text>
          <Text style={styles.subheading}>We love to see you again.</Text>
          <Text style={styles.subheading}>Form</Text>
        </AuthScreenBox>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <Button
            type="solid"
            onPress={() => {
              navigation.navigate('Login')
            }}
            titleStyle={{ color: '#6644CC' }}
            raised={true}
            buttonStyle={{
              backgroundColor: '#FFFFFF',
              height: hp('7%'),
            }}
            containerStyle={{
              borderRadius: 12,
              marginBottom: 50,
              width: wp('40%'),
            }}
            title="Sign In"
          />
          <Button
            type="solid"
            raised={true}
            buttonStyle={{
              backgroundColor: '#00BA40',
              height: hp('7%'),
            }}
            containerStyle={{
              borderRadius: 12,
              marginBottom: 50,
              width: wp('40%'),
            }}
            title="Sign Up"
          />
        </View>
      </ImageBackground>
    </>
  )
}
export default SignupScreen
