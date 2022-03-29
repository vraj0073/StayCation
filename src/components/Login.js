/*
Author: Vraj Jadhav
Description: This component handle login page.
*/
import React, { useState } from 'react'
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
  const [Passwordmessage, setPasswordMessage] = useState('');
  const [PasswordFlag,setPasswordFlag] = useState(1);
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Errorpassword, setErrorpassword] = useState('');
  const [Erroremail, setErroremail] = useState('');
  
  const sendData = () =>{
    axios.post('https://weba3b00886409.herokuapp.com/login', {
          email: Email,
          password: Password,
        })
        .then(function (response) {
          console.log(response);
           setErrorpassword(response.data.passwordincorrect)
            setErroremail(response.data.emailnotfound)                         
        })
        .catch(function (error) {
          console.log(error);
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
      setPasswordMessage(" ");
      setPassword(password);
       setPasswordFlag(0);
}
     else{
       setPasswordFlag(1);
     }
  };
  const validateSubmit = (e)=> {
  
    console.log("email" + EmailFlag);
    console.log("password"+PasswordFlag)
    sendData()
    console.log(Erroremail)
    console.log(Errorpassword)
    if(EmailFlag === 0 && PasswordFlag === 0 && Erroremail === "" && Errorpassword === ""){
      
     history('/Profile',{state:Email})
    }
    else if(EmailFlag === 1 && PasswordFlag === 1){
      alert("Required field empty")
    }
    else if(Erroremail == "Email not found"){
            
      alert("Email not found")
    }
   else if(Errorpassword == "Password incorrect"){
      alert("Incorrect Password")
      
    }

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