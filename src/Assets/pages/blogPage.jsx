/*
Author: Kishan Kahodariya
Description: This a the main blog pagees that aggregates the Header, Navigation bar and the blog list (BlogList) in one place 
             and display in proper format.
*/
 
import React,{ useEffect,useState} from 'react';
import BlogList from '../../components/BlogList';
import { Card, Container,Form, FormControl, Button,ButtonGroup,Col,Row, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import './Home.css'
import './BlogPage.css'
import './Header.css'
import 'react-bootstrap'
import './Customer.css'


 const BlogPage = () => {

  return (
    <>
    <div >
    
    <div className='col'  >
      
      <div className="header" >
        <div className="header-items">
            
          <button>S</button>taycation
          
          <Navbar collapseOnSelect expand="lg" >
              <Container className='d-flex' id='homenavigation'>
                  <Navbar.Brand href="#home" className='header-navbar'>Home</Navbar.Brand>
                      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                          <Navbar.Collapse id="responsive-navbar-nav">
                              <Nav className="me-auto">
                                  <Nav.Link href="/blogs" className='header-content'>Blogs</Nav.Link>
                                  <Nav.Link href="#pricing" className='header-content'>Search</Nav.Link>
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
      </div>
    
    </div>
    
    <h2 className='title'>Articles Just For You</h2>
    <div className="section">
      
        <BlogList />
    </div>
        
    </div>
     
    </>
    )}

export default BlogPage;

