import React, { useState } from "react"
import { StatusBar } from "expo-status-bar"

import { NavigationContainer } from "@react-navigation/native"

import { persistor, store } from "./src/redux/store"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/lib/integration/react"

import Route from "./src/navigation/Route"
import AppContainer from "./src/navigation/auth/auth"
import { Text } from "react-native"

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={<Text>Loading View</Text>} persistor={persistor}>
          <StatusBar style="auto" />
          {/* Route Component */}
          <Route />
        </PersistGate>
      </Provider>
    </>
  )
}

export default App
