import React from "react";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>

    <nav>
      <ul>
        <li>
          <strong>CreatorVerse</strong>
        </li>
      </ul>
      <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/creators">View</Link>
        </li>
        <li>
            <Link to="/creators/new">Create</Link>
        </li>
      </ul>
    </nav>
    <main>
        <Outlet/>
    </main>
    </div>
  );
};

export default Navbar;
