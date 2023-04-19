import { IS_AUTH, USER_ID, USER_EMAIL } from "../actionTypes"

const initialState = {
  isAuthenticated: false,
  userId: null,
  userEmail: null
}

export default function (state = initialState, action) {
  switch (action.type) {
    case IS_AUTH:
      return {
        ...state,
        isAuthenticated: action.payload.value
      }
    case USER_ID:
      return {
        ...state,
        userId: action.payload.value
      }

    case USER_EMAIL:
      return {
        ...state,
        userEmail: action.payload.value
      }

    default:
      return state
  }
}
