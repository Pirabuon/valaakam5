import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";

import ShareButton from "./share";
import MobileNav from "./MobileNav";
import NavFooter from "./NavFooter";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className={"menu"}>
        <Link to="/">
          <img className="logo" src={logo} alt="Logo" />
        </Link>
        <MobileNav />
        <li className="hsShare">
          <ShareButton />
        </li>
      </ul>
      <NavFooter />
    </nav>
  );
};

export default Navbar;
