import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Nav, Navbar, NavDropdown, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { logout } from '../actions/userActions'

function Header() {
  const dispatch = useDispatch()

  // Get Logged User data
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  // Logout User
  const logoutHandler = () => {
    dispatch(logout())
  }


  return (
    <Navbar bg='dark' expand='lg'>
      <Container>
        <Navbar.Brand href='/'>Life Organizer</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='/todo'>Todo</Nav.Link>
            <Nav.Link href='/activity'>Activity</Nav.Link>
          </Nav>
          <Nav>

            {userInfo ? (<>
              <Nav.Link eventKey={2} href='#memes'>
                {userInfo.name}
              </Nav.Link>
              <Image className='avatar' src={`http://localhost:5000/uploads/${userInfo.image}`} />
              <NavDropdown title='Settings' id='basic-nav-dropdown'>
                <NavDropdown.Item href='/profile'>Profile</NavDropdown.Item>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </>) : <Link as={Link} to='/login'>
              Login
            </Link>}



          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  )
}

export default Header
