import { createAppContainer } from 'react-navigation'
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch'
import { createStackNavigator } from 'react-navigation-stack'
import LoginScreen from '../Screens/Auth/LoginScreen'
import SignupScreen from '../Screens/Auth/SignupScreen'

const AuthNav = createStackNavigator(
  {
    Login: LoginScreen,
    Signup: SignupScreen,
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  }
)
export default createAppContainer(AuthNav)
