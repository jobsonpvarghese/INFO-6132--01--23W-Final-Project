import { IS_AUTH, USER_ID, USER_EMAIL } from "./actionTypes"

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

export const setUserEmail = value => ({
  type: USER_EMAIL,
  payload: {
    value
  }
})
