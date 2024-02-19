import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './styling/NavBar.css';
import logo from '../../assets/icons/Logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <header className="container">
      <div className="navbar">

  
      <div className="flex-logo">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>

      <div className="flex-links">
        <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <div className="empty-space"></div>
          <Link className="blue" to="/" onClick={toggleMenu}><h1>Home</h1></Link>
          <Link className="blue" to="/about-me" onClick={toggleMenu}><h1>Resume</h1></Link>
          <Link className="blue" to="/portfolio" onClick={toggleMenu}><h1>Portfolio</h1></Link>
          <Link className="blue" to="/arcade" onClick={toggleMenu}><h1>Arcade</h1></Link>
        </nav>
      </div>

      <div className={`flex-menu ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="menu-icon" >
          <div className="menu-lines">
            <div className="menu-icon-one"></div>
            <div className="menu-icon-two"></div>
            <div className="menu-icon-three"></div>
            <div className="menu-icon-four"></div>
          </div>
        </div>
      </div>
      </div>

      <div className='fader'>

</div>
    </header>
  );
};

export default Navbar;
