import React, { useEffect, useState } from "react";
import "../css/Header.css";
import "react-bootstrap";
import "../css/Customer.css";
import {
  Card,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import EditProfile from "./EditProfile";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Navheader";

export const Navheader = (props) => {
  const history = useNavigate();
  const validatesubmit = () => {
    history("/home");
  };
  const logout = () => {
    localStorage.removeItem("userEmail");
  };

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
                      <NavDropdown.Item href="Editprofile">
                        Edit Profile
                      </NavDropdown.Item>
                      <NavDropdown.Item>Delete Profile</NavDropdown.Item>
                      <NavDropdown.Item href="Resetpassword">
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
