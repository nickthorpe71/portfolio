import React from 'react';
import './Footer.css';

export default function Footer(props) {
  return (
    <footer>
      <div className="row">
        <ul className="social-links row">
          <li><a href="#"><i className="fa fa-github" /></a></li>
          <li><a href="#"><i className="fa fa-linkedin" /></a></li>
          <li><a href="#"><i className="fa fa-instagram" /></a></li>
          <li><a href="#"><i className="fa fa-twitter" /></a></li>
        </ul>
      </div>
    </footer>
  );
};