/*
Author: Kishan Kahodariya
Description: This component allows user to search for accomodation.
*/

import React,{ useEffect,useState} from 'react';
import { Card, Container,Form, FormControl, Button,ButtonGroup,Col,Row, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import '../../css/Home.css'
import '../../css/Header.css'
import 'react-bootstrap'
import '../../css/SearchPage.css'

export const SearchResults = () => {

  const [searchValue,setSearchValue]=useState('halifax');

  async function simpleSearch(e,value){
    e.prevenDefault();
    console.log("simple search :"+value );
  }

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
      </div>
    
    </div>
    <h2 className='title'>Simple Search</h2>
    <div   style={{paddingLeft:"500px"}}>
  <input 
  type="text" 
  class="simplesearch" 
  placeholder="e.g Halifax" 
  aria-label="simplesearchvalue" 
  aria-describedby="basic-addon1" 
  onChange={(e)=>{setSearchValue(e.target.value)}}
  />
  <div className="input-group-append">
    <button className="btn btn-outline-secondary" 
    type="button" 
    onClick={(e)=>{simpleSearch(e,searchValue)}}
    onSubmit={simpleSearch}>Button
    </button>
  </div>
</div>
    </div>
     
    </>

    )}

export default SearchResults;

