import { createAppContainer } from "react-navigation";
import createAnimatedSwitchNavigator from "react-navigation-animated-switch";
import LoginScreen from "../Screens/Auth/LoginScreen";
import SignupScreen from "../Screens/Auth/SignupScreen";

const AuthNav = createAnimatedSwitchNavigator(
  {
    Login: LoginScreen,
    Signup: SignupScreen,
  },
  {
    initialRouteName: "Login",
  }
);
export default createAppContainer(AuthNav);
