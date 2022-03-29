/*
Author: Vraj Jadhav
Description: This component handle login page.
*/
import React, { useEffect, useState } from 'react'
import '../css/Login1.css'
import '../css/Header.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { Button } from 'react-bootstrap';

export const Login = () => {
  React.useEffect(() => {
    const ac = new AbortController();
    return () => ac.abort();
  })
  
  const history = useNavigate();
  
  const emailRegex = /\S+@\S+\.\S+/;
  const [EmailFlag,setEmailFlag] = useState(1);
  const [Emailmessage, setEmailMessage] = useState('');
  const [PasswordFlag,setPasswordFlag] = useState(1);
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
<<<<<<< HEAD
  const [Errorpassword, setErrorpassword] = useState('');
  const [Erroremail, setErroremail] = useState('');
  const [role, setrole] = useState('');
  const sendData = () =>{
    axios.post('https://weba3b00886409.herokuapp.com/login', {
=======
  const [Error, setError] = useState('');
  const [Response, setResponse] = useState('');
  useEffect(() => {
    console.log("in useeffect" + Response)  
  }, [Response]);
  const sendData = async () =>{
    console.log("send daata"+Email)
    console.log("send password"+Password)
    await axios.post('https://weba3b00886409.herokuapp.com/login', {
>>>>>>> 35dda6bd7ba64cbca89a3f1ddc2567e6b176db9f
          email: Email,
          password: Password,
        })
        .then(function (response) {
<<<<<<< HEAD
           setErrorpassword(response.data.passwordincorrect)
            setErroremail(response.data.emailnotfound) 
            console.log("okay")
            console.log(response);
            console.log("okay")

=======
          if(EmailFlag === 1 && PasswordFlag === 1){
            alert("Required field empty")
            
          }
          history("/Profile",{state:Email})
          console.log(response.data);
          setResponse(response.data);
          console.log("Error her" + Error)  
>>>>>>> 35dda6bd7ba64cbca89a3f1ddc2567e6b176db9f
        })
        .catch(function (error) {
          console.log(error);
          setError(error)
          alert("Invalid username or password")
        });
  }
  const validateEmail = (event) => {
    const email = event.target.value;
    if (emailRegex.test(email)) {
      setEmailMessage(" ");
      setEmail(email);
      setEmailFlag(0);
      
    } else {
      setEmailMessage('Please enter a valid email!');
      setEmailFlag(1);
    }
  };
  const validatehome= ()=>{
    history('/home')
  }
  const validatePassword = (e) => {
    var password = e.target.value;
    if(password ){
     
      setPassword(password);
       setPasswordFlag(0);
}
     else{
       setPasswordFlag(1);
     }
  };
  const validateSubmit = (e)=> {
    sendData()
}
  
  return (
    <>
    <div className="header">
        <div className="header-items">
          <button onClick={validatehome}>S</button>taycation
        </div>
        <div className="header-items"></div>
      </div>
<form>
    <h2 className='heading'>Login</h2>
  <div className="form-group">
    <label >Email address</label>
    <input type="email" onChange={validateEmail} className="form-control" placeholder="Enter email"/>
  </div>
  <small className="text-muted" id='loginmessage'>{Emailmessage}</small> 
  <div className="form-group" id='password_id'>
    <label >Password</label>
    <input type="password" onChange={validatePassword} className="form-control"  placeholder="Password"/> 
    
  </div>
  <br></br>
  <div id='bottom' >
  
  <Button type="button" onClick={validateSubmit}  id='buttonlogin' variant="primary">Submit</Button>
  
  <a id='link' href='Forgetpassword'>Forget Password?</a>
  
  </div>
  
  
 
</form>
</>
)
}

export default Login;