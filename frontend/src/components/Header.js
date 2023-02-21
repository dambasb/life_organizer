import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Nav, Navbar, NavDropdown, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { logout } from '../actions/userActions'
import avatar from '../assets/avatar.png'

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
        <Navbar.Brand href='/'>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#link'>Link</Nav.Link>
          </Nav>
          <Nav>

            {userInfo ? (<>
              <Nav.Link eventKey={2} href='#memes'>
                {userInfo.name}
              </Nav.Link>
              <Image className='avatar' src={avatar} />
              <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
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
