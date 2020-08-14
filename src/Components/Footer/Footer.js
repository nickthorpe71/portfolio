import React from 'react';
import './Footer.css';

export default function Footer(props) {
  return (
    <footer>
      <div className="row">
        <ul className="social-links row">
          <li><a href="https://github.com/nickthorpe71" rel="noopener noreferrer" target="_blank"><i className="fa fa-github" /></a></li>
          <li><a href="https://www.linkedin.com/in/nick-thorpe-dev/" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin" /></a></li>
          <li><a href="https://www.instagram.com/nick_lostonestudios/" rel="noopener noreferrer" target="_blank"><i className="fa fa-instagram" /></a></li>
          <li><a href="https://twitter.com/lostonestudios?lang=en" rel="noopener noreferrer" target="_blank"><i className="fa fa-twitter" /></a></li>
        </ul>
      </div>
    </footer>
  );
};