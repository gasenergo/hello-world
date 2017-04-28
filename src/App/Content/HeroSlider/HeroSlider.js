import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import {Link} from 'react-router-dom';
import './HeroSlider.css';





class HeroSlider extends Component {
  render() {
    var Decorators = [{
     component: React.createClass({
       render() {
         return (
            <div onClick={this.props.nextSlide}><i className="fa fa-angle-left fa-3x"></i></div>
         )
       }
     }),
     position: 'CenterLeft',
     style: {
       padding: 5      }
    },{
     component: React.createClass({
       render() {
         return (
            <div onClick={this.props.previousSlide}><i className="fa fa-angle-right fa-3x"></i></div>
         )
       }
     }),
     position: 'CenterRight',
     style: {
       padding: 5
     }
    },
    ];
    return (
      <div className="container">
        <div className="row">
          <Carousel className="hidden-xs" decorators={Decorators} wrapAround={true}>
    				{this.props.items.map((item) =>
    					<div className="item" key={item.id}>
    						<div className="col-xs-6">
    							<div className="text">
    								<p className="name">Пицца {item.name}</p>
    								<p className="desc">{item.desc}</p>
    							</div>
    						</div>
    						<div className="col-xs-6 hero">
                  <div className="pict">
                    <img  src={item.image} alt={item.name} />
                  </div>
    						</div>
    					</div>
    				)}
    			</Carousel>
          <div className="mobile-menu hidden-sm hidden-md hidden-lg">
            <nav>
            	{this.props.links.map((item, index) =>
                <div className="mobile-link" key={index} style={item.img}>
                  <Link to={item.link}>{item.label}</Link>
                </div>
            	)}
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroSlider;
