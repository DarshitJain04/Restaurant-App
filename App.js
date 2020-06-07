import React, { useState } from 'react'
import RootNav from './App/Navigator/RootNav'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import { ThemeProvider } from 'react-native-elements'
import { theme } from './App/Theme/theme'
import * as firebase from 'firebase'

const loadFont = () => {
  return Font.loadAsync({
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Black': require('./assets/fonts/Montserrat-Black.ttf'),
    'Montserrat-BoldItalic': require('./assets/fonts/Montserrat-BoldItalic.ttf'),
    'Montserrat-ExtraBold': require('./assets/fonts/Montserrat-ExtraBold.ttf'),
    'Montserrat-ExtraLight': require('./assets/fonts/Montserrat-ExtraLight.ttf'),
    'Montserrat-Italic': require('./assets/fonts/Montserrat-Italic.ttf'),
    'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'),
    'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
    'Montserrat-Thin': require('./assets/fonts/Montserrat-Thin.ttf'),
  })
}

const firebaseConfig = {
  apiKey: 'AIzaSyDaHwJGa430Ls9EVDTtUZBf8vmHmj8uOG8',
  authDomain: 'restaurant-app-c8023.firebaseapp.com',
  databaseURL: 'https://restaurant-app-c8023.firebaseio.com',
  projectId: 'restaurant-app-c8023',
  storageBucket: 'restaurant-app-c8023.appspot.com',
  messagingSenderId: '331227961521',
  appId: '1:331227961521:web:3a6efc9c4df97638edea90',
  measurementId: 'G-6PY8KM797N',
}

firebase.initializeApp(firebaseConfig)

export default () => {
  const [fontLoaded, setFontLoaded] = useState(false)

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={loadFont}
        onError={() => console.log('ERROR OCCURED')}
        onFinish={() => setFontLoaded(true)}
      />
    )
  } else {
    return (
      <ThemeProvider theme={theme}>
        <RootNav />
      </ThemeProvider>
    )
  }
}
