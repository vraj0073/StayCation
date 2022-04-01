/*
Author: Vraj Jadhav
Description: This component handle edit profile page.
*/
import React, { useEffect, useState } from 'react'
import '../css/Header.css'
import 'react-bootstrap'
import '../css/Customer.css'
import '../css/EditProfile.css'
import { Card, Container, Form, Nav, Navbar, NavDropdown, Row, Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import Navheader from './Navheader'


export const EditProfile = () => {
  const  [bio,setbio ] = useState('');
  const  [email,setemail ] = useState('');
  const  [livesin,setlivesin ] = useState('');
  const  [speaks,setspeaks] = useState('');
  const  [works,setworks ] = useState('');
  const  [phone,setphone ] = useState('');
  const  [image,setimage] = useState("")

  const history = useNavigate();
  const {state} = useLocation();
  const sendData = () =>{
    
    axios.post('https://weba3b00886409.herokuapp.com/profileedit', {
          bio: bio,
          email: email,
          phone: phone,
          livesin: livesin,
          speaks: speaks,
          works: works,
          image: image
        })
        .then(function (response) {
          console.log(response);
          history('/Profile',{state:email})
        })
        .catch(function (error) {
          console.log(error);
        });
  }
  const imageUpload = (e) =>{
    
    setimage(e.target.files[0]);
  }
  const validbio= (e) => {
    const bio1 = e.target.value;
    setbio(bio1)
    
     
     
  };
  const validemail= (e) => {
    const email1 = e.target.value;
    setemail(email1)
   
     
     
  };
  const validphone= (e) => {
    const phone1 = e.target.value;
    setphone(phone1)
    
     
     
  };
  const validlivesin= (e) => {
    const lives1 = e.target.value;
    setlivesin(lives1)
    
     
     
  };
  const validspeaks= (e) => {
    
    const speaks1 = e.target.value;
    setspeaks(speaks1)
    
  };
  const validwork= (e) => {
    const work1 = e.target.value;
    setworks(work1)
 
     
     
  };
  const onSubmit = (e) =>{
    
    
    sendData();
  }
  return (
      <>
      <Navheader/>
    <Row>
    <Col lg={4}>
    
      <div className="side-container">
    <div>
    <img className='imagetag' src={require('../Assets/images/tent.jpg')} style={{
  width: 250,
  height: 250,
  marginTop: 30,
  marginLeft: 20,
  borderBottomLeftRadius: 30,
  borderBottomRightRadius: 30,
  borderTopRightRadius: 30,
  borderTopLeftRadius: 30,
  overflow: 'hidden',}} alt='Logo'></img>
    </div>
    <div id='upload_button'>
      <input type="file" onChange={imageUpload}/>
    </div>
    </div>
    </Col>
    <Col lg={7} className="side-container-right">
<Card style={{ width: '39rem' }  } id='cardborder'>
  <Card.Body style={{ marginBottom: '-0.75rem' }}>
    
    <Card.Text className='info'>
      <div>   
    <h4>Bio :</h4>
    <div className='input_values'>
  <Form.Control as="textarea" onChange={validbio} rows={3} cols={30} />
  </div>
    </div>
    <br></br>
    <div>
    <h4>Email :</h4>
    </div>
    <div className='input_values'>
    <input type='email' onChange={validemail} placeholder='Email'/>
    </div>
    <br></br>
    <div>
    <h4>Contact No : </h4>
    </div>
    <div className='input_values'>
    <input type='text' onChange={validphone} placeholder='Contact Number'/>
    </div>
    <br></br>
    <div>
    <h4>Lives In : </h4>
    </div>
    <div className='input_values'>
    <input type='text' onChange={validlivesin} placeholder='Lives In'/>
    </div>
    <br></br>
    <div>
    <h4>Speaks : </h4>
    </div>
    <div className='input_values'>
    <input type='text' placeholder='Speaks' onChange={validspeaks}/>
    </div>
    <br></br>
    <div>
    <h4>Works : </h4>
    </div>
    <div className='input_values'>
    <input type='text' placeholder='Work'onChange={validwork}/>
    </div>
    <div id='save_button'>
    <button onClick={onSubmit}>Save</button>
    </div>
    </Card.Text>
  </Card.Body>
</Card>
  </Col>
  </Row>
    </>
  )
}

export default EditProfile