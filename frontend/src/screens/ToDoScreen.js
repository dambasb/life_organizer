import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import { createTodo } from '../actions/todoActions'

const ToDoScreen = () => {
  const [task, setTask] = useState('')

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(createTodo(task, 'In Progress'))
  }

  return (
    <div className='container'>
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
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
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
          <Col>
            <h4>In Progress</h4>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
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
      </Container>
    </div>
  )
}

export default ToDoScreen
