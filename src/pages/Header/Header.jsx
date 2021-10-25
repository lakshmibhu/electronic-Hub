import React from "react";

import { Navbar, Nav } from "react-bootstrap";
// import Nav from "react-bootstrap/Nav";
// import './Header.css';

import { NavLink, Form, FormControl } from "react-bootstrap";
class Header extends React.Component {
  render() {
    return (
      <div className="Row1">
        <Navbar
          bg="dark"
          variant="dark"
          expand="lg"
          class="navbar"
          id="Colorid"
        >
          <Navbar.Brand href="#">
            {""}
            {""}
          </Navbar.Brand>

          <Navbar.Brand href="/" id="loginbtn1">
            <img
              src="https://www.logolynx.com/images/logolynx/08/08e6220e4bc399736785e6a3519b609e.jpeg"
              alt="Electonic Store"
              width="100"
              height="100"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
          </Navbar.Collapse>

          <Nav>
            <Nav.Link>
              {""}
              {""}
            </Nav.Link>
            <NavLink>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search For Products"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
            </NavLink>
            <Nav.Link>
              <i class="fa fa-search" id="searchbtn" aria-hidden="true"></i>
            </Nav.Link>
            <Nav.Link href="/Login" exact id="loginbtn" type="button">
              Login/Signup
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
export default Header;
