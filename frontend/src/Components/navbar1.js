import React from "react";
import "../Style/navbar1.css";

const NavBar1 = () => {
  return (
    <>
      <nav className='main-nav flex'>
        {/* <a href='#' className='company-logo'>
            Company
          </a> */}

        <ul className='nav-links flex'>
          <li>
            <a href='#' className='nav-title'>
              Mental Health A-Z
              <ul className='nav-sub'>
                <li>
                  <a href='#'>Mental</a>
                </li>
                <li>
                  <a href='#'>happiness</a>
                </li>
                <li>
                  <a href='#'>depression</a>
                </li>
                <li>
                  <a href='#'>anxiety</a>
                </li>
              </ul>
            </a>
          </li>
          <li>
            <a href='#' className='nav-title'>
              Self-Improvement
              <ul className='nav-sub'>
                <li>
                  <a href='#'>Mental</a>
                </li>
                <li>
                  <a href='#'>happiness</a>
                </li>
                <li>
                  <a href='#'>depression</a>
                </li>
                <li>
                  <a href='#'>anxiety</a>
                </li>
              </ul>
            </a>
          </li>
          <li>
            <a href='#' className='nav-title'>
              Pyscology
              <ul className='nav-sub'>
                <li>
                  <a href='#'>Mental</a>
                </li>
                <li>
                  <a href='#'>happiness</a>
                </li>
                <li>
                  <a href='#'>depression</a>
                </li>
                <li>
                  <a href='#'>anxiety</a>
                </li>
              </ul>
            </a>
          </li>
          <li>
            <a href='#' className='nav-title'>
              Podcast
              <ul className='nav-sub'>
                <li>
                  <a href='#'>Mental</a>
                </li>
                <li>
                  <a href='#'>happiness</a>
                </li>
                <li>
                  <a href='#'>depression</a>
                </li>
                <li>
                  <a href='#'>anxiety</a>
                </li>
              </ul>
            </a>
          </li>
          <li>
            <a href='#' className='nav-title'>
              About us
              <ul className='nav-sub'>
                <li>
                  <a href='#'>Mental</a>
                </li>
                <li>
                  <a href='#'>happiness</a>
                </li>
                <li>
                  <a href='#'>depression</a>
                </li>
                <li>
                  <a href='#'>anxiety</a>
                </li>
              </ul>
            </a>    
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar1;
