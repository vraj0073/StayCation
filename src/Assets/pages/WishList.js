// Written by - Het Shah - B00886897 - ht699147@dal.ca

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

function WishList() {
  const [state, setState] = useState([]);
  const email = "vrajjadhav0073@gmail.com";
  const toHome = useNavigate();
  // Getting property listings on the useEffect function
  useEffect(() => {
    const API_URL = `http://localhost:5000/wishlist/getwishlist/${email}`;
    //const API_URL = `https://csci5709hsa3backend.herokuapp.com/wishlist/getwishlist/${email}`;
    axios({
      method: "get",
      url: API_URL,
    }).then(function (response) {
      if (response.status === 200) {
        setState(response.data);
      }
    });
  }, [state]);
  function deleteListing(id) {
    console.log(id);
    const API_URL = `http://localhost:5000/wishlist/deletewishlist/${id}`;
    axios({
      method: "delete",
      url: API_URL,
    }).then(function (response) {
      console.log(response);
    });
  }
  return (
    <div>
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
                    <Nav.Link href="blogs" className="header-content">
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
                      <NavDropdown.Item href="Logout">Logout </NavDropdown.Item>
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
        View WishList of User -
        <h6 style={{ textAlign: "center" }}> {email} </h6>
      </div>
      <div className="row justify-content-center" style={{ display: "flex" }}>
        {state.map((wishlist, key) => (
          <Card
            style={{ width: "19rem", marginTop: "1rem", alignItems: "center" }}
          >
            <Card.Img
              variant="top"
              src={wishlist.pimage}
              style={{ width: "15rem", height: "10rem" }}
            />
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                {wishlist.ptitle}
              </Card.Title>

              <Button variant="primary">Check it out</Button>
              <Button
                variant="danger"
                onClick={() => {
                  deleteListing(wishlist._id);
                }}
                style={{ marginLeft: "10px" }}
              >
                Delete
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default WishList;
