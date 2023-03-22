import React from "react";
import { Link } from "react-router-dom";

// import components from bootstrap
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

//import style
import style from "./navbar.module.css";

const Navigationbar = () => {
  return (
    <Navbar className={style.navigationBar}>
      <Nav>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" />

        <Navbar.Brand>
          <Link className={style.link} to={"/"}>
            Global Warming Dashboard
          </Link>
        </Navbar.Brand>

        <Nav.Link className={style.chartLink}>
          <Link className={style.link} to={"/dashboard"}>
            Charts
          </Link>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Navigationbar;
