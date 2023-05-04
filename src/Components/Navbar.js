import React from "react";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Homes</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <button>Log in</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
