import { TODO_CREATE_FAIL, TODO_CREATE_REQUEST, TODO_CREATE_SUCCESS } from "../constants/todosConstants"


export const todoCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case TODO_CREATE_REQUEST:
      return { loading: true }
    case TODO_CREATE_SUCCESS:
      return { loading: false, todo: action.payload }
    case TODO_CREATE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const getTodosReducer = (state = {}, action) => {
  switch (action.type) {
    case TODO_CREATE_REQUEST:
      return { loading: true }
    case TODO_CREATE_SUCCESS:
      return { loading: false, todo: action.payload }
    case TODO_CREATE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}


