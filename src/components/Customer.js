/*
Author: Vraj Jadhav
Description: This component handle profile page.
*/

import React, { useEffect, useState } from 'react'
import '../css/Header.css'
import 'react-bootstrap'
import '../css/Customer.css'
import { Card, Container, Form, Nav, Navbar, NavDropdown, Row, Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import EditProfile from './EditProfile'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Navheader'
import Navheader from './Navheader'


export const Customer = (props) => {
  const[alldata,setalldata] = useState({});
  const[alluserdata,setalluserdata] = useState({});
  const[id,setid] = useState("");
  React.useEffect(() => {
    
    const ac = new AbortController();
    return () => ac.abort();
  })
  useEffect(() => {
    
    console.log("new email here " + state)
    axios.post('https://weba3b00886409.herokuapp.com/Userprofile', {
          email: state,
        })
        .then(function (response) {
          console.log(response.data.customer);
           setalluserdata(response.data.customer);  
           setid(alluserdata._id)    
           console.log(id)
                
        })
        .catch(function (error) {
          console.log(error);
        });
    axios.get("https://weba3b00886409.herokuapp.com/users",{
      params: {
        email: state,
        phone: alluserdata.phonenumber

      }
    })
    .then((responce) => {
        console.log("users" +responce)
          setalldata(responce.data.customer)
        

    }).catch(function (error) {
      console.log(error);
    });

    
},[])

  const history = useNavigate();
  const {state} = useLocation();
  
  
  
  return (
    <>
              <Navheader data={id}/>
    
<div>
  <h1 style={{color: 'rgb(227, 28, 95)',
marginLeft: 550,
marginTop: 10 }}>Profile Page</h1>
</div>
<Row>
<Col lg={4}>
  <div className="side-container">
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
</Col>
<Col lg={7} className="side-container-right">
<Card style={{ width: '39rem' }  } id='cardborder'>
  <Card.Body style={{ marginBottom: '-0.75rem' }}>
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
     {alluserdata.email}
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
</Col>
</Row>
    </>
  )
}

export default Customer