import React from "react";
import {Link} from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav-container">
      <div>
        <h3>Nav!</h3>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;