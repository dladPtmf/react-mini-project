import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Container, Form, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="/">
        <img 
        src="https://fontmeme.com/permalink/230927/2cb7a9d4ea9372f9c629be065e3358b3.png" width = '90px'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/" className='link-item'>Home</Link>
            <Link to="/" className='link-item'>Movies</Link>
            
           
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-danger">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
