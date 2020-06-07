import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native'
import PropTypes from 'prop-types'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

const AuthScreenBox = ({ children, title }) => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS == 'ios' ? 'padding' : 'padding'}
      keyboardVerticalOffset={hp('5%')}
    >
      <Text style={styles.heading}>{title}</Text>
      <View style={styles.FirstBoxStyles}>{children}</View>
      <View style={styles.SecondBoxStyles} />
      <View style={styles.ThirdBoxStyles} />
    </KeyboardAvoidingView>
  )
}

const ReusableStyles = {
  backgroundColor: 'white',
  height: hp('69%'),
  width: wp('87%'),
  borderRadius: 15,
  alignSelf: 'center',
}

const styles = StyleSheet.create({
  heading: {
    fontSize: hp('5%'),
    color: 'white',
    fontFamily: 'Montserrat-Bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  FirstBoxStyles: {
    ...ReusableStyles,
    position: 'absolute',
    opacity: 1,
    zIndex: 3,
    transform: [{ scale: 1.0 }],
  },
  SecondBoxStyles: {
    ...ReusableStyles,
    position: 'absolute',
    zIndex: 2,
    top: hp('14.5%'),
    opacity: 0.8,
    transform: [{ scale: 0.9 }],
  },
  ThirdBoxStyles: {
    ...ReusableStyles,
    position: 'absolute',
    zIndex: 1,
    opacity: 0.6,
    top: hp('20%'),
    transform: [{ scale: 0.8 }],
  },
})

AuthScreenBox.propTypes = {
  children: PropTypes.array,
  title: PropTypes.string,
}

//make this component available to the app
export default AuthScreenBox
