/*
Author: Vraj Jadhav
Description: This component handle forgetpassword page.
*/
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import '../css/Forget_Password_Email.css'
import '../css/Header.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Forget_Password_Email = () => {
  React.useEffect(() => {
    const ac = new AbortController();
    return () => ac.abort();
  })
  const emailRegex = /\S+@\S+\.\S+/;
  const [EmailFlag,setEmailFlag] = useState(1);
  const [Emailmessage, setEmailMessage] = useState('');
  const [Email, setEmail] = useState('');
  const [Error, setError] = useState('');
  const history = useNavigate();
  const sendData = () =>{
    axios.post('https://staycationbackendapp.herokuapp.com/forgetpassword', {
          email: Email })
        .then(function (response) {
          console.log(""+response.data);
          setError(Error);
          history('/resetpassword?query='+Email)
             })
        .catch(function (error) {
          
          alert("Invalid Email Id",error)
        });
  }
  const validateSubmit = () => {
    
    sendData();
    

  }
  const validHome = (e)=>{
    history('/home')
  }
  const validateEmail = (event) => {
    const email = event.target.value;
    if (emailRegex.test(email)) {
      setEmailMessage(" ");
      setEmailFlag(0);
      setEmail(email)
      
    } else {
      setEmailMessage('Please enter a valid email!');
      setEmailFlag(1);
    }
  };
  return (
      <>
      <div className="header">
        <div className="header-items">
          <button onClick={validHome} >S</button>taycation
        </div>
        <div className="header-items"></div>
      </div>
      <Form>
      <div className='forget_heading'>
    <h2 className='heading'>Forget Password</h2>
    </div>
    <div className="form-group" style={{marginLeft: 550}}>
      <label >Email Address :</label>
      <input id='input' onChange={validateEmail} type="email" placeholder="Enter email"/>
    </div>
    <small className="text-muted" id='forgetmessage'>{Emailmessage}</small>
    <div>
    <button type="button" id='forgetpasswordbutton' onClick={validateSubmit} className="btn btn-primary">Submit</button>
   </div>
    </Form>
    </>
  )
}

export default Forget_Password_Email
