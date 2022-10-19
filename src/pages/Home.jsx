import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GithubIcon from '@material-ui/icons/GitHub';
import '../styles/Home.css';
import Link from '@material-ui/core/Link';

import Typewriter from '../components/Typewriter';
import Img1 from '../assets/profilePic1.webp';

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2>
          <Typewriter />
        </h2>
        {/* <h2> Hi, I'm Dubravko </h2> */}
        <div className="prompt">
          <p>Web Developer with passion for learning and building</p>
          <p className="intro">
            <i>
              My goal is to build blazingly fast websites and apps that
              communicate with your customers in a clear and professional way
              and help your business grow. Improving myself over and over and
              learning new technologies is part of my philosophy. Check out my
              latest projects on GitHub or follow me on social networks
            </i>
          </p>
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
        <h2>You scrolled to see picture of my face? Here it is.</h2>

        <img width="350px" src={Img1} alt="/" />
        <h3>Tech stacks that I work with</h3>

        <ol className="list">
          <li className="item">
            <h3>FrontEnd</h3>
            <span>HTML, CSS / SCSS, JavaScript, ReactJS, NextJS</span>
          </li>

          <li className="item">
            <h3>BackEnd</h3>
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
