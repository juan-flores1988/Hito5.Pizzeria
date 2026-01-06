import { Link } from "react-router-dom";
import "./notFound.css";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <Link to="/">
        <img
          src="/img-react.png"
          alt="Ruta no disponible"
          className="notfound-img"
        />
      </Link>
      <p>Haz click en la imagen para volver al inicio</p>
    </div>
  );
};

export default NotFound;
