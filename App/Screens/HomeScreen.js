import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button, Avatar } from 'react-native-elements'
import * as firebase from 'firebase'
import 'firebase/auth'
import { newUserUtils } from '../Utils/NewUserUtils'

const HomeScreen = ({ navigation }) => {
  const userData = navigation.getParam('user')
  console.log(userData)
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      {userData.photoURL ? (
        <Avatar
          size="medium"
          rounded
          source={{
            uri: userData.photoURL,
          }}
        />
      ) : (
        <Avatar size="medium" rounded icon={{ name: 'home' }} />
      )}

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
