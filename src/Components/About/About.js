import React from 'react';
import './About.css';

export default function About(props) {
  return (
    <section id="about">
      <div className="main-row">
        <div className="stretch-fix">
          <img className="profile-pic" src="images/profilepic.png" alt="profile pic" />
        </div>
        <div className="column main-col">
          <h2>About Me</h2>
          <p>What started as a desire to create my own games to share with friends
          has evolved into a passion for building software that is engaging and
          innovative. Most of my online presence as a developer has been through
          Lost One Studios which can be found on both Instagram and Twitter.
          I recently launched a turn based strategy PvP game in the mobile market
          called Alchamancer which has hundreds of downloads. I am currently attending
          the Thinkful software engineering bootcamp to expand my fullstack web dev skills and
          ultimately find a great team that I can commit to and work with to deliver
          amazing products. Outside of programming I love playing music and exercising,
          currently on a calisthenics kick.
            </p>
          <div className="row">
            <div className="column contact-details">
              <h2>Contact Details</h2>
              <ul className="address">
                <li>Nick Thorpe</li>
                <li>Chicago, IL</li>
                <li>(347)583-3555</li>
                <li>nickthorpe71@gmail.com</li>
              </ul>
            </div>
            <div className="column">
              <p>
                <a href="pdfs/nick-resume2020.pdf" className="button" rel="noopener noreferrer" target="_blank"><i className="fa fa-download" />Download Resume</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
