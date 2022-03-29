import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Row,Col,Button, ToggleButtonGroup,ToggleButton } from 'react-bootstrap';
import '../css/Registration.css'
import '../css/Header.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export const RegistrationPageContainer = () => {
  const history = useNavigate();
  const emailRegex = /\S+@\S+\.\S+/;
  const nameRegex = /^[A-Za-z ]+$/;
  const passwordRegex = /^[-@.\/#&+\w\s]*$/;
  const phoneRegex = /^[0-9]*$/;
  const [isValid, setIsValid] = useState(false);
  const [Lastmessage, setLastMessage] = useState('');
  const [Phonemessage, setPhoneMessage] = useState('');
  const [Emailmessage, setEmailMessage] = useState('');
  const [Passwordmessage, setPasswordMessage] = useState('');
  const [Confirmmessage, setConfirmMessage] = useState('');
  const [Rolemessage, setRoleMessage] = useState('');
  const [Firstmessage, setFirstMessage] = useState('');
  const [FirstFlag,setFirstFlag] = useState(1);
  const [LastFlag,setLastFlag] = useState(1);
  const [EmailFlag,setEmailFlag] = useState(1);
  const [PhoneFlag,setPhoneFlag] = useState(1);
  const [Role,setRole] = useState();
  const [Gender,setGender] = useState();
  const [PasswordFlag,setPasswordFlag] = useState(1);
  const [RoleFlag,setRoleFlag] = useState(1);
  const [GenderFlag,setGenderFlag] = useState(1);
  const [ConfirmPasswordFlag,setConfirmPasswordFlag] = useState(1);
  const [Lastname, setLastname] = useState('');
  const [Phonenumber, setPhonenumber] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Firstname, setFirstname] = useState('');
 


    const sendData = () =>{
      axios.post('http://localhost:5000/register', {
            email: Email,
            password: Password,
            firstname: Firstname,
            lastname: Lastname,
            phonenumber: Phonenumber,
            email: Email,
            gender: Gender,
            role: Role
          })
          .then(function (response) {
            console.log(response);
            
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    
    const handleChange = (e) => { 
    //     setGenderFlag(0);
    //     let val = e.target.value
    //     alert(e);
    alert(e.target.value)
     }
    const validateFirstname = (e) => {
        const firstname = e.target.value;
        
        if(nameRegex.test(firstname)){
          setIsValid(true);
          setFirstname(firstname)
          setFirstMessage(" ");
          setFirstFlag(0);
         }
         
         else{
           setIsValid(false);
           setFirstMessage("only letters are permitted!");
           setFirstFlag(1);
         }
      };
      const validateLastname = (e) => {
        const lastname = e.target.value;
        
        if(nameRegex.test(lastname)){
          setIsValid(true);
          setLastMessage("");
          setLastname(lastname);
          setLastFlag(0);
         }
         else{
           setIsValid(false);
           setLastMessage("only letters are permitted!");
           setLastFlag(1);
         }
      };
      const validateEmail = (event) => {
        const email = event.target.value;
        if (emailRegex.test(email)) {
          setIsValid(true);
          setEmail(email)
          setEmailMessage(" ");
          setEmailFlag(0);
          
        } else {
          setIsValid(false);
          setEmailMessage('Please enter a valid email!');
          setEmailFlag(1);
        }
      };
      const validatePhone = (e) => {
        const phone = e.target.value;
        if(phoneRegex.test(phone) && phone.length > 9){
          
          setIsValid(true);
          setPhoneFlag(0);
          setPhonenumber(phone)
          setPhoneMessage(" ");
          
        }
        else {
          setIsValid(false);
          setPhoneMessage('Please entre valid mobile number!');
          setPhoneFlag(1);
        }
    
      }
      const validatePassword = (e) => {
        var password = e.target.value;
        window.pass = password;
        if(passwordRegex.test(password) && password.length >= 8 ){
          setIsValid(true);
          setPasswordMessage(" ");
          setPassword(password)
           setPasswordFlag(0);
    }
         else{
           setIsValid(false);
           setPasswordMessage("Invalid Password")
           setPasswordFlag(1);
         }
      };
      const validateGender = (e) => {
          var Gender = e.target.value;
          setGender(Gender)
          
      }
      const validateRole = (e) => {
        var Role = e.target.value;
        
        if(Role == 'host'){
          setIsValid(true);
          setRole(Role)
           setRoleFlag(0);
           
           
    }
       else if(Role == 'customer'){
        setIsValid(true);
        setRole(Role)
        setRoleFlag(0);
        
        
      }
         else{
           setIsValid(false);
           setRoleMessage("Select Role!")
           setRoleFlag(1);
           alert("select role")
         }
      };
      const validateConfirmPassword = (e) => {
        const confirmPassword = e.target.value;
        if(confirmPassword === window.pass){
          setConfirmPasswordFlag(0);
          setIsValid(true);
          setConfirmMessage("Password Match");
         }
         else{
           setConfirmPasswordFlag(1);
           setIsValid(false);
           setConfirmMessage("confirm password does not match!")
         }
      };
      const onSubmitHandler = (e) => {
        console.log(FirstFlag);
            console.log(LastFlag);
            console.log(EmailFlag);
            console.log(PasswordFlag);
            console.log(ConfirmPasswordFlag);
            console.log(RoleFlag);
            console.log(PhoneFlag);
          
           if(FirstFlag === 0 && LastFlag === 0 && EmailFlag === 0 && PasswordFlag === 0 && ConfirmPasswordFlag === 0 && RoleFlag === 0 && PhoneFlag === 0){
            console.log(Firstname)
            console.log(Lastname)
            console.log(Role)
            console.log(Phonenumber)
            console.log(Password)
            console.log(Gender)
            console.log(Email)  
            sendData();
            history('/Login');
           }
           else{
             alert("Required field empty")
           }
         }
         const validateheader = () =>{
           history('/home')
         }

  return (
    <>  
    <div className="header">
        <div className="header-items">
          <button onClick={validateheader}>S</button>taycation
        </div>
        <div className="header-items"></div>
      </div>
    <div className="block">
   <Form className='block-form'>
     <h1 id='registration-heading'>Registration</h1>
     <div >
   <Row className="mb-3">
    
    <Form.Group as={Col} controlId="formGridEmail">
    
      <Form.Label>First Name</Form.Label>
      
      <Form.Control  name="firstName" type="text" onChange={validateFirstname} autoComplete="off" placeholder="Enter First Name" />
  <small id="passwordHelpBlock" className="error-label form-text text-muted">
  {Firstmessage}</small>
     </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Last Name</Form.Label>
      <div>
      <Form.Control type="text" onChange={validateLastname}  autoComplete="new-password" placeholder="Enter Last Name" />
      <small id="passwordHelpBlock" className="error-label form-text text-muted">
  {Lastmessage}</small>
      </div>
    </Form.Group>
     </Row>
     </div>
        <div >
  <Row className="mb-3" id='second'>
  <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Phone Number</Form.Label>
      <div>
      <Form.Control type="text" onChange={validatePhone}  autoComplete="new-password" placeholder="Enter Phone Number" />
      <small id="passwordHelpBlock" className="error-label form-text text-muted">
  {Phonemessage}</small>
        
        </div>
    </Form.Group>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <div>
      <Form.Control type="text" onChange={validateEmail}  autoComplete="new-password" placeholder="Enter email" />
      <small id="passwordHelpBlock" className="error-label form-text text-muted">{Emailmessage}</small>
      </div>
    </Form.Group>
    </Row>
    </div>
    <br></br>
    <div>
    <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" onChange={validatePassword}  autoComplete="new-password" placeholder="Password" />
      <small id="passwordHelpBlock" className="error-label form-text text-muted">
  {Passwordmessage}</small>
    </Form.Group>
    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Confirm Password</Form.Label>
      <Form.Control onChange={validateConfirmPassword}  autoComplete="new-password" type="password" placeholder="Confirm Password" />
      <small id="passwordHelpBlock" className="error-label form-text text-muted">
  {Confirmmessage}</small>
    </Form.Group>
    </Row>
    </div>
      <div>Gender :</div>
        <div>
        <input required type="radio" value="Male" name="gender" onChange={validateGender} /> Male &nbsp;
        <input required type="radio" value="Female" name="gender" onChange={validateGender}/> Female &nbsp;
        <input required type="radio" value="Other" name="gender" onChange={validateGender}/> Other &nbsp;
      </div>

      &nbsp;
      {''}
      <div>Register as : {''}
      <select required onChange={validateRole} defaultValue="Select Role">
        <option defaultValue  >Select Role</option>
        <option value="host" >Host</option>
        <option value="customer" >Customer</option>
        </select>
        </div>

  <Form.Group className="mb-3-submit" id="formGridCheckbox">
  <br></br>
    <Button variant="primary" id='registration-button' type="submit" onClick={onSubmitHandler}>
    Submit
  </Button>
  </Form.Group>

  
</Form>
</div>
    </>
  )
}
export default RegistrationPageContainer;