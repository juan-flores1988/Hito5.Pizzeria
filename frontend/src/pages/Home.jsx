import CardPizza from "../components/CardPizza"
import "./home.css"
import { pizzas } from "../pizzas"




const Home = () => {
  return (
    
    <div className="home-cards">

{pizzas.map((pizza) => (
  <CardPizza 
  img={pizza.img}
  key={pizza.id}
  name={pizza.name}
  desc={pizza.desc}
  ingredients={pizza.ingredients}
  price={pizza.price}
  />
))}



    </div>
  )
}

export default Home