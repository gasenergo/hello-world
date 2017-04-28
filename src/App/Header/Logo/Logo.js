import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './Logo.css';

class Logo extends Component {
  render() {
    return (


      <div className="col-lg-2 col-xs-5">
        <Link to="/hello-world">
  				<div className="logo">
    				<img src={logo} alt="logo" />
    				<p>Пицца <span>на дом</span></p>
  			  </div>
        </Link>
		  </div>

    );
  }
}

export default Logo;
