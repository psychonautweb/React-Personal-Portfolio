import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from '@material-ui/icons/Reorder';

const Navbar = () => {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation(); // get information on which route I'm in
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    console.log('scroll');

    if (expandNavbar) {
      setExpandNavbar(false);
      console.log('expandNavBar');
    }
  }, [location]);

  // useEffect(() => {
  //   setExpandNavbar(false);
  //   console.log('expandNavBar');
  // }, [location]); // run useEffect hook whenever the location changes - when you click hamburger menu link close it

  return (
    <div className="navbar" id={expandNavbar ? 'open' : 'close'}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev); //set it to OPPOSITE of whatever the previous was
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        {location.pathname !== '/' ? (
          <Link to="/">Home</Link>
        ) : (
          <NavLink to="/">Home</NavLink>
        )}
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/experience">Experience</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
