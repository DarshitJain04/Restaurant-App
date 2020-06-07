import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

const AuthScreenBox = ({ children, title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{title}</Text>
      <View style={styles.FirstBoxStyles}>{children}</View>
    </View>
  )
}

const ReusableStyles = {
  backgroundColor: 'white',
  height: hp('62%'),
  width: wp('87%'),
  borderRadius: 15,
  alignSelf: 'center',
}

const styles = StyleSheet.create({
  heading: {
    fontSize: hp('3.0%'),
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
  },
  SecondBoxStyles: {
    ...ReusableStyles,
    width: 290,
    height: 300,
    opacity: 0.8,
  },
  ThirdBoxStyles: {
    ...ReusableStyles,
    width: 250,
    height: 300,
    opacity: 0.5,
  },
})

AuthScreenBox.propTypes = {
  children: PropTypes.array,
  title: PropTypes.string,
}

//make this component available to the app
export default AuthScreenBox
