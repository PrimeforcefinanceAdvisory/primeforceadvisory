import React, { useState } from "react";
import logo from "../images/Logo.png";
import { Link } from "react-scroll";

function Navbar() {
  const [nav, setNav] = useState(false);

  const changeBackground = () => {
    setNav(window.scrollY >= 50);
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link to="main" className="logo" smooth={true} duration={2000}>
        <img src={logo} alt="Logo" />
      </Link>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="nav-icon0"></span>
      </label>
      <ul className="menu">
        <li>
          <Link to="main" smooth={true} duration={1000}>
            Home
          </Link>
        </li>
        <li>
          <Link to="features" smooth={true} duration={1000}>
            Features
          </Link>
        </li>
        <li>
          <Link to="services" smooth={true} duration={1000}>
            Services
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={1000}>
            About
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={1000}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
