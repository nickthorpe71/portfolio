import React from 'react';

export default function Portfolio() {
  return (
    <div className="columns portfolio-item">
      <div className="item-wrap">
        <a href="#modal-01" title>
          <img alt="" src="images/portfolio/coffee.jpg" />
          <div className="overlay">
            <div className="portfolio-item-meta">
              <h5>Coffee</h5>
              <p>Illustrration</p>
            </div>
          </div>
          <div className="link-icon"><i className="icon-plus" /></div>
        </a>
      </div>
    </div>
  );
}