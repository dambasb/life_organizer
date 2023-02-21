import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import { Link, } from 'react-router-dom'
import FormContainer from '../components/FormContainer'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { login, register } from '../actions/userActions'

const AuthScreen = () => {
  // Get url pathname to check is it login or register
  const urlPathname = window.location.pathname
  const pathname = urlPathname.replace('/', '')
  const isLogin = (pathname === 'login') ? true : false;

  // Hook Form inputs
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  const { loading, error, userInfo } = userLogin

  // Redirect if user logged
  useEffect(() => {
    if (userInfo) {
      window.location = '/'
    }
  }, [userInfo]
  )

  // Submit Form
  const submitHandler = (e) => {
    e.preventDefault()

    // Check if login or register
    if (isLogin) {
      dispatch(login(email, password))
    } else {

      // Check password match
      if (password !== confirmPassword) {
        setMessage('Passwords do not match.')
      } else {
        dispatch(register(name, email, password))
      }
    }
  }

  return <FormContainer >
    <div className='login'>
      <div className='login__body'>
        {isLogin ? <h1>Log In</h1> : <h1>Register</h1>}
        {message && <Message variant='danger'>{message}</Message>}
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>

          {!isLogin &&
            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
          }
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

          {!isLogin &&
            <Form.Group controlId='password'>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Confirm Password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
          }
          {isLogin ? (<Button type='submit' variant='primary'>
            Login
          </Button>) : (<Button type='submit' variant='primary'>
            Register
          </Button>)}
        </Form>

        <Row className='ps-3'>
          <Col>
            {' '}
            {isLogin ? (<>
              <span>New Customer?</span><Link to={'/register'}>Register.</Link>
            </>) : (
              <>
                <span>Already have account?</span> <Link to={'/login'}>Login.</Link>
              </>
            )}
          </Col>
        </Row>
      </div>
    </div>
  </FormContainer>
}

export default AuthScreen