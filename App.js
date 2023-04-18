import React, { useState } from "react"
import { StatusBar } from "expo-status-bar"

import Route from "./src/navigation/Route"
import AppContainer from "./src/navigation/auth/auth"
import { NavigationContainer } from "@react-navigation/native"

const App = () => {
  // isauthenticated hooks
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <>
      <StatusBar style="auto" />
      {/* Route Component */}
      <NavigationContainer>
        <AppContainer />
      </NavigationContainer>
    </>
  )
}

export default App
