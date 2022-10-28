import React from 'react';
import Button from '@mui/material/Button';
import '../styles/Contact.css';
import Card from '../components/Card';

const Contact = () => {
  return (
    <div className="contact">
      <h2 className="">Contact Me</h2>
      <Card>
        <form
          action="https://formsubmit.co/385950177b58dbc0d4517333e2c4d2fd"
          method="POST"
        >
          <div className="formElement">
            <label className="" htmlFor="name">
              Name
            </label>
            <input className="" type="text" id="name" name="name" required />
          </div>
          <div className="formElement">
            <label className="" htmlFor="email">
              Email
            </label>
            <input className="" type="email" id="email" name="email" required />
          </div>
          <div className="formElement">
            <label className="" htmlFor="message">
              Message
            </label>
            <textarea className="" id="message" name="message" required />
          </div>
          <input type="text" name="_honey" style={{ display: 'none' }} />
          <Button
            variant="contained"
            size="medium"
            className=""
            type="submit"
            color="primary"
            style={{ width: '80px', margin: 'auto' }}
          >
            Send
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Contact;
