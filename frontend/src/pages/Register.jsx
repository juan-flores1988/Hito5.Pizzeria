import { useState } from "react";
import './register.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [confirmarContraseña, setConfirmarContraseña] = useState('');
  const [mensaje, setMensaje] = useState(''); // mensaje de éxito o error
  const [tipoMensaje, setTipoMensaje] = useState(''); // 'exito' o 'error'

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Validación 1: Todos los campos obligatorios
    if (!email || !contraseña || !confirmarContraseña) {
      setMensaje("❌ Todos los campos son obligatorios");
      setTipoMensaje("error");
      return;
    }

    // ✅ Validación 2: Contraseña mínimo 6 caracteres
    if (contraseña.length < 6) {
      setMensaje("⚠️ La contraseña debe tener al menos 6 caracteres");
      setTipoMensaje("error");
      return;
    }

    // ✅ Validación 3: Contraseña y confirmación deben coincidir
    if (contraseña !== confirmarContraseña) {
      setMensaje("🔒 Las contraseñas no coinciden");
      setTipoMensaje("error");
      return;
    }

    // ✅ Si pasa todas las validaciones
    setMensaje("✅ ¡Registro exitoso!");
    setTipoMensaje("exito");

    // Limpiar formulario
    setEmail('');
    setContraseña('');
    setConfirmarContraseña('');
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

      <div className="form-group">
        <label>Confirmar Contraseña</label>
        <input
          type="password"
          name="confirmarContraseña"
          placeholder="Confirma tu Contraseña"
          className="form-control"
          value={confirmarContraseña}
          onChange={(e) => setConfirmarContraseña(e.target.value)}
        />
      </div>

      <button type="submit" className="btn-primary">Enviar</button>

      {mensaje && (
        <p className={tipoMensaje}>{mensaje}</p>
      )}
    </form>
  );
};

export default Register;
