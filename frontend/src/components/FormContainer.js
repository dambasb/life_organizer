import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const FormContainer = ({ children }) => {
  return (
    <Container><Row className='justify-content-md-center'>
      <Col md={5}>{children}</Col></Row></Container>
  )
}

export default FormContainer