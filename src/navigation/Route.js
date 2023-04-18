import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

// Screen Import
import Detail from "../screens/Detail"

import Login from "../screens/authentication/Login"

// Nested Stack Navigator (Tab)
import Tabs from "./Tabs"

// Stack Navigator
const Stack = createNativeStackNavigator()

export default function Route() {
  return (
    <>
      <NavigationContainer>
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
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}
