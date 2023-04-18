import { IS_AUTH } from "./actionTypes"

export const setAuthenticated = value => ({
  type: IS_AUTH,
  payload: {
    value
  }
})
