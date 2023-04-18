import React, { useState } from "react"
import { StatusBar } from "expo-status-bar"

import Route from "./src/navigation/Route"
import LoginPage from "./src/screens/authentication/Login"
import SignupPage from "./src/screens/authentication/Signup"

const App = () => {
  // isauthenticated hooks
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <>
      <StatusBar style="auto" />
      {/* Route Component */}
      {isAuthenticated ? <Route /> : <SignupPage />}
    </>
  )
}

export default App
