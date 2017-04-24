import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import './HeroSlider.css';





class HeroSlider extends Component {
  mixins: [Carousel.ControllerMixin]
  render() {
    var Decorators = [{
     component: React.createClass({
       render() {
         return (
            <div>
               <i className="fa fa-chevron-circle-left fa-3x"
                   onClick={this.props.nextSlide} aria-hidden="true"></i>
             </div>
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
            <div>
               <i className="fa fa-chevron-circle-right fa-3x"
                   onClick={this.props.previousSlide} aria-hidden="true"></i>
             </div>
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
      <div className="container hidden-xs">
        <div className="row">
          <Carousel  decorators={Decorators} wrapAround={true}>
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
        </div>
      </div>
    );
  }
}

export default HeroSlider;
