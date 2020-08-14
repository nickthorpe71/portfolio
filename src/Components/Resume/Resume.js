import React from 'react';
import './Resume.css';

export default function Resume() {
  return (

    <section id="resume">
      {/* Work
      ----------------------------------------------- */}
      <div className="row work">
        <div className="column header-col">
          <h1><span>Work</span></h1>
        </div>
        <div className="column main-col">
          <div className="row item">
            <div className="column">
              <h3>Lost One Studios</h3>
              <p className="info"> Game Developer <span>•</span> Mar 2017 - July 2020</p>
              <ul>
                <li>
                  Wrote code for a variety of systems including AI player behaviour, game mechanics, sound integration, visual effects, UX/UI and more
                </li>
                <li>
                  Created fully functioning multiplayer networked matchmaking using Photon (PUN 2)
                </li>
                <li>
                  Implemented in app purchases and advertising on multiple games
                </li>
                <li>
                  Identified, tested, documented and fixed bugs
                </li>
              </ul>
            </div>
          </div> {/* item end */}
          <div className="row item">
            <div className="column">
              <h3>PartsTrader</h3>
              <p className="info">Technical Support Specialist <span>•</span> July 2018 - May 2020</p>
              <ul>
                <li>
                  Resolved issues customers were having with our software on a variety of different operating systems
                </li>
                <li>
                  Built systems to automate tasks around the office using VBA and PowerApps
                </li>
                <li>
                  Utilized Excel and Power BI to generate daily, weekly and monthly reporting  for management
                </li>
              </ul>
            </div>
          </div> {/* item end */}
        </div> {/* main-col end */}
      </div> {/* End Work */}
      {/* Education
      ----------------------------------------------- */}
      <div className="row education">
        <div className="column header-col">
          <h1><span>Education</span></h1>
        </div>
        <div className="column main-col">
          <div className="row item">
            <div className="column">
              <h3>Thinkful</h3>
              <p className="info">Full Stack Web Development <span>•</span> March 2020 - Oct 2020</p>
              <ul>
                <li>
                  Learned industry best practices and practical software development standards with a focus on HTML5, CSS3, JavaScript, jQuery, Node.js, React, Redux, and algorithms {'&'} data structures.
                </li>
                <li>
                  Created and deployed mobile-first applications while learning new languages and frameworks by collaborating several hours every week with a senior web developer.
                </li>
              </ul>
            </div>
          </div>
        </div> {/* main-col end */}
      </div> {/* End Education */}
      {/* Skills
      ----------------------------------------------- */}
      <div className="row skill">
        <div className="column header-col">
          <h1><span>Skills</span></h1>
        </div>
        <div className="column main-col">
          <p>A summary of the skills I have aquired so far but I have a passion for learning so this list is always expanding.
            </p>
          <div className="bars">
            <ul className="skills">
              <li>React.js</li>
              <li>Javascript</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>CSS</li>
              <li>HTML5</li>
              <li>jQuery</li>
              <li>Vercel</li>
              <li>Heroku</li>
              <li>Unity</li>
              <li>C#</li>
            </ul>
          </div>{/* end skill-bars */}
        </div> {/* main-col end */}
      </div> {/* End skills */}
    </section>
  );
};
