import React, { useState } from "react"
import { View, TextInput, Button, StyleSheet } from "react-native"
import { postData } from "../database/crud"

const ExpenseForm = props => {
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [amount, setAmount] = useState("")
  const [date, setDate] = useState("")

  const handleTitleChange = text => {
    setTitle(text)
  }

  const handleCategoryChange = text => {
    setCategory(text)
  }

  const handleAmountChange = text => {
    setAmount(text)
  }

  const handleDateChange = text => {
    setDate(text)
  }

  const handleAddPress = () => {
    if (title && category && amount && date) {
      postData({
        title: title,
        category: category,
        amount: amount,
        date: date,
        userId: props.userId
      })
      setTitle("")
      setCategory("")
      setAmount("")
      setDate("")
      props.getData()
    }
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Expense Title" onChangeText={handleTitleChange} value={title} />
      <TextInput style={styles.input} placeholder="Category" onChangeText={handleCategoryChange} value={category} />
      <TextInput style={styles.input} placeholder="Amount" onChangeText={handleAmountChange} value={amount} keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Date" onChangeText={handleDateChange} value={date} keyboardType="numeric" />
      <Button title="Add" onPress={handleAddPress} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10
  }
})

export default ExpenseForm
