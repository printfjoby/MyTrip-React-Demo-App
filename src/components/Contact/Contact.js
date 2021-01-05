import React, { Component } from 'react';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';

class Contact extends Component {
  render() {
    return (
      <section id="contact" className="section section-contact scrollspy">
        <div className="container">
          <div className="row">
            <h4 className="center">
              <span className="blue-text darken-1">Contact</span></h4>
            <div className="col s12 m6">
              <div className="card-panel blue white-text center">
                <i className="material-icons medium">email</i>
                <h5>MyTrip Address</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus sed praesentium delectus. Sit, mollitia
                  quo. Veniam repellat voluptas ipsum doloremque?</p>
              </div>
              <ul className="collection with-header">
                <li className="collection-header">
                  <h4>Main Office</h4>
                </li>
                <li className="collection-item">MyTrip Booking</li>
                <li className="collection-item"><i class="fas fa-map-marker-alt"></i> ABC Road, New York, US</li>
                <li className="collection-item"><i class="fas fa-phone"></i> (001) 123-4567</li>
                <li className="collection-item"><i class="fas fa-envelope-square"></i> book@mytrip.com</li>
              </ul>
            </div>
            <div className="col s12 m6">
              <div className="card-panel grey lighten-3">
                <h5>Please fill out this form</h5>
                <form>
                  <div className="input-field">
                    <input type="text" id="name" className="validate" />
                    <label for="name" className="blue-text">Name</label>
                  </div>
                  <div className="input-field">
                    <input type="email" id="email" />
                    <label for="email" className="blue-text">Email</label>
                  </div>
                  <div className="input-field">
                    <input type="text" id="phone" />
                    <label for="phone" className="blue-text">Phone</label>
                  </div>
                  <div className="input-field">
                    <textarea className="materialize-textarea" id="message" data-length="120"></textarea>
                    <label for="message" className="blue-text">Message</label>
                  </div>
                  <input type="submit" value="Submit" className="btn blue" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;