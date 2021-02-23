import React from 'react';
import '../css/Header.css'
function Header(){
    return (
        <header className="header">
            <a href="" className="logo">GINI</a>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon"><span className="navicon"></span></label> {/*for="menu-btn"*/}
            <ul className="menu">
                <li><a href="#work">Our Work</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </header>
    )
}
export default Header;