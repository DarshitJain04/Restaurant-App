import { createAppContainer } from 'react-navigation'
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch'
import AuthNav from './AuthNav'
import MainFlow from './MainFlow'
import LoadingScreen from '../Screens/Auth/LoadingScreen'
import IntroScreen from '../Screens/Auth/Intro'
import UpdateScreen from '../Screens/Auth/UserUpdateScreen'

const MainNav = createAnimatedSwitchNavigator(
  {
    Update: UpdateScreen,
    Intro: IntroScreen,
    Loading: LoadingScreen,
    AuthFlow: AuthNav,
    MainFlow: MainFlow,
  },
  {
    initialRouteName: 'Loading',
  }
)
export default createAppContainer(MainNav)
