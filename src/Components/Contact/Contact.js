import React, { useState } from 'react';
import './Contact.css';

export default function Contact(props) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [buttonText, setButtonText] = useState('Send Message');
  const [sent, setSentBool] = useState(false);


  function handleSubmit(e) {
    e.preventDefault();

    setButtonText('Sending...');

    let data = {
      name,
      email,
      subject,
      message
    };

    fetch('https://cryptic-harbor-32314.herokuapp.com/api/contact', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        setSentBool(true);
        resetForm();
      })
      .catch(() => {
        console.log('Message not sent');
      });
  }

  function resetForm() {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setButtonText('Send Message');
  }

  return (
    <section id="contact">
      <div className="row section-head">
        <div className="column">
          <h1><span>Get In Touch.</span></h1>
        </div>
        <div className="column">
          <p className="lead">If you are interested in connecting to discuss / work on innovative ventures feel free to contact me directly or by using the form below.
            </p>
        </div>
      </div>
      <div className="row section-body">
        <div className="column">
          {/* form start */}
          <form id="contactForm" name="contactForm" onSubmit={handleSubmit}>
            <fieldset>
              <div>
                <label htmlFor="contactName">Name <span className="required">*</span></label>
                <input type="text" size={35} id="contactName" name="contactName"
                  onChange={e => setName(e.target.value)} required
                  placeholder="Your Name" value={name} />
              </div>
              <div>
                <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                <input type="email" size={35} id="contactEmail" name="contactEmail"
                  onChange={e => setEmail(e.target.value)} required
                  placeholder="your@email.com" value={email} />
              </div>
              <div>
                <label htmlFor="contactSubject">Subject</label>
                <input type="text" size={35} id="contactSubject" name="contactSubject"
                  onChange={e => setSubject(e.target.value)}
                  placeholder="subject message" value={subject} />
              </div>
              <div>
                <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                <textarea cols={50} rows={15} id="contactMessage" name="contactMessage"
                  onChange={e => setMessage(e.target.value)} defaultValue={""} required
                  placeholder="Please write your message here" value={message} />
              </div>
              <div>
                <button type="submit" className="submit">{buttonText}</button>
                <span id="image-loader">
                  <img alt="" src="images/loader.gif" />
                </span>
              </div>
            </fieldset>
          </form>
          {/* form end */}
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
