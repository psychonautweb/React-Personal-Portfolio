import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h2 className="">Contact Form</h2>
      <form>
        <div className="">
          <label className="" htmlFor="name">
            Name
          </label>
          <input className="" type="text" id="name" required />
        </div>
        <div className="">
          <label className="" htmlFor="email">
            Email
          </label>
          <input className="" type="email" id="email" required />
        </div>
        <div className="">
          <label className="" htmlFor="message">
            Message
          </label>
          <textarea className="" id="message" required />
        </div>
        <button className="" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
