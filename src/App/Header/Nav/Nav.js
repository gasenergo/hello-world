import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './Nav.css';



class Nav extends Component {
  render() {
    return (
      <div className="col-lg-8 col-lg-pull-2 hidden-xs">
        <nav>

        	{this.props.items.map((item, index) =>
            <div className="link" key={index}>
              <NavLink exact activeClassName="active" to={item.link}><i className="fa fa-chevron-circle-right" aria-hidden="true"></i> {item.label}</NavLink>

            </div>
        	)}
        </nav>
      </div>
    );
  }
}

export default Nav;
