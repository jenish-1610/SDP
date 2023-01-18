import React, { useState } from "react";
import "../Style/navbar.css";

import { FaBars } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [hamburger, setHamburger] = React.useState(true);

  const hamburgerHandle = () => {
    setHamburger(!hamburger);
  };

  return (
    <div className='h-full'>
      <nav className='nav'>
        <p className='logo-nav'>Company</p>

        <p onClick={hamburgerHandle} className='hamburger'>
          {hamburger === true && <FaBars />}

          {hamburger === false && <FaTimesCircle />}
        </p>

        <ul className='nav-links'>
          <li>
            <a href='../Pages/Sign_up.js' target='_blank' rel='noreferrer'>
              Home
            </a>
          </li>
          <li>
            <a href='/' target='_blank' rel='noreferrer'>
              Articles
            </a>
          </li>
          <li>
            <a href='/' target='_blank' rel='noreferrer'>
              Podcasts
            </a>
          </li>
          <li>
            <a href='/' target='_blank' rel='noreferrer'>
              Consultancy
            </a>
          </li>
          <li>
            <a href='/' target='_blank' rel='noreferrer'>
              Journal Writing
            </a>
          </li>
        </ul>

        <div className='Button'>
          <button className='button'>Login</button>
          <button className='button'>Sign up</button>
        </div>
      </nav>

      {hamburger === false && (
        <div className='show-links'>
          <ul>
            <li>
              <a href='../' target='_blank' rel='noreferrer'>
                Home
              </a>
            </li>
            <li>
              <a href='/' target='_blank' rel='noreferrer'>
                Articles
              </a>
            </li>
            <li>
              <a href='/' target='_blank' rel='noreferrer'>
                Podcasts
              </a>
            </li>
            <li>
              <a href='/' target='_blank' rel='noreferrer'>
                Consultancy
              </a>
            </li>
            <li>
              <a href='/' target='_blank' rel='noreferrer'>
                Journal Writing
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
