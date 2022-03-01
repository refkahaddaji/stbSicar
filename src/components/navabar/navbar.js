import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import "./navbar.css";
import { Link } from "react-router-dom";
// import logo from "./Logo.png"
// import LoginDialog from "../MUI/Dialog";
import logo from "./logo.svg";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 150) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);
  //

  return (
    <>
      <div class={colorChange ? " colorChange nav" : "navbar nav"}>
        <input type="checkbox" id="nav-check" />
        <div class="nav-header">
          <div class= {colorChange ? "nav-title-on  " :"nav-title"}>
            <img src={logo} alt="" />
          </div>
        </div>
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div class="nav-links">
          <a href="//github.io/jo_geek" target="_blank">
            Github
          </a>
          <a href="http://stackoverflow.com/users/4084003/" target="_blank">
            Stackoverflow
          </a>
          <a
            href="https://in.linkedin.com/in/jonesvinothjoseph"
            target="_blank"
          >
            LinkedIn
          </a>
          <a href="https://codepen.io/jo_Geek/" target="_blank">
            Codepen
          </a>
          <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">
            JsFiddle
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
