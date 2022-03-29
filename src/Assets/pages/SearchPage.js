import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Container,
  Form,
  FormControl,
  Button,
  ButtonGroup,
  Col,
  Row,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

const SearchPage = () => {
  let navigate = useNavigate();
  const [rooms, setRooms] = useState([]);

  const fetchRooms = () => {
    console.log("fetch items");
    fetch("https://staycationbackendapp.herokuapp.com/hostuser/getlisting")
      .then((result) => {
        if (result.status !== 200) {
          throw new Error("Could not fetch Rooms from DB");
        }
        return result.json();
      })
      .then((roomsData) => {
        console.log("Fetched items successfully", roomsData);
        setRooms(roomsData.data);
      })
      .catch((err) => {
        throw err;
      });
    console.log(rooms);
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  let roomsRender = rooms.map((room) => (
    <li>
      <div>{room.name}</div>
      <button
        onClick={() => {
          navigate("/rooms/"+room._id, { state: { room } });
        }}
      >
        View
      </button>
    </li>
  ));
  return (
    <>
      <div>
        <div className="col">
          <div className="header">
            <div className="header-items">
              <button>S</button>taycation
              <Navbar collapseOnSelect expand="lg">
                <Container className="d-flex" id="homenavigation">
                  <Navbar.Brand href="#home" className="header-navbar">
                    Home
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link href="/blogs" className="header-content">
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
          </div>
        </div>
        <h2 className="title">Search Page Under Construction</h2>
      </div>
      {/* <h1>Search Page</h1> */}
      <div>Stays in BridgeWater</div>
      <div>{roomsRender}</div>
    </>
  );
};

export default SearchPage;
