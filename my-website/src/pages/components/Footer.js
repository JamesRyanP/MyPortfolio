import React, { useEffect } from 'react';
import './styling/Footer.css';
import { ReactComponent as Linkedin } from '../../assets/icons/linkedin_icon.svg';
import { ReactComponent as Github } from '../../assets/icons/github_icon.svg';
import { ReactComponent as Youtube } from '../../assets/icons/youtube_icon.svg';



const Footer = () => {


  return (
    <header className="footer">
      <nav className="footer-links">
        <Linkedin alt="Logo" className="social-media" id="linkedin" />
        <Github alt="Logo" className="social-media" id="github" />
        <Youtube alt="Logo" className="social-media" id="youtube" />
      </nav>
    </header>
  );
};
  
  export default Footer;