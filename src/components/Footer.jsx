import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';

import '../styles/Footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <GithubIcon />
        <InstagramIcon />
        <TwitterIcon />
        <FacebookIcon />
        <LinkedInIcon />
      </div>
      <p> &copy; 2022 dubravko.xyz </p>
    </div>
  );
}
