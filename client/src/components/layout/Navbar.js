import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <i className="fas fa-code" /> DevConnector
      </h1>
      <ul>
        <li>
          <a href="#!">Developers</a>
        </li>
        <li>
          <a href="#!">Register</a>
        </li>
        <li>
          <a href="#!">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
