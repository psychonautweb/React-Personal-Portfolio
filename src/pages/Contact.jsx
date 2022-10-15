import React from 'react';
import Button from '@mui/material/Button';
import '../styles/Contact.css';
import Card from '../components/Card';

const Contact = () => {
  return (
    <div className="contact">
      <h2 className="">Contact Me</h2>
      <Card>
        <form>
          <div className="formElement">
            <label className="" htmlFor="name">
              Name
            </label>
            <input className="" type="text" id="name" required />
          </div>
          <div className="formElement">
            <label className="" htmlFor="email">
              Email
            </label>
            <input className="" type="email" id="email" required />
          </div>
          <div className="formElement">
            <label className="" htmlFor="message">
              Message
            </label>
            <textarea className="" id="message" required />
          </div>
          <Button className="" type="submit">
            Send
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Contact;
