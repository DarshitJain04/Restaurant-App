import { createAppContainer } from 'react-navigation'
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch'
import { createStackNavigator } from 'react-navigation-stack'
import LoginScreen from '../Screens/Auth/LoginScreen'
import SignupScreen from '../Screens/Auth/SignupScreen'
import IntroScreen from '../Screens/Auth/Intro'

const AuthNav = createStackNavigator(
  {
    Intro: IntroScreen,
    Login: LoginScreen,
    Signup: SignupScreen,
  },
  {
    initialRouteName: 'Intro',
    headerMode: 'none',
  }
)
export default AuthNav
