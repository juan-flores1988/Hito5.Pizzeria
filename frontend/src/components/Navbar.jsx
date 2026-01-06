import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <p>¡Pizzeria Mamma Mia!</p>
        <div className="nav-button">
          <Link to="/">🍕Home</Link>
          <Link to="/register">🔐Register</Link>
          <Link to="/login">🔐Login</Link>
          <Link to="/profile">🔐Profile</Link>
        </div>
        <Link to="/cart" > 
         <button className="total-btn">🛒Total:$25.000</button>
          </Link>
      </div>
    </>
  );
};

export default Navbar;
