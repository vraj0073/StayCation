import React from 'react'
import { Card, Container, Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import './Home.css'
import './Header.css'
import 'react-bootstrap'
import './Customer.css'



export const Home = () => {
  return (
    <>
    <div >
    
    <div className='col'  >
      
    <div className="header" >
      <div className="header-items">
          
        <button>S</button>taycation
        
          
        <Navbar collapseOnSelect expand="lg" >
  <Container className='container' id='homenavigation'>
  <Navbar.Brand href="#home" className='header-navbar'>Home</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/blogs" className='header-content'>Blogs</Nav.Link>
      <Nav.Link href="/search" className='header-content'>Search</Nav.Link>
      <Nav.Link href="#pricing" className='header-content'>About</Nav.Link>
      <Nav.Link href="#pricing" className='header-content'>Contact</Nav.Link>
      <NavDropdown title="Login" id='title'  className='header-content'>
        <NavDropdown.Item href="Register">New User</NavDropdown.Item>
        <NavDropdown.Item href="Login">Existing User</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

      </div>
      <div className="header-items">  
      
      </div>
      
    </div>
    
</div>

<div>
<img id='homeimage' src={require('../images/tent.jpg')}  alt='Logo'>
    
</img>
<Form className="d-flex" id='searchbar'>
        <FormControl
        id='searchbarsize'
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button id='searchbutton'>Search</Button>
      </Form>
</div>


</div>
</>)
}
export default Home;