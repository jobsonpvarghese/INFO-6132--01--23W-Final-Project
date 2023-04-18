import React, { useState } from "react"
import { Button, Text, TextInput, View } from "react-native"
import { auth } from "../../database/config"

export default function AuthScreen() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignup = async () => {
    try {
      await auth.createUserWithEmailAndPassword(email, password)
      console.log("User signed up successfully.")
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <View>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Signup" onPress={handleSignup} />
    </View>
  )
}
