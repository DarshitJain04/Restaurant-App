import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import LoginScreen from '../Screens/Auth/LoginScreen'
import SignupScreen from '../Screens/Auth/SignupScreen'
import HomeScreen from '../Screens/HomeScreen'

const MainFlow = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
)
export default MainFlow
