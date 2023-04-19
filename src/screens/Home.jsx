import { View, Text, StyleSheet } from "react-native"
import React, { useEffect, useState } from "react"
import { setAuthenticated, setUserId } from "../redux/actions"
import { connect } from "react-redux"
import { getRes } from "../database/crud"

const Home = ({ userId, data, getData }) => {
  // real time render
  useEffect(() => {
    getData()
  }, [])

  return (
    <View>
      <Text style={styles.welcome}>Welcome {userId}</Text>
      {/* Render expense with respective to uid */}
      {data
        .filter(expense => expense.userId === userId)
        .map(expense => (
          <View key={expense.id}>
            <Text>{expense.title}</Text>
            <Text>{expense.amount}</Text>
          </View>
        ))}
    </View>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    isAuthenticated: state.todos.isAuthenticated,
    userId: state.todos.userId
  }
}

const mapDispatchToProps = { setAuthenticated, setUserId }

export default connect(mapStateToProps, mapDispatchToProps)(Home)

const styles = StyleSheet.create({
  welcome: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 20
  }
})
