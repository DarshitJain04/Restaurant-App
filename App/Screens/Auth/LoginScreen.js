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
import { signInWithEmailPassword } from '../../Utils/EmailAuth'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
  ImageBackgroundStyles: {
    width: width,
    height: height,
  },
  heading: {
    textAlign: 'center',
    fontSize: hp('5.7%'),
    marginTop: -25,
    color: theme.colors.purple,
  },
  subheading: {
    textAlign: 'center',
    fontSize: hp('1.4%'),
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
            />
            <Input
              onBlur={formik.handleBlur('password')}
              errorMessage={formik.touched.password && formik.errors.password}
              value={formik.values.password}
              onChangeText={formik.handleChange('password')}
              secureTextEntry={true}
              placeholder="Password"
              leftIcon={<Icon name="lock" size={20} color="black" />}
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
