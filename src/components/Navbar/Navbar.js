import React, { Component } from 'react';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import Imgbackground from '../../images/paris.jpg';
import Imgperson from '../../images/person1.jpg';

const MenuBar = () => {
  return (
    <section>
      <div className="navbar-fixed">
        <nav className="blue darken-1">
          <div className="container">
            <div class="nav-wrapper">
              <AnchorLink href="!#" class="brand-logo"> MyTrip </AnchorLink>
              <AnchorLink href="!#" data-target="mobile-demo" className="sidenav-trigger" >
                <i class="material-icons">menu</i>
              </AnchorLink>
              <ul class="right hide-on-med-and-down">
                <li>
                  <AnchorLink href="#home">Home</AnchorLink>
                </li>
                <li>
                  <AnchorLink href="#search">Search</AnchorLink>
                </li>
                <li>
                  <AnchorLink href="#destinations">Destinations</AnchorLink>
                </li>
                <li>
                  <AnchorLink href="#explore">Explore</AnchorLink>
                </li>
                <li>
                  <AnchorLink href="#gallery">Gallery</AnchorLink>
                </li>
                <li>
                  <AnchorLink href="#contact">Contact</AnchorLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <ul class="sidenav" id="mobile-demo">
        <li>
          <div className="user-view">
            <div className="background">
              <img src={Imgbackground} alt="ocean" />
            </div>
            <AnchorLink href="#user"><img className="circle" src={Imgperson} alt="person" /></AnchorLink>
            <AnchorLink href="#name"><span className="white-text name">Sam John </span></AnchorLink>
            <AnchorLink href="#email"><span className="white-text email">sample@gmail.com</span></AnchorLink>
          </div>
        </li>
        <li>
          <AnchorLink href="#home">Home</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#search">Search</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#destinations">Destinations</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#explore">Explore</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#gallery">Gallery</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#contact">Contact</AnchorLink>
        </li>
      </ul>
    </section>
  );
};

class Navbar extends Component {
  render() {
    return (
      <section>
        <MenuBar />
      </section>
    );
  }
}

export default Navbar;
