import { View, Text } from "react-native"
import React from "react"
import ExpenseFrom from "../components/ExpenseFrom"

import { setAuthenticated, setUserId } from "../redux/actions"
import { connect } from "react-redux"

const Expense = ({ userId, getData }) => {
  const props = {
    userId: userId,
    getData: getData
  }
  return (
    <View>
      <ExpenseFrom {...props} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Expense)
