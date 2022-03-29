import { React, useState, useEffect } from "react";
import {
  Card,
  Button,
  Nav,
  Navbar,
  NavDropdown,
  Container,
} from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../css/Home.css";
import "../../css/Header.css";

// Written by - Het Shah - B00886897 - ht699147@dal.ca

function TravelHistory(props) {
  const [state, setState] = useState([]);
  const email = props.email;
  const toHome = useNavigate();
  useEffect(() => {
    const API_URL = `https://csci5709hsa3backend.herokuapp.com/bookings/getbookingbyemail/${email}`;
    axios({
      method: "get",
      url: API_URL,
    }).then(function (response) {
      if (response.status === 200) {
        setState(response.data);
      }
    });
  }, []);

  return (
    // <div className="container-fluid">
    <div>
      {/* Header */}
      <div className="col">
        <div className="header">
          <div className="header-items">
            <button
              onClick={() => {
                toHome("/home");
              }}
            >
              S
            </button>
            taycation
            <Navbar>
              <Container className="container" id="homenavigation">
                <Navbar.Brand href="home" className="header-navbar">
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

      <div className="row justify-content-center mt-3">
        View Travel History of User -
        <h6 style={{ textAlign: "center" }}> {email} </h6>
      </div>
      <div className="row justify-content-center" style={{ display: "flex" }}>
        {state.map((booking, key) => (
          <Card
            style={{ width: "19rem", marginTop: "1rem", alignItems: "center" }}
          >
            <Card.Img
              variant="top"
              src={booking.pimage}
              style={{ width: "15rem", height: "10rem" }}
            />
            <Card.Body>
              <Card.Title>{booking.ptitle}</Card.Title>
              <Card.Text>Date Travelled - {booking.datetravelled}</Card.Text>
              <Button variant="primary">Check it out</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default TravelHistory;
