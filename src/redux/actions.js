import { IS_AUTH, USER_ID } from "./actionTypes"

export const setAuthenticated = value => ({
  type: IS_AUTH,
  payload: {
    value
  }
})

export const setUserId = value => ({
  type: USER_ID,
  payload: {
    value
  }
})
