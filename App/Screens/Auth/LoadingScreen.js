import React, { useEffect } from 'react'
import { View, StyleSheet, ActivityIndicator, AsyncStorage } from 'react-native'
import * as firebase from 'firebase'
import 'firebase/auth'
import { theme } from '../../Theme/theme'

const LoadingScreen = ({ navigation }) => {
  const isFirstTimeUser = async () => {
    try {
      const value = await AsyncStorage.getItem('FirstTimeUser')
      if (value == null) {
        navigation.navigate('Intro')
      } else {
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            //Logged In
            navigation.navigate('Home', { user: user })
          } else {
            // Logged Out
            navigation.navigate('AuthFlow')
          }
        })
      }
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    isFirstTimeUser()
  }, [])
  return (
    <View style={styles.container}>
      <ActivityIndicator color={theme.colors.purple} size="large" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default LoadingScreen
