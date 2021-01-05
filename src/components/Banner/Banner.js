import React, { Component } from 'react';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import Img1 from '../../images/1.jpg';
import Img2 from '../../images/2.jpg';
import Img3 from '../../images/3.jpg';
import './Banner.css';
import { Link } from 'react-router-dom';

class Banner extends Component {
  render() {
    return (
      <section className="slider" id="home">
        <ul className="slides">
          <li>
            <img src={Img1} alt="Trip" />
            <div className="caption center-align">
              <h2>Get Ready For The Trip</h2>
              <h5 className="light grey-text text-lighten-3 hide-on-small-only">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam non illo earum cumque id est!</h5>
              <Link to="#" className="btn btn-large blue">Learn More</Link>
            </div>
          </li>
          <li>
            <img src={Img2} alt="Relax" />
            <div className="caption left-align">
              <h2>Explore The World !</h2>
              <h5 className="light grey-text text-lighten-3 hide-on-small-only">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam non illo earum cumque id est!</h5>
              <Link to="#" className="btn btn-large blue">Learn More</Link>
            </div>
          </li>
          <li>
            <img src={Img3} alt="Tour" />
            <div className="caption right-align">
              <h2>Refresh Your Mind</h2>
              <h5 className="light grey-text text-lighten-3 hide-on-small-only">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam non illo earum cumque id est!</h5>
              <Link to="#" className="btn btn-large blue">Learn More</Link>
            </div>
          </li>
        </ul>
      </section>
    );
  }
}

export default Banner;