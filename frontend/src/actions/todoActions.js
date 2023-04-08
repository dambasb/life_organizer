import axios from "axios";
import { DELETE_TODOS_FAIL, DELETE_TODOS_REQUEST, DELETE_TODOS_SUCCESS, GET_TODOS_FAIL, GET_TODOS_REQUEST, GET_TODOS_SUCCESS, TODO_CREATE_FAIL, TODO_CREATE_REQUEST, TODO_CREATE_SUCCESS, UPDATE_TODOS_FAIL, UPDATE_TODOS_REQUEST, UPDATE_TODOS_SUCCESS } from "../constants/todosConstants";

// Create Todo
export const createTodo = (text, progress) => async (dispatch, getState) => {
  try {
    dispatch({
      type: TODO_CREATE_REQUEST,
    })
    const { userLogin: { userInfo } } = getState()
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      },
    }

    const { data } = await axios.post(
      '/api/todos',
      { text, progress },
      config
    )

    dispatch({
      type: TODO_CREATE_SUCCESS,
      payload: data,
    })

  } catch (error) {
    dispatch({
      type: TODO_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

// Get Todos
export const getAllTodos = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_TODOS_REQUEST,
    })
    const { userLogin: { userInfo } } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      },
    }

    const { data } = await axios.get(
      '/api/todos',
      config
    )

    dispatch({
      type: GET_TODOS_SUCCESS,
      payload: data,
    })

  } catch (error) {
    dispatch({
      type: GET_TODOS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

// Delete Todo
export const deleteTodo = (id) => async (dispatch, getState) => {

  try {
    dispatch({
      type: DELETE_TODOS_REQUEST,
    })
    const { userLogin: { userInfo } } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      },
    }

    await axios.delete(
      `/api/todos/${id}`,
      config
    )

    dispatch({
      type: DELETE_TODOS_SUCCESS
    })

  } catch (error) {
    dispatch({
      type: DELETE_TODOS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

// Update Todo
export const updateTodo = (todo) => async (dispatch, getState) => {

  try {
    dispatch({
      type: UPDATE_TODOS_REQUEST,
    })
    const { userLogin: { userInfo } } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      },
    }

    const { data } = await axios.put(
      `/api/todos/${todo._id}`, todo,
      config
    )
    console.log(data)
    dispatch({
      type: UPDATE_TODOS_SUCCESS,
      payload: data,
    })

  } catch (error) {
    dispatch({
      type: UPDATE_TODOS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
