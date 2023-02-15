import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import FormContainer from '../components/FormContainer'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { login } from '../actions/userActions'

const AuthScreen = ({ history }) => {
  // Get url pathname to check is it login or register
  const urlPathname = window.location.pathname
  const pathname = urlPathname.replace('/', '')

  // Hook Form inputs
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  const { loading, error, userInfo } = userLogin



  // Submit Form
  const submitHandler = (e) => {
    e.preventDefault()

    console.log(name, email, password)

    dispatch(login(email, password))

    //* TO-DO register
  }

  return <FormContainer>
    {pathname === 'login' ? <h1>Log In</h1> : <h1>Register</h1>}
    {error && <Message variant='danger'>{error}</Message>}
    {loading && <Loader />}
    <Form onSubmit={submitHandler}>
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

    <Row className='ps-3'>
      <Col>
        {' '}
        {pathname === 'login' ? (<>
          <span>New Customer?</span><Link to={'/register'}>Register.</Link>
        </>) : (
          <>
            <span>Already have account?</span> <Link to={'/login'}>Login.</Link></>
        )}
      </Col>
    </Row>
  </FormContainer>
}

export default AuthScreen
