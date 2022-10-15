import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GithubIcon from '@material-ui/icons/GitHub';
import '../styles/Home.css';
import Link from '@material-ui/core/Link';

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, I'm Dubravko </h2>
        <div className="prompt">
          <p>A Web Developer with passion for learning and building</p>
          <Link href="https://github.com/psychonautweb" target="_blank">
            <GithubIcon />
          </Link>
          <Link
            href="https://www.linkedin.com/in/dubravko-%C4%8Daji%C4%87"
            target="_blank"
          >
            <LinkedInIcon />
          </Link>
          <Link href="mailto:contact@dubravko.xyz">
            <EmailIcon />
          </Link>
        </div>
      </div>
      <div className="skills">
        <h1>What I do?</h1>
        <ol className="list">
          <li className="item">
            <h2>FrontEnd</h2>
            <span>HTML, CSS, JavaScript, ReactJS, NextJS</span>
            <p>
              My goal is to build blazingly fast websites and apps that
              communicate with your customers in a clear and professional way
              and help your business grow. Improving myself over and over and
              learning new technologies is part of my philosophy. Check out my
              latest projects on GitHub or follow me on social networks
            </p>
          </li>
          <li className="item">
            <h2>BackEnd</h2>
            <span>I've experimented a bit with NodeJS.</span>
          </li>
          {/* <li className="item">
            <h2>Languages</h2>
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Provident, exercitationem.
            </span>
          </li> */}
        </ol>
      </div>
    </div>
  );
};

export default Home;
