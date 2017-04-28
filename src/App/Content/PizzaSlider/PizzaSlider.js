import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import Slide from './Slide'
import './PizzaSlider.css';





class PizzaSlider extends Component {

  render() {
    var Decorators = [];
    return (
      <div className="container">
        <div className="row">
          <Carousel className="hidden-xs" decorators={Decorators} wrapAround={true} slidesToShow={3} cellSpacing={0} >
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
          <div className="col-sm-12 hidden-lg hidden-md hidden-sm">
            <div className="menu">
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
                  consist={item.consist}
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

export default PizzaSlider;
