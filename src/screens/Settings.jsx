import { View, Text, Button } from "react-native"
import React from "react"

import { setAuthenticated, setUserId } from "../redux/actions"
import { connect } from "react-redux"

const Settings = ({ setAuthenticated }) => {
  const logOut = () => {
    setAuthenticated(false)
    setUserId("")
  }

  return (
    <View>
      <Text>Settings</Text>
      {/* Logout button */}
      <Button title="Logout" onPress={() => logOut()} />
    </View>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    isAuthenticated: state.todos.isAuthenticated
  }
}

const mapDispatchToProps = { setAuthenticated, setUserId }

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
