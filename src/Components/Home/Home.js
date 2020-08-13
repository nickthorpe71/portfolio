import React from 'react';
import './Home.css';

export default function Header() {
  return (
    < section id="home" style={{
      background: "url('images/header-background.png')"
    }}>
      <div className="row banner">
        <div className="banner-text">
          <h1>I'm Nick,</h1>
          <h3>My specialties include fullstack web development and game dev/design with Unity. </h3>
        </div>
      </div>
    </section >
  );
};