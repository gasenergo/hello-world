import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import SaladSlide from './SaladSlide/SaladSlide';
import './SaladSlider.css';




class SaladSlider extends Component {

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
     style: {padding: 0}
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
     style: {padding: 0}
   }];
    return (
      <div className="container">
        <div className="row">
          <Carousel decorators={Decorators} wrapAround={true} slidesToShow={4} cellSpacing={0}>
    				{this.props.items.map((item) =>
    					<SaladSlide
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
                size={item.size}
                consist={item.consist}
                addOrder={this.props.onAdd}
              />
    				)}
    			</Carousel>
        </div>
      </div>
    );
  }
}

export default SaladSlider;
