import { StyleSheet } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { MaterialCommunityIcons } from "react-native-vector-icons"
import { Ionicons } from "react-native-vector-icons"

// Screen Import
import Home from "../screens/Home"
import Expense from "../screens/Expense"
import Settings from "../screens/Settings"
import { getRes } from "../database/crud"
import { useState } from "react"

// Tab Navigator
const Tab = createBottomTabNavigator()

const Tabs = () => {
  const [expenses, setExpenses] = useState([])

  const getData = () => {
    getRes(setExpenses)
  }

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" options={styles.home}>
        {() => <Home data={expenses} getData={getData} />}
      </Tab.Screen>
      <Tab.Screen name="Expense" options={styles.Goals}>
        {() => <Expense getData={getData} />}
      </Tab.Screen>
      <Tab.Screen name="Settings" component={Settings} options={styles.setting} />
    </Tab.Navigator>
  )
}

export default Tabs

const styles = StyleSheet.create({
  home: {
    tabBarActiveTintColor: "#1D1CE5",
    tabBarInactiveTintColor: "gray",
    tabBarIcon: props => {
      const { focused, color, size } = props
      const iconName = focused ? "home" : "home-outline"
      return <MaterialCommunityIcons name={iconName} color={color} size={size} />
    }
  },
  Goals: {
    tabBarActiveTintColor: "#1D1CE5",
    tabBarInactiveTintColor: "gray",
    tabBarIcon: props => {
      const { focused, color, size } = props
      const iconName = focused ? "card-account-details" : "card-account-details-outline"
      return <MaterialCommunityIcons name={iconName} color={color} size={size} />
    }
  },
  setting: {
    tabBarActiveTintColor: "#1D1CE5",
    tabBarInactiveTintColor: "gray",
    tabBarIcon: props => {
      const { focused, color, size } = props
      const iconName = focused ? "settings" : "settings-outline"
      return <Ionicons name={iconName} color={color} size={size} />
    }
  }
})
