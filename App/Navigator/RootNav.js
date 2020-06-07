import { createAppContainer } from 'react-navigation'
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch'
import AuthNav from './AuthNav'
import MainFlow from './MainFlow'
import LoadingScreen from '../Screens/Auth/LoadingScreen'

const MainNav = createAnimatedSwitchNavigator(
  {
    Loading: LoadingScreen,
    AuthFlow: AuthNav,
    MainFlow: MainFlow,
  },
  {
    initialRouteName: 'Loading',
  }
)
export default createAppContainer(MainNav)
