import { View, Text, Button } from "react-native"
import React from "react"

import { setAuthenticated, setUserId } from "../redux/actions"
import { connect } from "react-redux"

const Settings = ({ setAuthenticated, userId, userEmail }) => {
  const logOut = () => {
    setAuthenticated(false)
    setUserId("")
  }

  return (
    <View style={{ margin: 20 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
          marginBottom: 20
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold"
          }}
        >
          User Profile
        </Text>
        <Button title="Logout" onPress={() => logOut()} />
      </View>
      <Text
        style={{
          marginTop: 10
        }}
      >
        Email:
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 16,
            color: "red"
          }}
        >
          {userEmail}
        </Text>
      </Text>
      <Text
        style={{
          marginTop: 10
        }}
      >
        User Id:{" "}
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 16,
            color: "red"
          }}
        >
          {userId}
        </Text>
      </Text>
      <Text
        style={{
          marginTop: 10
        }}
      >
        This app helps to add your daily expenses to the back and track you finance.
      </Text>
    </View>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    isAuthenticated: state.todos.isAuthenticated,
    userId: state.todos.userId,
    userEmail: state.todos.userEmail
  }
}

const mapDispatchToProps = { setAuthenticated, setUserId }

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
