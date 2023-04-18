import React, { useEffect, useState } from "react"
import { StyleSheet, Text, TextInput, View, Button } from "react-native"

import { setAuthenticated } from "../../redux/actions"
import { connect } from "react-redux"

function LoginPage({ isAuthenticated, setAuthenticated }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = ({}) => {
    // TODO: Implement login functionality
    setAuthenticated(true)
  }

  useEffect(() => {
    console.log(isAuthenticated)
  }, [isAuthenticated])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Page</Text>
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry={true} />
      <Button title="Login" onPress={handleLogin} />
    </View>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    isAuthenticated: state.todos.isAuthenticated
  }
}

const mapDispatchToProps = { setAuthenticated }

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    margin: 8,
    width: "80%",
    borderRadius: 4
  }
})
