import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="first">
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
        <li>
          <Link to="/our-products">Our Products</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
