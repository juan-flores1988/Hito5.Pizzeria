import { useNavigate } from "react-router-dom";


const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
   
    navigate("/");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Perfil de usuario 👤</h2>

      <p>
        <strong>Email:</strong> usuario@correo.com
      </p>

      <button onClick={handleLogout}>
        Cerrar sesión 🔒
      </button>
    </div>
  );
};

export default Profile;
