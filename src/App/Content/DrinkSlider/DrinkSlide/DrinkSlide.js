
import React, { Component } from 'react';
import './DrinkSlide.css';


class DrinkSlide extends Component {
	render() {
		return (
	    <div className="drink-card" key={this.props.id}>
	      <img src={this.props.image} alt="drink" />
	      <div className="name">{this.props.name} {this.props.size}л.</div>
				<div className="price">{this.props.price}р.</div>
	      <button className="choose" onClick={()=>{this.props.addOrder(this.props.name, this.props.price)}}>выбрать</button>
	    </div>
		);
	}
}


export default DrinkSlide;
