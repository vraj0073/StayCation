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
  
  const NavBar = () => {
    return (
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
    );
  };
  export default NavBar;
  