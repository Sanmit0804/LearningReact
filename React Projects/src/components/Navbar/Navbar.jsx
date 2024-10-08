import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="navbar-links" >
        <Link to="/accordion">Accordion</Link>
        <Link to="/randomColor">Random Color</Link>
        <Link to="/starRating">Star Rating</Link>
        <Link to="/imageSlider">Image Slider</Link>
        <Link to="/loadmore">Load More</Link>
        <Link to="/password">Password</Link>
        <Link to="/treeView">Tree View</Link>
      </div>
    </nav>
  );
};

export default Navbar;
