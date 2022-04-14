import React from "react";
import "../css/Header.css";
import "react-bootstrap";
import "../css/Customer.css";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Navheader";

export const Navheader = (props) => {
  const history = useNavigate();
  const validatesubmit = () => {
    history("/home");
  };
  const logout = () => {
    localStorage.removeItem("userEmail");
  };

  const validResetPassword =()=>{
    history('/Resetpassword?query='+props.data)
  }
  const validdelete = () =>{
    history('/deleteprofile?query='+props.data)
  }

  const validedit=(e)=>{
    history('/editprofile?query='+props.data)

  }
  return (
    <>
      <div className="col">
        <div className="header">
          <div className="header-items">
            <button onClick={validatesubmit}>S</button>taycation
            <Navbar collapseOnSelect expand="lg">
              <Container className="navContainer">
                <Navbar.Brand href="home" className="header-navbar">
                  Home
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="blogs" className="header-content">
                      Blogs
                    </Nav.Link>
                    <Nav.Link href="th" className="header-content">
                      History
                    </Nav.Link>
                    <NavDropdown
                      title="Account Setting"
                      id="title"
                      className="header-content"
                    >
                      <NavDropdown.Item  onClick={validedit}>
                        Edit Profile
                      </NavDropdown.Item>
                      <NavDropdown.Item onClick={validdelete}>Delete Profile</NavDropdown.Item>
                      <NavDropdown.Item href="help-center">Help Center</NavDropdown.Item>
                      <NavDropdown.Item  href="user-reviews">Reviews</NavDropdown.Item>
                      <NavDropdown.Item  onClick={validResetPassword}>
                        Reset Password
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="Logout"
                        onClick={() => {
                          logout();
                        }}
                      >
                        Logout{" "}
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
          <div className="header-items"></div>
        </div>
      </div>
    </>
  );
};

export default Navheader;
