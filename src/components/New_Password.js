import React, { useState } from 'react'
import { Form, Row } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/New_Password.css'
import axios from 'axios';

export const New_Password = (props) => {
  const history = useNavigate();
  const passwordRegex = /^[-@.\/#&+\w\s]*$/;
  const [Password,setPassword] = useState("");
  const [PasswordFlag,setPasswordFlag] = useState(1);
  const [ConfirmPasswordFlag,setConfirmPasswordFlag] = useState(1);
  const [Passwordmessage, setPasswordMessage] = useState('');
  const [Confirmmessage, setConfirmMessage] = useState('');
  const [Email, setEmail] = useState('');
  const {state} = useLocation();
  const [Errorpassword, setErrorpassword] = useState('');
  const [Erroremail, setErroremail] = useState('');

  const sendData = () =>{
    
    axios.post('http://localhost:5000/resetpassword', {
          email: state,
          password: Password,
        })
        .then(function (response) {
          console.log(response.data);
           setErrorpassword(response.data.passwordincorrect)
            setErroremail(response.data.emailnotfound)
           if(Erroremail != null){
            
             alert("Email not found")
           }
          else if(Errorpassword != null){
             alert("Incorrect Password")
           }
          
          
        })
        .catch(function (error) {
          console.log(error);
        });
  }
  const validateSubmit = () => {
    setEmail(state)
    if(PasswordFlag == 0 && ConfirmPasswordFlag == 0){
      
      sendData();
      history('/login');
    }
    else{
      alert("Required field empty")
    }
    
    
    
   
  }
  const validatePassword = (e) => {
    var password = e.target.value;
    window.pass = password;
    if(passwordRegex.test(password) && password.length >= 8 ){
      
      setPasswordMessage(" ");
      setPassword(password)
       setPasswordFlag(0);
}
     else{
       
       setPasswordMessage("Invalid Password")
       setPasswordFlag(1);
     }
  };
  const validateConfirmPassword = (e) => {
    const confirmPassword = e.target.value;
    if(confirmPassword === window.pass){
      setConfirmPasswordFlag(0);
      setConfirmMessage("Password Match");
     }
     else{
       setConfirmPasswordFlag(1);
       setConfirmMessage("confirm password does not match!")
     }
  };
  
  return (
    <>
    <div className="header">
      <div className="header-items">
        <button>S</button>taycation
      </div>
      <div className="header-items"></div>
    </div>

    <Form>
    
  <h2 className='heading'>Password Reset</h2>
  <div className="form-group" >
    <label >Enter New Password:</label>
    <input className='input' onChange={validatePassword} type="password" placeholder="Enter new password"/>
  </div>
  <small id='message'>{Passwordmessage}</small>
  <div className="form-group" id='password_div'>
    <label id='confirm'>Confirm Password:</label>
    <input className='input' onChange={validateConfirmPassword} type="password" placeholder="Enter confirm password"/>
    
  </div>
  <small id='message'>{Confirmmessage}</small>
  <div></div>
  <div>
  <button type="button" id='resetbutton' onClick={validateSubmit} className="btn btn-primary">Submit</button>
 </div>
  
  </Form>
  </>
  )
}

export default New_Password;