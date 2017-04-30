import React, { Component } from 'react';
import './Phone.css';

class Phone extends Component {
  render() {
    return (
		<div className="col-lg-2 col-lg-push-8">
			<div className="phone hidden-xs">
				<p>Заказать по телефону:</p>
				<p className="num"><span><i className="fa fa-phone" aria-hidden="true"></i> +7 (495) </span> 923-35-74</p>
			</div>
		</div>
    );
  }
}

export default Phone;
