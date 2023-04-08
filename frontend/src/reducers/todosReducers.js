import { DELETE_TODOS_FAIL, DELETE_TODOS_REQUEST, DELETE_TODOS_SUCCESS, GET_TODOS_FAIL, GET_TODOS_REQUEST, GET_TODOS_SUCCESS, TODO_CREATE_FAIL, TODO_CREATE_REQUEST, TODO_CREATE_SUCCESS, UPDATE_TODOS_FAIL, UPDATE_TODOS_REQUEST, UPDATE_TODOS_RESET, UPDATE_TODOS_SUCCESS } from "../constants/todosConstants"


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

export const getTodosReducer = (state = { todos: {} }, action) => {
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return { loading: true }
    case GET_TODOS_SUCCESS:
      return { loading: false, todos: action.payload }
    case GET_TODOS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const deleteTodoReducer = (state = {}, action) => {

  switch (action.type) {
    case DELETE_TODOS_REQUEST:
      return { loading: true }
    case DELETE_TODOS_SUCCESS:
      return {
        loading: false, success: true
      }
    case DELETE_TODOS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}


export const updateTodoReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_TODOS_REQUEST:
      return { loading: true }
    case UPDATE_TODOS_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload, success: true }
    case UPDATE_TODOS_FAIL:
      return { loading: false, error: action.payload }
    case UPDATE_TODOS_RESET:
      return {}
    default:
      return state
  }
}