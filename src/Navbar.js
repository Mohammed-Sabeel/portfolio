import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink,Link } from 'react-router-dom';
const Navbars = () => {

  // const location = useLocation()
  // console.log("pathname",location.pathname)
  return (
    <div>
       <Navbar bg="dark" variant="dark" expand="lg" className='mb-5'>
      <Container>
        <Navbar.Brand ><Link to='/' >Portfolio</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to='/' className='link'>Home</NavLink>
            <NavLink to='/about' className='link'>about</NavLink>
            <NavLink to="/skills"className='link'>Skills</NavLink>
            <NavLink to="/projects"className='link'>Projects</NavLink>

            <NavLink to="/contact" className='link'>Contact</NavLink>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbars