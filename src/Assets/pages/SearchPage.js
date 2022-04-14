/*
Author: Kishan Kahodariya
Description: This component allows user to search for accomodation.
*/

import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import {
  Container,
  Form,
  DropdownButton,
  Dropdown,
  Button,
  Col,
  Row,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AccomodationItem from "../../components/AccomodationItem";
import "../../css/Home.css";
import "../../css/Header.css";
import "react-bootstrap";
import "../../css/SearchPage.css";
require("react-datepicker/dist/react-datepicker.css");

export const SearchPage = () => {
  const [location, setLocation] = useState("halifax");
  const [duration, setDuration] = useState("days");
  const [accomodationType, setAccomodationType] = useState("long-term");
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [accomodationList, setAccomodationList] = useState([]);
  const [flag, setFlag] = useState(true);
  const history = useNavigate();

  async function simpleSearch(e) {
    e.preventDefault();
    const API_URL = `https://staycationbackendapp.herokuapp.com/search/simplesearch/${location}`;
    try {
      await axios({
        method: "get",
        url: API_URL,
      }).then(function (response) {
        if (response.status === 200) {
          setAccomodationList(response.data);
          setFlag(false);
        }
      });
    } catch (e) {
      console.log("Error in retrieving: " + e);
    }
  }

  async function customSearch(e) {
    e.preventDefault();
    const API_URL = `https://staycationbackendapp.herokuapp.com/search/customsearch/${location}/${accomodationType}/${duration}`;
    try {
      await axios({
        method: "get",
        url: API_URL,
      }).then(function (response) {
        if (response.status === 200) {
          setAccomodationList(response.data);
          setFlag(false);
        }
      });
    } catch (e) {
      console.log("Error in retrieving: " + e);
    }
  }

  return (
    <>
      <div className="col">
        <div className="header">
          <div className="header-items">
            <button>S</button>taycation
            <Navbar collapseOnSelect expand="lg">
              <Container
                className="d-flex"
                id="homenavigation"
                style={{ paddingTop: "0%" }}
              >
                <Navbar.Brand href="#home" className="header-navbar">
                  Home
                </Navbar.Brand>
                <Navbar.Toggle arial-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="/blogs" className="header-content">
                      Blogs
                    </Nav.Link>
                    <Nav.Link href="/search" className="header-content">
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
        </div>
      </div>

      <div>
        <div>
          {flag ? (
            <div>
              <h2 className="title">Simple Search</h2>
              <Form>
                <div
                  className="input-group mb-3"
                  style={{ paddingLeft: "25px", paddingTop: "25px" }}
                >
                  <Form.Control
                    type="text"
                    className="simplesearch"
                    placeholder="e.g Halifax..."
                    aria-label="simpleSearch"
                    aria-describedby="basic-addon2"
                    onChange={(e) => {
                      setLocation(e.target.value);
                    }}
                  />
                  <div className="input-group-append">
                    <Button
                      variant="primary"
                      type="submit"
                      style={{ paddingLeft: "20p x" }}
                      onClick={(e) => simpleSearch(e)}
                    >
                      Search
                    </Button>
                  </div>
                </div>
              </Form>
              <br />
              <div>
                <h2 className="title">Custom Search</h2>
                <Form>
                  <Form.Group className="mb-3" id="formCustomLocation">
                    <Form.Label className="labelTxt">Location</Form.Label>
                    <div style={{ paddingLeft: "20px" }}>
                      <Form.Control
                        style={{ width: "500px", height: "40px" }}
                        onChange={(e) => {
                          setLocation(e.target.value);
                        }}
                        id="customLocation"
                        placeholder="e.g Halifax"
                      />
                    </div>
                  </Form.Group>

                  <Form.Group className="mb-3" id="accomodation">
                    <Form.Label className="labelTxt">
                      Accomodation-Type
                    </Form.Label>
                    <div style={{ paddingLeft: "20px" }}>
                      <DropdownButton
                        id="accomodation"
                        title={accomodationType}
                      >
                        <Dropdown.Item
                          onClick={(e) => {
                            setAccomodationType("long-term");
                          }}
                          value="long-term"
                        >
                          long-term
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={(e) => {
                            setAccomodationType("short-term");
                          }}
                          value="short-term"
                        >
                          short-term
                        </Dropdown.Item>
                      </DropdownButton>
                    </div>
                  </Form.Group>

                  <Form.Group className="mb-3" id="duration">
                    <Form.Label className="labelTxt">Duration</Form.Label>
                    <div style={{ paddingLeft: "20px" }}>
                      <DropdownButton id="duration" title={duration}>
                        <Dropdown.Item
                          onClick={(e) => {
                            setDuration("months");
                          }}
                          value="months"
                        >
                          months
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={(e) => {
                            setDuration("days");
                          }}
                          value="days"
                        >
                          days
                        </Dropdown.Item>
                      </DropdownButton>
                    </div>
                  </Form.Group>
                  <Form.Group className="mb-3" id="formCustomLocation">
                    <Row>
                      <Col>
                        <Form.Label className="labelTxt">
                          CheckIn-Date
                        </Form.Label>
                        <div style={{ paddingLeft: "20px" }}>
                          <DatePicker
                            popperPlacement="bottom-start"
                            selected={checkInDate}
                            onChange={(date) => setCheckInDate(date)}
                          />
                        </div>
                      </Col>
                      <Col>
                        <Form.Label className="labelTxt">
                          CheckOut-Date
                        </Form.Label>
                        <div style={{ paddingLeft: "20px" }}>
                          <DatePicker
                            popperPlacement="bottom-start"
                            selected={checkOutDate}
                            onChange={(date) => setCheckOutDate(date)}
                          />
                        </div>
                      </Col>
                    </Row>
                  </Form.Group>
                  <br />
                  <div className="customSearchBtn">
                    <Button
                      style={{ backgroundColor: "rgb(218, 26, 138)" }}
                      variant="secondary"
                      type="submit"
                      onClick={(e) => customSearch(e)}
                    >
                      Submit
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          ) : (
            <div>
              <h2 className="title">Search Results</h2>
              <div
                className="row justify-content-start"
                style={{
                  display: "flex",
                  alignItems: "center",
                  alignContent: "center",
                  textAlign: "-webkit-center",
                }}
              >
                <Row>
                  {accomodationList &&
                    accomodationList.map((eachItem, i) => (
                      <Col>
                        <div key={i}>
                          <AccomodationItem
                            title={eachItem.title}
                            description={eachItem.description}
                            imageURL={eachItem.img}
                            feature={eachItem.feature}
                            city={eachItem.location}
                            state={eachItem.state}
                            country={eachItem.country}
                            room={eachItem}
                          />
                        </div>
                      </Col>
                    ))}
                </Row>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
