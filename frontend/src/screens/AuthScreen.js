import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { login } from '../actions/userActions'

const AuthScreen = () => {
  // Get url pathname to check is it login or singup
  const urlPathname = window.location.pathname
  const pathname = urlPathname.replace('/', '')

  // Hook Form inputs
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Submit Form
  const submitHandler = (e) => {
    e.preventDefault()
    console.log(email, password)
  }

  return (
    <>
      {pathname === 'login' ? <h1>Sign In</h1> : <h1>Sign Up</h1>}
      <Form onSubmit={submitHandler}>
        {pathname === 'singup' && (
          <>
            <Form.Group controlId='firstName'>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='First Name'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='lastName'>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='last Name'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </>
        )}

        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Sign In
        </Button>
      </Form>
      <Row className='py-3'>
        <Col>
          {' '}
          {pathname === 'login' ? (
            <Link to={'/singup'}>Sign Up.</Link>
          ) : (
            <Link to={'/singup'}>Login.</Link>
          )}
        </Col>
      </Row>
    </>
  )
}

export default AuthScreen
