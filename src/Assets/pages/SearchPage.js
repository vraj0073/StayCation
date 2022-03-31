/*
Author: Kishan Kahodariya
Description: This component allows user to search for accomodation.
*/

import React,{ useEffect,useState} from 'react';
import { Card, Container,Form, FormControl,DropdownButton,Dropdown, Button,ButtonGroup,Col,Row, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import '../../css/Home.css'
import '../../css/Header.css'
import 'react-bootstrap'
import '../../css/SearchPage.css'

export const SearchPage = () => {

  const [location, setLocation]=useState('');
  const [duration,setDuration]=useState('Days')
    const [accomodationType,setAccomodationType]=useState("long term")

  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  async function simpleSearch(e,value){
    e.preventDefault();
    console.log("simple search :"+value );
  }

  return (
   <>
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
    <div>

    <h2 className='title'>Simple Search</h2>
    <div className="input-group mb-3" style={{paddingLeft:"25px",paddingTop:"25px"}}>
  <input 
    type="text" 
    className="simplesearch" 
    placeholder="e.g Halifax..." 
    aria-label="simpleSearch" 
    aria-describedby="basic-addon2"
    onChange={(e)=>{setSearchValue(e.target.value)}}
  />
  <div className="input-group-append">
    <button className="btn btn-outline-secondary" type="button"
      onClick={(e)=>{simpleSearch(e,searchValue)}}
      onSubmit={simpleSearch}>Search
    </button>
  </div>
    </div>
    <br/>
    <div>
    <h2 className='title'>Custom Search</h2>
      <Form>
        <Form.Group className="mb-3" id="formCustomLocation">
          <Form.Label className='labelTxt'>
            Location
          </Form.Label>
          <div style={{paddingLeft:"20px"}}>
          <Form.Control style={{width:"500px",height:"40px"}} onChange={(e)=>{setLocation(e.target.value)}} id="customLocation" placeholder="e.g Halifax" />
          </div>
         </Form.Group>

          <Form.Group className="mb-3" id="accomodation">
          <Form.Label className='labelTxt'>Accomodation-Type</Form.Label>
           <div style={{paddingLeft:"20px"}}>   
           <DropdownButton  id="accomodation" title="Dropdown button">
            <Dropdown.Item onClick={(e)=>{setAccomodationType("long-term"),console.log("#1"+accomodationType)}} value="long-term">long-term</Dropdown.Item>
            <Dropdown.Item onClick={(e)=>{setAccomodationType("short-term"),console.log("#2"+accomodationType)}} value="short-term">short-term</Dropdown.Item>
          </DropdownButton>
          </div>
        </Form.Group>

        <Form.Group className="mb-3" id="duration">
          <Form.Label className='labelTxt'>Duration</Form.Label>
           <div style={{paddingLeft:"20px"}}>   
          <Form.Control onChange={(e)=>{ setDuration(e.target.name),console.log(e.target.value)}} id="accomodation" placeholder="Duration" />
          </div>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>

</div>
     
  </>
  )}

export default SearchPage;

