import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';

import '../styles/Footer.css';
import Link from '@material-ui/core/Link';

export default function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Link href="https://github.com/psychonautweb" target="_blank">
          <GithubIcon />
        </Link>
        <Link href="https://www.instagram.com/dubravko.cajic/" target="_blank">
          <InstagramIcon />
        </Link>
        <Link href="https://twitter.com/dubravkocajic" target="_blank">
          <TwitterIcon />
        </Link>
        <Link
          href="https://www.linkedin.com/in/dubravko-%C4%8Daji%C4%87/"
          target="_blank"
        >
          <LinkedInIcon />
        </Link>
      </div>
      <p> &copy; 2022 dubravko.xyz </p>
    </div>
  );
}
