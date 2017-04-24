
import React , { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './Header/Header';
import HeroSlider from './Content/HeroSlider/HeroSlider';
import PizzaSlider from './Content/PizzaSlider/PizzaSlider';
import SaladSlider from './Content/SaladSlider/SaladSlider';
import DrinkSlider from './Content/DrinkSlider/DrinkSlider';
import Order from './Content/Order/Order';
import Footer from './Footer/Footer';
import './App.css';


const pizzas = [
  {id:1,
    name: "Маргарита",
    image:require('./img/margarita.png'),
    smallprice:285,
    smallsize:"24см",
    bigprice:495,
    bigsize:"36см",
    desc:"Больше вкуса и еще больше свежести в классический рецепт — это маргарита! Попробуй спелый томат и двойной слой моцареллы на нашем фирменном тесте!",
    consist:"Томатный соус, томаты, увеличенная порция моцареллы, орегано"},
  {id:2,
    name: "Пепперони",
    image:require('./img/pepperoni.png'),
    smallprice:345,
    smallsize:"24см",
    bigprice:595,
    bigsize:"36см",
    desc:"В этой пицце в два раза больше итальянских колбасок, чем в любой другой. Вкус этой в меру острой и суперсытной пиццы удовлетворит любого, даже самого придирчивого гурмана. Знатоки пиццы рекомендуют добавить к пицце микс из овощей.",
    consist:"Томатный соус, пепперони, увеличенная порция моцареллы"},
  {id:3,
    name: "Гавайская",
    image:require('./img/hawaii.png'),
    smallprice:285,
    smallsize:"24см",
    bigprice:495,
    bigsize:"36см",
    desc:"Скажи «алоха!» одной из популярных американских пицц. Пикантность этой пицце придает сочетание сочной куриной грудки и солнечных кусочков ананасов. Рекомендуем также добавить в пиццу интересную вкусовую ноту — оливки.",
    consist:"Томатный соус, ананасы, ветчина, моцарелла"},
  {id:4,
    name: "Фирменная",
    image:require('./img/special.png'),
    smallprice:365,
    smallsize:"24см",
    bigprice:625,
    bigsize:"36см",
    desc:"Мы добавили все самые вкусные ингредиенты — идеальные кружочки пепперони украшают микс из нескольких видов мяса и сытных грибов.",
    consist:"Томатный соус, пепперони, ветчина, сладкий перец, томаты, шампиньоны, моцарелла"},
  {id:5,
    name: "Овощная",
    image:require('./img/vegetarian.png'),
    smallprice:345,
    smallsize:"24см",
    bigprice:595,
    bigsize:"36см",
    desc:"Любители овощей не останутся голодными, заказав эту пиццу. Обилие свежих овощей — вот секрет этой пиццы. Наш шеф-повар советует тем, кто любит «погорячее», добавить мексиканский перчик халапеньо.",
    consist:"Томатный соус, брынза, маслины, сладкий перец, томаты, шампиньоны, красный лук, моцарелла, базилик"}
];

const salads = [
  {id:1,
    name: "Салат яркий",
    image:require('./img/bright.jpg'),
    price:65,
    size:100,
    consist:"говядина односортная, помидоры, перец болгарский, опята маринованные, капуста белокочаная, лук репчатый жаренный, перец черный молотый, соль, масло растительное "},
  {id:2,
    name: "Салат немецкий",
    image:require('./img/german.jpg'),
    price:45,
    size:100,
    consist:"огурцы маринованные, картофель, сельдь м/с филе, яблоко, лук красный, горчица, укроп свежий, соль, сахар, масло растительное "},
  {id:3,
    name: "Салат богатырь",
    image:require('./img/godpower.jpg'),
    price:70,
    size:100,
    consist:"Филе куриное запечённое, морковь отварная, перец болгарский, опята маринованные, огурцы квашенные, лук салатный красный, майонез"},
  {id:4,
    name: "Салат восторг",
    image:require('./img/delight.jpg'),
    price:50,
    size:100,
    consist:"куриная грудка, огурцы, капуста китайская, перец болгарский, маслины, горчица, масло растительное, соль, перец черный молотый"},
    {id:5,
      name: "Салат греческий",
      image:require('./img/greek.jpg'),
      price:75,
      size:100,
      consist:"Состав: сыр, грибы, чеснок, острый перец, еще длинное наименование"}
];

const drinks = [
  {id:1,
    name: "Кока-кола",
    image:require('./img/cola.png'),
    price:86,
    size:1.5},
  {id:2,
    name: "Спрайт",
    image:require('./img/sprite.png'),
    price:86,
    size:1.5},
  {id:3,
    name: "Швеппс",
    image:require('./img/schweppes.png'),
    price:86,
    size:1.5},
    {id:4,
      name: "Квас",
      image:require('./img/kvas.png'),
      price:96,
      size:2}
];


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: [{'id':12, 'price':200}]
    }
    this.onAdd = this.onAdd.bind(this)
    this.onDelete = this.onDelete.bind(this)
  };
  onAdd(id,price){
    this.setState({
      order: this.state.order.concat({'id':id,'price':price})
    })
  };
  onDelete(index){
    this.setState({
      order: this.state.order.filter((_, i) => i !== index)
    })
  };

  render() {
    return (
		<Router>
			<div className="App">
				<Header />
				<Route exact path="/" component={() => (<HeroSlider items={pizzas} onAdd={this.onAdd} />)} />
				<Route exact path="/pizza" component={() => (<PizzaSlider items={pizzas} onAdd={this.onAdd} />)} />
        <Route exact path="/salad" component={() => (<SaladSlider items={salads} onAdd={this.onAdd} />)} />
        <Route exact path="/drink" component={() => (<DrinkSlider items={drinks} onAdd={this.onAdd} />)} />
				<Route exact path="/order" component={() => (<Order order={this.state.order} onDelete={this.onDelete} />)} />
				<Footer />
			</div>
		</Router>
    );
  }
}

export default App;
