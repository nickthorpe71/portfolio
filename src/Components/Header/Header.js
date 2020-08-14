import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="column centered">
      <nav id="nav-wrap">
        <ul id="nav" className="nav">
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/about'}>About</Link></li>
          <li><Link to={'/resume'}>Resume</Link></li>
          <li><Link to={'/portfolio'}>Work</Link></li>
          <li><Link to={'/contact'}>Contact</Link></li>
        </ul>
      </nav>

    </header>
  );
}