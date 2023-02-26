import React from "react";
import { Link } from "react-router-dom";
//import style
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer  text-light">
      <div className="text-center">
        <p className="bg-dark">
          <Link
            className="link"
            to={"https://github.com/Sbrenz"}
            target="_blank"
          >
            Daniel Schiraldi
          </Link>{" "}
          - &copy;COPYRIGHT 2023
        </p>
      </div>
    </footer>
  );
};

export default Footer;
