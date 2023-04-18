import React, { useState } from "react"
import { StyleSheet, View, TextInput, Button, Alert } from "react-native"
import { createUser } from "../../database/config"

const SignUp = props => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { navigation } = props

  console.log(props)
  const handleSignUp = () => {
    createUser(email, password)
      .then(() => {
        Alert.alert("Success", "User created successfully.")
      })
      .catch(error => {
        Alert.alert("Error", error.message)
      })
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Sign up" onPress={handleSignUp} />
      {/* // if the user is already signed up, they can click the button to go to the login page */}
      <Button title="Already have an account? Login" onPress={() => navigation.navigate("Login")} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: "80%",
    height: 50,
    marginVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 10
  }
})

export default SignUp
