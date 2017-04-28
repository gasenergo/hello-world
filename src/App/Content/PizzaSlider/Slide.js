import React, { Component } from 'react';

class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSmall: true
    }
  }
  render() {
    return (
      <div className="card" key={this.props.id}>
        <div className="picture">
          <img src={this.props.image} alt={this.props.name} />
        </div>
        <button className="small" disabled={this.state.isSmall} onClick={()=>{this.setState({isSmall:true})}}>24</button>
        <button className="big" disabled={!this.state.isSmall} onClick={()=>{this.setState({isSmall:false})}}>36</button>
        <div className="price">{this.state.isSmall? this.props.smallprice : this.props.bigprice} руб.</div>
        <div className="name">{this.props.name} {this.state.isSmall? this.props.smallsize : this.props.bigsize}</div>
        <div className="description">{this.props.desc}</div>
        <div className="consist"><span>Состав:</span> {this.props.consist}.</div>
        <button className="choose" onClick={()=>{this.props.addOrder(this.props.name, this.state.isSmall? "small" : "big")}}>выбрать</button>
      </div>
    );
  }
}
export default Slide;
