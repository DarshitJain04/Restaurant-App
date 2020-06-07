import React from 'react'
import {
  Text,
  ImageBackground,
  Dimensions,
  StatusBar,
  Image,
  StyleSheet,
  View,
  SafeAreaView,
} from 'react-native'
import AuthScreenBox from '../../Components/AuthScreenBox'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { Button, Input } from 'react-native-elements'
import { Formik } from 'formik'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

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
  },
  subheading: {
    textAlign: 'center',
    fontSize: hp('1.6%'),
  },
})

const LoginScreen = ({ navigation }) => {
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
              placeholder="email@address.com"
              leftIcon={<Icon name="email" size={20} color="black" />}
            />
            <Input
              secureTextEntry={true}
              placeholder="Password"
              leftIcon={<Icon name="lock" size={20} color="black" />}
            />
          </View>
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
            raised={true}
            buttonStyle={{
              backgroundColor: '#6644CC',
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
              marginBottom: 50,
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
