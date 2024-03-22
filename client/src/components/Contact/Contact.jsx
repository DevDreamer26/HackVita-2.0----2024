import React from 'react';
import './Contact.scss';

const Contact = () => {
  const handleSubmit = () => {
    alert("Submitted successfuly !")
  }
  return (
    <>
      <div className="contact-main">
        
        <div className="contact-container">
          <h1>Contact Us</h1>
          <p>Have questions or need assistance? Feel free to reach out to us.</p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required/>

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required/>

            <label htmlFor="phone">Mobile no:</label>
            <input type="number" id="phone" name="phone" placeholder="Your Mobile number" required/>

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" placeholder="Your Message" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

    </>
  );
};

export default Contact;
