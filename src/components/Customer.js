import React, { useEffect, useState } from 'react'
import '../css/Header.css'
import 'react-bootstrap'
import '../css/Customer.css'
import { Card, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import EditProfile from './EditProfile'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Navheader'
import Navheader from './Navheader'


export const Customer = (props) => {
  const[alldata,setalldata] = useState("");
  const[alluserdata,setalluserdata] = useState("");
  const[displaypop,setdisplaypop] = useState("none");
  React.useEffect(() => {
    const ac = new AbortController();
    return () => ac.abort();
  })
  useEffect(() => {
    console.log("new email here " + state)
    axios.get("http://localhost:5000/users",{
      params: {
        email: state
      }
    })
    .then((responce) => {
        console.log( responce.data.customer)
        setalldata(responce.data.customer)
        

    }).catch(function (error) {
      console.log(error);
    });

    axios.post('http://localhost:5000/Userprofile', {
          email: state,
        })
        .then(function (response) {
          console.log(response.data.customer);
           setalluserdata(response.data.customer);            
        })
        .catch(function (error) {
          console.log(error);
        });
},[])

  const history = useNavigate();
  const {state} = useLocation();
  
  const deleteprofile = () =>{
        setdisplaypop("inline");
  }

  
  return (
    <>
              <Navheader/>
    {/* <div className='col'>
      
    <div className="header">
      <div className="header-items">
        <button onClick={validatesubmit}>S</button>taycation

        <Navbar collapseOnSelect expand="lg" >
  <Container className='navContainer'>
  <Navbar.Brand href="home" className='header-navbar'>Home</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features" className='header-content'>Blogs</Nav.Link>
      <Nav.Link href="#pricing" className='header-content'>History</Nav.Link>
      <NavDropdown title="Account Setting" id='title'  className='header-content'>
        <NavDropdown.Item href="Editprofile">Edit Profile</NavDropdown.Item>
        <NavDropdown.Item onClick={deleteprofile}>Delete Profile</NavDropdown.Item>
        <NavDropdown.Item href="Resetpassword">Reset Password</NavDropdown.Item>
        <NavDropdown.Item href="Logout">Logout {state}</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
      </div>
      <div className="header-items">  
      </div>
    </div>
</div> */}
<div>
  <h1 style={{color: 'rgb(227, 28, 95)',
marginLeft: 550,
marginTop: 10 }}>Profile Page</h1>
</div>
<div class="side-container">
    <div>
    <img className='imagetag' src={require('../Assets/images/tent.jpg')} style={{
  width: 250,
  height: 250,
  marginTop: -5,
  marginLeft: 20,
  borderBottomLeftRadius: 30,
  borderBottomRightRadius: 30,
  borderTopRightRadius: 30,
  borderTopLeftRadius: 30,
  overflow: 'hidden',
}} alt='Logo'></img>
    </div>
    <br></br>
    <Card style={{ width: '16rem',position: 'relative',left:'16px'}  } id='leftDialog' className='cardborderLeft'>
  <Card.Body>
    
    <Card.Text className='info'>
    <h4>Lives In :</h4>
    <p>{alldata.livesin}</p>
    <br></br>
    <h4>Speaks :</h4>
    <p>{alldata.speaks}</p>
    <br></br>
    <h4>Works as : </h4>
    <p>{alldata.works}</p>
      </Card.Text>
  </Card.Body>
</Card>
</div>
<div class="side-container-right" >
<Card style={{ width: '39rem' }  } id='cardborder'>
  <Card.Body style={{ marginBottom: '0.5rem' }}>

    <Card.Text className='info'>
      <div>   
    <h4>Bio :</h4>
    <div className='subcontainer'>
    <Card style={{ width: '25rem', height: '10rem' }}>
  <Card.Body>
    <Card.Text>
     {alldata.bio}
    </Card.Text>
  </Card.Body>
</Card>
    </div>
    </div>
    <br></br>
    <br></br>
    <div>
    <h4>Email :</h4>
    <div className='subcontainer'>
    <Card style={{ width: '25rem', height: '2rem',marginTop: '-2rem' }}>
  <Card.Body>
    <Card.Text style={{marginTop: '-1rem'}}>
     {alldata.email}
    </Card.Text>
  </Card.Body>
</Card>
    </div>
    </div>
    <br></br>
    <br></br>
    <div>
    <h4>Contact No : </h4>
    <div className='subcontainer'>
    <Card style={{ width: '25rem', height: '2rem',marginTop: '-2rem' }}>
  <Card.Body>
    <Card.Text style={{marginTop: '-1rem'}}>
     {alluserdata.phonenumber}
    </Card.Text>
  </Card.Body>
</Card>
    </div>
    </div>
    <br></br>
    <br></br>
    <div>
    <h4>Role : </h4>
    <div className='subcontainer'>
    <Card style={{ width: '25rem', height: '2rem',marginTop: '-2rem' }}>
  <Card.Body>
    <Card.Text style={{marginTop: '-1rem'}}>
     {alluserdata.role}
    </Card.Text>
  </Card.Body>
</Card>
    </div>
    </div>
      </Card.Text>
  </Card.Body>
</Card>
  </div>
    
    </>
  )
}

export default Customer