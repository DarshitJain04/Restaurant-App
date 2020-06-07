import React, { useState } from 'react'
import AuthNav from './App/Navigator/AuthNav'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import { ThemeProvider } from 'react-native-elements'
import { theme } from './App/Theme/theme'
// import { Provider as FontProvider } from './App/Context/FontContext'

const loadFont = () => {
  return Font.loadAsync({
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
  })
}

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
        <AuthNav />
      </ThemeProvider>
    )
  }
}
