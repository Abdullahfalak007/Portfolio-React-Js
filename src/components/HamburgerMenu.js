import React, { useState } from "react";
import { Link } from "react-router-dom";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav id="hamburger-nav">
      <div className="logo">Muhammad Abdullah</div>
      <div className="hamburger-menu">
        <div
          className={`hamburger-icon ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`menu-links ${isOpen ? "open" : ""}`}>
          <li>
            <Link to="/about" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/skills" onClick={toggleMenu}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="/experience" onClick={toggleMenu}>
              Experience
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={toggleMenu}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default HamburgerMenu;
