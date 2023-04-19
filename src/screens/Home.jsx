import { View, Text, StyleSheet, ScrollView, Button, Image } from "react-native"
import React, { useEffect, useState } from "react"
import { setAuthenticated, setUserId } from "../redux/actions"
import { connect } from "react-redux"
import { deleteExpense, getRes } from "../database/crud"

const Home = ({ userId, data, getData }) => {
  // real time render
  useEffect(() => {
    getData()
  }, [])

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          backgroundColor: "#D21312",
          padding: 10,
          borderRadius: 10,
          shadowColor: "black",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.26,
          shadowRadius: 6,
          elevation: 5,
          margin: 10
        }}
      >
        <Image source={require("../../assets/expenses.png")} style={{ width: 50, height: 50 }} />
        <Text style={styles.welcome}>Expense Tracker</Text>
      </View>
      <ScrollView>
        {data
          .filter(expense => expense.userId === userId)
          .map(expense => (
            <View
              key={expense.id}
              style={{
                backgroundColor: "lightblue",
                margin: 10,
                padding: 10,
                borderRadius: 10,
                shadowColor: "black",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.26,
                shadowRadius: 6,
                elevation: 5
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold"
                  }}
                >
                  {expense.title}
                </Text>
                <Button
                  title="Delete"
                  onPress={() => {
                    deleteExpense(expense.id)
                    getData()
                  }}
                />
              </View>
              <Text
                style={{
                  marginTop: 10
                }}
              >
                $ {expense.amount}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 10
                }}
              >
                <Text
                  style={{
                    color: "gray"
                  }}
                >
                  {expense.category}
                </Text>
                <Text
                  style={{
                    color: "green"
                  }}
                >
                  {expense.date}
                </Text>
              </View>
            </View>
          ))}
      </ScrollView>
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
    fontSize: 20,
    fontWeight: "bold",
    margin: 16,
    color: "white"
  }
})
