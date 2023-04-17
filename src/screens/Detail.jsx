import React from "react"
import { StyleSheet, Text, View } from "react-native"

const Detail = props => {
  const data = props?.route?.params?.item
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold"
        }}
      >
        {data.goal}
      </Text>
      <Text>{data.description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 20
  },
  goal: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 20
  }
})

export default Detail
