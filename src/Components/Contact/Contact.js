import React from 'react';
import './Contact.css';

export default function Contact(props) {
  return (
    <section id="contact">
      <div className="row section-head">
        <div className="column">
          <h1><span>Get In Touch.</span></h1>
        </div>
        <div className="column">
          <p className="lead">If you are looking for a a committed versatile developer, or you are interested
          in connecting to discuss / work on innovative ventures feel free to contact me directly or by using the form below.
            </p>
        </div>
      </div>
      <div className="row section-body">
        <div className="column">
          <form method="post" id="contactForm" name="contactForm">
            <fieldset>
              <div>
                <label htmlFor="contactName">Name <span className="required">*</span></label>
                <input type="text" size={35} id="contactName" name="contactName" required />
              </div>
              <div>
                <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                <input type="email" size={35} id="contactEmail" name="contactEmail" required />
              </div>
              <div>
                <label htmlFor="contactSubject">Subject</label>
                <input type="text" size={35} id="contactSubject" name="contactSubject" />
              </div>
              <div>
                <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                <textarea cols={50} rows={15} id="contactMessage" name="contactMessage" defaultValue={""} required />
              </div>
              <div>
                <button className="submit">Submit</button>
                <span id="image-loader">
                  <img alt="" src="images/loader.gif" />
                </span>
              </div>
            </fieldset>
          </form>
          <div id="message-warning"> Error boy</div>
          <div id="message-success">
            <i className="fa fa-check" />Your message was sent, thank you!<br />
          </div>
        </div>
        <div className="column">
          <h4>Address and Phone</h4>
          <ul className="address">
            <li>Nick Thorpe</li>
            <li>Chicago, IL</li>
            <li>(347)583-3555</li>
            <li>nickthorpe71@gmail.com</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
