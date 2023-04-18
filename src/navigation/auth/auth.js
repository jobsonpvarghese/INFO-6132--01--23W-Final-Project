import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer, createSwitchNavigator } from "react-navigation"

import LoginPage from "../../screens/authentication/Login"
import SignUp from "../../screens/authentication/Signup"

const screens = createSwitchNavigator({
  SignUp: SignUp,
  Login: LoginPage
})

const AppContainer = createAppContainer(screens)

export default AppContainer
