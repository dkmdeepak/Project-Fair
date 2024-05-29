import React from 'react';
import { Link } from 'react-router-dom';



function SideNav() {
  return (
    <nav className="side-nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <a href=""></a>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </nav>
  );
}

export default SideNav;