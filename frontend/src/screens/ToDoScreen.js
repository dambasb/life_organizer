import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import { createTodo, getAllTodos } from '../actions/todoActions'
import Loader from '../components/Loader'
import Message from '../components/Message'

const ToDoScreen = () => {
  const [task, setTask] = useState('')
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getAllTodos())
  }, [dispatch, getAllTodos])


  const allTodos = useSelector(state => state.todos)
  const { loading, error, todos } = allTodos


  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(createTodo(task, 'New'))
  }


  let newTodos = []
  if (todos !== undefined) {
    newTodos = Object.values(todos).filter(item => item.progress === 'New').map(filteredNewItems => (
      { filteredNewItems }
    ))
  }

  let inProgressTodos = []
  if (todos !== undefined) {
    inProgressTodos = Object.values(todos).filter(item => item.progress === 'In Progress').map(filteredItems => (
      { filteredItems }
    ))
  }

  return (


    <div className='container'>

      {loading ? (
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
            <Col>
              <h4>To Do</h4>
              <ul>
                {
                  (newTodos).map(function (item, key) {
                    return (
                      <li key={key}>
                        {item.filteredNewItems.text}
                      </li>
                    )
                  })
                }
              </ul>

            </Col>
            <Col>
              <h4>In Progress</h4>
              <ul>
                {
                  (inProgressTodos).map(function (item, key) {

                    return (
                      <li key={key}>
                        {item.filteredItems.text}
                      </li>
                    )
                  })
                }
              </ul>
            </Col>
            <Col>
              <h4>Done</h4>
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ul>
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
