import React from "react";
import { Link } from "react-router-dom";

// import navbar from bootstrap
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

//import style
import "./navbar.css";

const Navigationbar = () => {
  return (
    <Navbar className="navigationBar p-5">
      <Nav className="row d-flex align-items-center">
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" />
        <Navbar.Brand className="col d-flex ">
          <Link className="link" to={"/"}>
            Global Warming Dashboard
          </Link>
        </Navbar.Brand>
        <Nav.Link className="col chartLink">
          <Link className="link  lead" to={"/Dashboard"}>
            Charts
          </Link>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Navigationbar;
