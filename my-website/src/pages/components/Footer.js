import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './styling/Footer.css';
import { ReactComponent as LinkedinIcon } from '../../assets/icons/linkedin_icon.svg';
import { ReactComponent as GithubIcon } from '../../assets/icons/github_icon.svg';
import { ReactComponent as YoutubeIcon } from '../../assets/icons/youtube_icon.svg';

const Footer = () => {
  return (
    <header className="footer">
      <nav className="footer-links">
        <Link to="https://www.linkedin.com/in/jamespatzmann" target="_blank" rel="noopener noreferrer">
          <LinkedinIcon alt="LinkedIn" className="social-media" id="linkedin" />
        </Link>
        <Link to="https://github.com/JamesRyanP" target="_blank" rel="noopener noreferrer">
          <GithubIcon alt="GitHub" className="social-media" id="github" />
        </Link>
        <Link to="https://www.youtube.com/channel/UCBn6GSBh80jJrqADdXZY4xA" target="_blank" rel="noopener noreferrer">
          <YoutubeIcon alt="YouTube" className="social-media" id="youtube" />
        </Link>
      </nav>
    </header>
  );
};

export default Footer;
