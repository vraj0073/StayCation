/*
Author: Kishan Kahodariya
Description: This a the main blog pagees that aggregates the Header, Navigation bar and the blog list (BlogList) in one place 
             and display in proper format.
*/
 
import React,{ useEffect,useState} from 'react';
import BlogList from '../../components/BlogList';
import { Card, Container,Form, FormControl, Button,ButtonGroup,Col,Row, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import '../../css/Home.css'
import '../../css/BlogPage.css'
import '../../css/Header.css'
import 'react-bootstrap'
import { useLocation, useNavigate, useRoutes } from 'react-router-dom';


 const SearchResult = ({finalList}) => {
const history = useNavigate();
  const validhome = ()=>{
    history("home")
  }
  useEffect=()=>{
    if(finalList!=null){
      console.log("finalList:");
    }else{
      console.log("NONE")
    }
  }
  return (
    <>
    <div >
    
    <div className='col'  >
      
      <div className="header" >
        <div className="header-items">
            
          <button onClick={validhome}>S</button>taycation
          
          <Navbar collapseOnSelect expand="lg" >
              <Container className='d-flex' id='homenavigation'>
                  <Navbar.Brand href="home" className='header-navbar'>Home</Navbar.Brand>

                      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                          <Navbar.Collapse id="responsive-navbar-nav">
                              <Nav className="me-auto">
                                  <Nav.Link href="/blogs" className='header-content'>Blogs</Nav.Link>
                                  <Nav.Link href="/search" className='header-content'>Search</Nav.Link>
                                  <Nav.Link href="#About" className='header-content'>About</Nav.Link>
                                  <Nav.Link href="#Contact" className='header-content'>Contact</Nav.Link>
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
    
    <h2 className='title'>Search Results</h2>
    <div className="section">
      
      <h2>{finalList}</h2>
    </div>
        
    </div>
     
    </>
    )}

export default SearchResult;

