import React from 'react';

export default function Header() {
  return (
    < header id="home" >
      <nav id="nav-wrap">
        <ul id="nav" className="nav">
          <li className="current"><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#portfolio">Work</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">I'm Nick,</h1>
          <h3>My current specialties include fullstack web development and game dev/design with Unity. </h3>
          <ul className="social">
            <li><a href="#"><i className="fa fa-twitter" /></a></li>
            <li><a href="#"><i className="fa fa-linkedin" /></a></li>
            <li><a href="#"><i className="fa fa-instagram" /></a></li>
          </ul>
        </div>
      </div>
    </header >
  );
};