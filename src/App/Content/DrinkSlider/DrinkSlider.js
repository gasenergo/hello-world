import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import DrinkSlide from './DrinkSlide/DrinkSlide';
import './DrinkSlider.css';




class DrinkSlider extends Component {

  render() {
    var Decorators = [];
    return (
      <div className="container">
        <div className="row">
          <Carousel className="hidden-xs" decorators={Decorators} wrapAround={true} slidesToShow={3} cellSpacing={0}>
    				{this.props.items.map((item) =>
    					<DrinkSlide
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
                size={item.size}
                addOrder={this.props.onAdd}
              />
    				)}
    			</Carousel>
          <div className="col-sm-12 hidden-lg hidden-md hidden-sm">
            <div className="menu">
              {this.props.items.map((item) =>
      					<DrinkSlide
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  size={item.size}
                  addOrder={this.props.onAdd}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DrinkSlider;
