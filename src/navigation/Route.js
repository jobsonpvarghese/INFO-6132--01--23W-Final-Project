import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

// Screen Import
import Detail from "../screens/Detail"

import Login from "../screens/authentication/Login"
import SignUp from "../screens/authentication/Signup"

// Nested Stack Navigator (Tab)
import Tabs from "./Tabs"
import AppContainer from "./auth/auth"
import { connect } from "react-redux"
import { setAuthenticated } from "../redux/actions"
// Stack Navigator
const Stack = createNativeStackNavigator()

function Route({ isAuthenticated }) {
  console.log(isAuthenticated)
  return (
    <>
      <NavigationContainer>
        {isAuthenticated ? (
          <Stack.Navigator>
            <Stack.Screen
              name="Navigation"
              component={Tabs}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen name="Details" component={Detail} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={SignUp} />
          </Stack.Navigator>
        ) : (
          <AppContainer />
        )}
      </NavigationContainer>
    </>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    isAuthenticated: state.todos.isAuthenticated
  }
}

const mapDispatchToProps = { setAuthenticated }

export default connect(mapStateToProps, mapDispatchToProps)(Route)
