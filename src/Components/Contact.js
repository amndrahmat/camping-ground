import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Any Question?</h1>
      <h1 className="primary-heading">Send Us Your Message</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="yourmail@email.com" />
        <button className="secondary-button">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
