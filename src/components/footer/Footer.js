import React from "react";
import { Link } from "react-router-dom";
//import style
import style from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <p>
        &copy; {""}
        <Link
          className={style.linkFooter}
          to={"https://github.com/Sbrenz"}
          target="_blank"
        >
          Daniel Schiraldi
        </Link>{" "}
        2023
      </p>
    </footer>
  );
};

export default Footer;
