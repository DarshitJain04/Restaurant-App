import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import * as firebase from 'firebase'
import 'firebase/auth'

const HomeScreen = ({ navigation }) => {
  const userData = navigation.getParam('user')
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Button
        title="Sign Out"
        onPress={() => {
          firebase
            .auth()
            .signOut()
            .then(
              () => {
                navigation.navigate('Loading')
              },
              (res) => {
                console.error(res)
              }
            )
        }}
      />
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

export default HomeScreen
