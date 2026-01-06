import "./CardPizza.css"



const CardPizza = ({ name, price, img, ingredients }) => {
  return (
    <div className="productos">
          <h4>{name}</h4>
      <img src={img} alt={name}  />

      <div className="ingredientes">
        <h5>Ingredientes:</h5>
        <ul>
          {ingredients.map((ing) => (
            <li key={ing}>🍕 {ing}</li>
          ))}
        </ul>
      </div>

      <div className="precio">
        <h2>${price.toLocaleString("es-CL")}</h2>
        <button>Ver más 👀</button>
        <button className="button-background">Añadir 🛒</button>
        
      </div>
    </div>
  );
};

export default CardPizza;
