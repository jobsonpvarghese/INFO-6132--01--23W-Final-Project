import React, { useEffect, useState } from "react"
import { StyleSheet, Text, TextInput, View, Button, Alert } from "react-native"

import { setAuthenticated, setUserId } from "../../redux/actions"
import { connect } from "react-redux"
import { logIn } from "../../database/config"

function LoginPage({ isAuthenticated, userId, setAuthenticated, setUserId }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {
    logIn(email, password).then(res => {
      if (res) {
        setUserId(res.user.uid)
        setAuthenticated(true)
      } else {
        Alert.alert("Login Failed", "Please check your credentials")
      }
    })
  }

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

const mapDispatchToProps = { setAuthenticated, setUserId }

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
