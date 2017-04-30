import React, { Component } from 'react';
import './Order.css';



class Order extends Component {
  render() {
    return (
			<div className="container">
				<div className="row">
					<div className="col-md-7 col-sm-12">
						<form className="user" action="">
							<p className="form-description">Пожалуйста, введите ваш полный адрес и телефон, чтобы мы смогли убедиться в том. что ваш заказ нашел вас:</p>
							<label>Ваш телефон:<input type="text" /></label>
							<label>Адрес доставки:<input type="text" /></label>
							<label>Комментарий к заказу:<textarea name="text" /></label>
						</form>
					</div>
					<div className="col-md-5 col-sm-12">
						<div className="bill">
							<p>ваш <span>заказ</span></p>
							<div className="scroll">
                <table>
                  <tbody>
                    {this.props.order.map((item,index) =>
            					<tr className="bill-item" key={index}>
                        <td>
                          <button className="delete" onClick={()=>{this.props.onDelete(index)}}>X</button>
                        </td>
                        <td>
                          {item.id}
                        </td>
                        <td>
                          {item.price}
                        </td>

                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              <div className="price-sum">Итого: <span>{this.props.total.price} руб.</span></div>
              <button className="reset" onClick={()=>{this.props.onReset()}}><i className="fa fa-times" aria-hidden="true"></i> Сбросить</button>
              <button type="submit "><i className="fa fa-check" aria-hidden="true"></i> Оформить</button>
						</div>
					</div>
				</div>
			</div>
    );
  }
}

export default Order;
