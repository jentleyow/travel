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
              <a id="link1" class="links" href="#">
                Home
              </a>
            </li>
            <li>
              <a id="link2" class="links" href="#country1">
                Malaysia
              </a>
            </li>
            <li>
              <a id="link3" class="links" href="#country2">
                Indonesia
              </a>
            </li>
            <li>
              <a id="link4" class="links" href="#contact">
                Contact Us
              </a>
            </li>
            <li>
              <a class="sociallinks facebook" />
            </li>
            <li>
              <a class="sociallinks instagram" />
            </li>
          </ul>
        </nav>
        <div className="clearfix" />
      </div>
    </header>
  );
};
export default Navbar;
