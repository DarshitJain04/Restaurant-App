import React, { useEffect } from 'react'
import { View, Text, StyleSheet, AsyncStorage } from 'react-native'

const IntroScreen = ({ navigation }) => {
  const setFirstTimeUser = async () => {
    try {
      await AsyncStorage.setItem('FirstTimeUser', 'No')
      navigation.navigate('Auth')
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    setFirstTimeUser()
  }, [])
  return (
    <View style={styles.container}>
      <Text>IntroScreen</Text>
    </View>
  )
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

//make this component available to the app
export default IntroScreen
