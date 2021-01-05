import React, { Component } from 'react';
import Niagra from '../../images/niagra.jpg';
import Paris from '../../images/paris.jpg';
import Kerala from '../../images/kerala.jpg';
import { HashLink as Link } from 'react-router-hash-link';

class Popular extends Component {
  render() {
    return (
      <section id="destinations" className="section section-popular scrollspy">
        <div className="container">
          <div className="row">
            <h4 className="center">
              <span className="blue-text darken-1">MyTrip</span> Destinations</h4>
            <div className="col s12 m4">
              <div className="card">
                <div className="card-image">
                  <img src={Niagra} alt="Niagra" />
                  <span className="card-title">Niagra</span>
                  <Link class="btn-floating activator halfway-fab waves-effect waves-light blue" href="#"><i class="material-icons">add</i></Link>
                </div>
                <div className="card-content">
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas aliquid fugiat corporis laudantium, architecto
                  delectus?
                  </p>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">Niagra<i class="material-icons right">close</i></span>
                  <p>Here is some more information about this trip</p>
                </div>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="card">
                <div className="card-image">
                  <img src={Paris} alt="Paris" />
                  <span className="card-title">Paris</span>
                  <Link class="btn-floating activator halfway-fab waves-effect waves-light blue"><i class="material-icons">add</i></Link>
                </div>
                <div className="card-content">
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas aliquid fugiat corporis laudantium, architecto
                  delectus?
                  </p>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">Paris<i class="material-icons right">close</i></span>
                  <p>Here is some more information about this trip</p>
                </div>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="card">
                <div className="card-image">
                  <img src={Kerala} alt="Kerala" />
                  <span className="card-title">Kerala</span>
                  <Link class="btn-floating activator halfway-fab waves-effect waves-light blue"><i class="material-icons">add</i></Link>
                </div>
                <div className="card-content">
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas aliquid fugiat corporis laudantium, architecto
                  delectus?
                  </p>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">Kerala<i class="material-icons right">close</i></span>
                  <p>Here is some more information about this trip</p>
                </div>
              </div>
            </div>
          </div>

          {/*<div className="row">
            <div className="col s12 center">
              <a href="#contact" className="btn btn-large grey darken-3">
                <i className="material-icons left">send</i> Contact For Booking
              </a>
            </div>
            </div> */}
        </div>
      </section>
    );
  }
}

export default Popular;