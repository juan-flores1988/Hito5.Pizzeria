import { useState, useEffect } from "react";
import "./pizza.css";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    consultarPizza();
  }, []);

  const consultarPizza = async () => {
    const url = "http://localhost:5000/api/pizzas/p001";
    const response = await fetch(url);
    const data = await response.json();

    setPizza(data);
  };

  if (!pizza) {
    return <p>Cargando pizza...</p>;
  }

  return (
    <main>
      <img src={pizza.img} alt={pizza.name} width="400" />

      <h2>{pizza.name}</h2>
      <p>${pizza.price}</p>

      <h4>Ingredientes:</h4>
      <ul>
        {pizza.ingredients.map((ingrediente) => (
          <li key={ingrediente}>🍕 {ingrediente}</li>
        ))}
      </ul>

      <p>{pizza.desc}</p>

      <button>Añadir al carrito</button>
    </main>
  );
};

export default Pizza;
