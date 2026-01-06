import { useState } from "react";
import { pizzaCart } from "../pizzas.js";
import "./cart.css"


const Cart = () => {
  const [cart, setCart] = useState(
    pizzaCart.map((item) => ({ ...item, quantity: 0 }))
  );

  const aumentarCantidad = (id) => {
    const nuevoCarrito = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(nuevoCarrito);
  };

  const disminuirCantidad = (id) => {
    const nuevoCarrito = cart.map((item) => {
      if (item.id === id) {
        const nuevaCantidad = item.quantity - 1;
        return { ...item, quantity: nuevaCantidad >= 0 ? nuevaCantidad : 0 };
      }
      return item;
    });
    setCart(nuevoCarrito);
  };

  const total = cart.reduce(
    (acumulado, item) => acumulado + item.price * item.quantity,
    0
  );

  return (
    <div className="carCompass">
      <h2>🛒 Detalles del pedido:</h2>

      {cart.map((carro) => (
        <div className="carrito-item" key={carro.id}>
          <img src={carro.img} alt={carro.name} width={50} />

          <div className="info">
            <div className="nameBtn">
              <h3>{carro.name}</h3>
            </div>

            <div className="botones">
              <p>${carro.price}</p>
              <button onClick={() => disminuirCantidad(carro.id)}>➖</button>
              <span className="cantidad">{carro.quantity}</span>
              <button className="sumaBlue" onClick={() => aumentarCantidad(carro.id)}>➕</button>
            </div>
          </div>
        </div>
      ))}

      <hr />

      <div className="total">
        <h3>Total a pagar: 💰 ${total}</h3>
        <button className="btn-pagar">Pagar</button>
      </div>
    </div>
  );
};

export default Cart;
