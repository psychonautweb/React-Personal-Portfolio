import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GithubIcon from '@material-ui/icons/GitHub';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, I'm Dubravko </h2>
        <div className="prompt">
          <p>A Web Developer with passion for learning and building</p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>FrontEnd</h2>
            <span>JavaScript, ReactJS, CSS, HTML Provident, error.</span>
          </li>
          <li className="item">
            <h2>BackEnd</h2>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Excepturi, molestiae.
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Provident, exercitationem.
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
