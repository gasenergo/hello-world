
import React, { Component } from 'react';
import './SaladSlide.css';


class SaladSlide extends Component {
	render() {
		return (
	    <div className="salad-card" key={this.props.id}>
	      <img src={this.props.image} alt="salad" />
	      <div className="price">
	        {this.props.price} р.<br/>{this.props.size} гр.
	      </div>
	      <div className="name">{this.props.name}</div>
	      <div className="consist">Состав: {this.props.consist}</div>
	      <button className="choose" onClick={()=>{this.props.addOrder(this.props.name, this.props.price)}}>выбрать</button>
	    </div>
		);
	}
}


export default SaladSlide;
