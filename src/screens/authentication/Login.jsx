import React, { useState } from "react"
import { StyleSheet, Text, TextInput, View, Button } from "react-native"

export default function LoginPage(props) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {
    // TODO: Implement login functionality
    props.setIsAuthenticated(true)
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
