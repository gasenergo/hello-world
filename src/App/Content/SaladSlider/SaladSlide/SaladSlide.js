
import React, { Component } from 'react';
import './SaladSlide.css';


class SaladSlide extends Component {
	render() {
		return (
	    <div className="salad-card" key={this.props.id}>
				<div className="picture">
	      	<img src={this.props.image} alt="salad" />
				</div>
	      <div className="price">
	        {this.props.price} руб.<br/>
					<span>{this.props.size} гр.</span>
	      </div>
				<div className="text">
					<div className="name">{this.props.name}</div>
		      <div className="consist">Состав: {this.props.consist}</div>
		      <button className="choose" onClick={()=>{this.props.addOrder(this.props.name, this.props.price)}}>выбрать</button>
				</div>
	    </div>
		);
	}
}


export default SaladSlide;
