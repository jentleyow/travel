import React from 'react';
import logo from '../../img/logo.png';
const Navbar = () => {
  return (
    <header>
      <div className="container">
        <a href="#" className="logo">
          <img src={logo} />
        </a>
        <div className="menu-toggle menu-bar" />
        <nav>
          <ul>
            <li>
              <a id="link1" href="#">
                Home
              </a>
            </li>
            <li>
              <a id="link2" href="#country1">
                Malaysia
              </a>
            </li>
            <li>
              <a id="link3" href="#country2">
                Indonesia
              </a>
            </li>
            <li>
              <a id="link4" href="#contact">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
        <div className="clearfix" />
      </div>
    </header>
  );
};
export default Navbar;
