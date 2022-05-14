import React from "react";
import Logo from "../images/logo.png";

function NavBar() {
  return (
    <nav className="navbar">
      <img className="nav--logo" src={Logo} alt="Airbnb logo" />
    </nav>
  );
}

export default NavBar;
