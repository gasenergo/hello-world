import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import Slide from './Slide'
import './PizzaSlider.css';





class PizzaSlider extends Component {

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
       padding: -5      }
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
       padding: -5
     }
   },
   ];
    return (
      <div className="container">
        <div className="row">
          <Carousel decorators={Decorators} wrapAround={true} slidesToShow={3} cellSpacing={0}>
    				{this.props.items.map((item) =>
    					<Slide
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                smallprice={item.smallprice}
                smallsize={item.smallsize}
                bigprice={item.bigprice}
                bigsize={item.bigsize}
                desc={item.desc}
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

export default PizzaSlider;
