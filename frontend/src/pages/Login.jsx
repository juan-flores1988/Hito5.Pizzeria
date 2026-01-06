import { useState } from "react";
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Validación 1: Campos obligatorios
    if (!email || !contraseña) {
      alert("❌ Todos los campos son obligatorios.");
      return;
    }

    // ✅ Validación 2: Contraseña mínimo 6 caracteres
    if (contraseña.length < 6) {
      alert("⚠️ La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    // ✅ Si todo está correcto
    alert("✅ ¡Inicio de sesión exitoso!");
    
    // Limpiar formulario
    setEmail('');
    setContraseña('');
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Email</label>
        <input
          type="text"
          name="email"
          placeholder="Escribe tu Email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Contraseña</label>
        <input
          type="password"
          name="contraseña"
          placeholder="Escribe tu Contraseña"
          className="form-control"
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
        />
      </div>

      <button type="submit" className="btn-primary">Ingresar</button>
    </form>
  );
};

export default Login;
