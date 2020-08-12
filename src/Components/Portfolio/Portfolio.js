import React from 'react';

export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="row">
        <div className="column">
          <h1>Check Out Some of My Work.</h1>
          <div id="portfolio-wrapper">
            {/* add portfolio items */}
            <div className="column portfolio-item">
              <div className="item-wrap">
                <button>
                  <img alt="" src="images/portfolio/coffee.jpg" />
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>A Training Notebook</h5>
                      <p>React app for tracking workouts</p>
                    </div>
                  </div>
                  <div className="link-icon"><i className="icon-plus" /></div>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
