import React from 'react';

export default function Footer(props) {
  return (
    <footer>
      <div className="row">
        <div className="column">
          <ul className="social-links">
            <li><a href="#"><i className="fa fa-twitter" /></a></li>
            <li><a href="#"><i className="fa fa-linkedin" /></a></li>
            <li><a href="#"><i className="fa fa-instagram" /></a></li>
          </ul>
          <ul className="copyright">
            <li>© Copyright 2014 CeeVee</li>
            <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
          </ul>
        </div>
        <div id="go-top"><a title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
      </div>
    </footer>
  );
};