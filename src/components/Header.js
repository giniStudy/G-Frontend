import React from 'react';
import '../css/Header.css';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <header className="header">
      <Link to="/boards/0" className="logo">
        GINI
      </Link>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon">
        <span className="navicon"></span>
      </label>{' '}
      {/*for="menu-btn"*/}
      <ul className="menu">
        <li>
          <a href="#work">Our Work</a>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <a href="#careers">Careers</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </header>
  );
}
export default Header;
