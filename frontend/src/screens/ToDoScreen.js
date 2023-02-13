import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const ToDoScreen = () => {
  const [task, setTask] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(task)
  }

  return (
    <div className='container'>
      <Container className='todoScreen'>
        <Row>
          <Col>
            <h2>To Do List</h2>
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
