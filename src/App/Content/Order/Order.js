import React, { Component } from 'react';
import './Order.css';



class Order extends Component {
  render() {
    // let d = new Date();
    // let hours = d.getHours();
    // let minutes = d.getMinutes();
    // let time = hours+":"+minutes
    return (
			<div className="container order">
				<div className="row">
					<div className="col-sm-8 col-sm-offset-2 top_title" id="top_title">
						<span>доставка и оплата</span>
						<p>Независимо от того, какой сейчас час, какая погода и как далеко вы живете - наша оперативная доставка с радостью привезет вам заказ в любое время и по любому адресу г.Москвы.</p>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-7">
						<form className="user" action="">
							<span>Адрес и время доставки</span>
							<p>Пожалуйста, выберите удобную дату и время доставки, введите ваш полный адрес и телефон, чтобы мы смогли убедиться в том. что ваш заказ нашел вас:</p>
							<div className="col-xs-6"><label>Дата доставки:<input type="date" min="2016-12-01" max="2017-12-31" /></label></div>
							<div className="col-xs-6"><label>Время доставки:<input type="time"  min="09:00" max="22:00" step="1800" /></label></div>
							<div className="col-xs-6"><label>Ваше имя:<input type="text" /></label></div>
							<div className="col-xs-6"><label>Ваш телефон:<input type="tel" /></label></div>
							<div className="col-xs-12"><label>Адрес доставки:<input type="text" /></label></div>
							<div className="col-xs-12"><label>Комментарий к заказу:<textarea name="text" /></label></div>
						</form>
					</div>
					<div className="col-sm-5">
						<div className="bill">
							<p>ваш <span>заказ</span></p>
							<div className="scroll">
                <table className="order">
                  <tbody>
                    {this.props.order.map((item,index) =>
            					<tr className="item" key={index}>
                        <td>{item.id}</td>
                        <td>{item.price}</td>
                        <button onClick={()=>{this.props.onDelete(index)}}>Delete</button>
                      </tr>
                    )}
                </tbody>
                </table>
              </div>
							<div id="price-sum">Итого:</div>
							<button>Сбросить</button>
							<button>Оформить</button>
						</div>

					</div>
				</div>
			</div>
    );
  }
}

export default Order;
