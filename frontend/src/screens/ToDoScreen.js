import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import { createTodo, getAllTodos } from '../actions/todoActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
import TodoList from '../components/TodoList'

const ToDoScreen = () => {
  const [task, setTask] = useState('')
  const dispatch = useDispatch()

  const allTodos = useSelector(state => state.todos)
  const { loading, error, todos } = allTodos

  // To get success delete to list todos again
  const todoDelete = useSelector((state) => state.todoDelete)
  const { loading: loadingDelete, error: errorDelete, success: successDelete } = todoDelete

  // To get success delete to list todos again
  const todoUpdate = useSelector((state) => state.todoUpdate)
  const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = todoUpdate

  useEffect(() => {
    dispatch(getAllTodos())
  }, [dispatch, getAllTodos, successDelete, successUpdate])





  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(createTodo(task, 'In Progress'))
    dispatch(getAllTodos())
  }

  return (

    <div className='container'>

      {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
      {loading || loadingDelete || loadingUpdate ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Container className='todoScreen'>
          <Row>
            <Col>
              <h2 className='screen__title'>To Do List</h2>
            </Col>
          </Row>
          <Row className='listCol'>

            <Col xs={3}>
              <TodoList data={todos} progress={'In Progress'}></TodoList>
            </Col>
            <Col xs={3}>

              <TodoList data={todos} progress={'Done'}></TodoList>

            </Col>
          </Row>
          <Row>
            <Col className='mb-3'>
              <Form onSubmit={submitHandler}>
                <Form.Group className='mb-3' controlId='task'>
                  <Form.Label>Add New Task</Form.Label>
                  <Form.Control
                    type='task'
                    placeholder='Enter task'
                    value={task}
                    onChange={(e) => {
                      setTask(e.target.value)
                    }}
                  />
                </Form.Group>

                <Button variant='primary' type='submit'>
                  Add
                </Button>
              </Form>
            </Col>
            <Col md={{ offset: 4 }}></Col>
          </Row>
        </Container>
      )}
    </div>


  )
}

export default ToDoScreen
