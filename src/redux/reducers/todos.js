import { IS_AUTH } from "../actionTypes"

const initialState = {
  isAuthenticated: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case IS_AUTH:
      return {
        ...state,
        isAuthenticated: action.payload.value
      }

    default:
      return state
  }
}
