import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
          	<div className="col-sm-4 hidden-xs">
              <div className="delivery">
                <h2>Пицца на дом</h2>
                <p>Моментальная доставка свежей, горячей пиццы прямо к вам домой или в офис</p>
              </div>
            </div>
            <div className="col-sm-4 hidden-xs">
              <div className="address">
                <p><i className="fa fa-envelope-o" aria-hidden="true"></i> pizzanadom@yandex.ru</p>
                <p><i className="fa fa-phone" aria-hidden="true"></i> +7(999)999-99-99</p>
                <p><i className="fa fa-map-marker" aria-hidden="true"></i> Москва, Коломенское ш., дом 46а, оф. 345</p>
              </div>
            </div>
            <div className="col-sm-4 col-xs-12">
              <div className="socialbtn">
                <h2> Мы в соц.сетях</h2>
                <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i> <span>Facebook</span></a>
                <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i><span>Twitter</span></a>
                <a href="#"><i className="fa fa-vk" aria-hidden="true"></i><span>Вконтакте</span></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
