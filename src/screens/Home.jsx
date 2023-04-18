import { View, Text, StyleSheet } from "react-native"
import React from "react"

const Home = props => {
  return (
    <View>
      <Text style={styles.welcome}>Welcome User</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  welcome: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 20
  }
})
