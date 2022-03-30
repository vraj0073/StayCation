/*
Author: Vraj Jadhav
Description: This component handle landing page.
*/
import React from "react";
import "../css/Header.css";
import "react-bootstrap";
import "../css/Customer.css";
import {
  Card,
  Container,
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "../css/Home.css";

export const Home = () => {
  return (
    <>
      <div>
        <div className="col">
          <div className="header">
            <div className="header-items">
              <button>S</button>taycation
              <Navbar collapseOnSelect expand="lg">
                <Container className="container" id="homenavigation">
                  <Navbar.Brand href="#home" className="header-navbar">
                    Home
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link href="#features" className="header-content">
                        Blogs
                      </Nav.Link>
                      <Nav.Link href="#pricing" className="header-content">
                        Search
                      </Nav.Link>
                      <Nav.Link href="#pricing" className="header-content">
                        About
                      </Nav.Link>
                      <Nav.Link href="#pricing" className="header-content">
                        Contact
                      </Nav.Link>
                      <NavDropdown
                        title="Login"
                        id="title"
                        className="header-content"
                      >
                        <NavDropdown.Item href="Register">
                          New User
                        </NavDropdown.Item>
                        <NavDropdown.Item href="Login">
                          Existing User
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

        <div>
          <img
            id="homeimage"
            src={require("../Assets/images/tent.jpg")}
            alt="Logo"
          ></img>
          <Form className="d-flex" id="searchbar">
            <FormControl
              id="searchbarsize"
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button id="searchbutton">Search</Button>
          </Form>
        </div>
      </div>
    </>
  );
};
export default Home;
