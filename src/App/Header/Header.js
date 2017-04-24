import React, { Component } from 'react';
import Logo from './Logo/Logo';
import Phone from './Phone/Phone';
import Nav from './Nav/Nav';
import header from './header.png';
import './Header.css'

const menu = [
  {
    link: '/pizza',
    label: 'Выбрать пиццу',
    className: 'pizza'
  },
  {
    link: '/salad',
    label: 'Выбрать закуски',
    className: 'salad'
  },
  {
    link: '/drink',
    label: 'Выбрать напитки',
    className: 'drink'
  },
  {
    link: '/order',
    label: 'Оформить заказ',
    className: 'order'
  }
];

class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <div className="row">
            <Logo />
            <Phone />
            <Nav items={menu}/>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
