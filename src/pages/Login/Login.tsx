import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate en lugar de useHistory
import "../../Styles/Styles.css";
import Logo_Tlaxcala from "../../assets/Tlaxcala.png";
import Icono_Usuario from "../../assets/Usuario.png";
import Icono_Contraseña from "../../assets/Contraseña.png";
import { Boton } from "../../components/Botones/Botones";
import { login } from "../../services/auth.service"; // Importa la función de login

export function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null); // Para manejar errores
  const navigate = useNavigate(); // Usa useNavigate en lugar de useHistory

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Evita la recarga de la página

    try {
      // Llama a la función de login y pasa username y password
      await login(username, password);
      navigate("/dashboard"); // Redirige al usuario después del login exitoso
    } catch (err) {
      setError("Error al iniciar sesión. Por favor, revisa tus credenciales.");
    }
  };

  return (
    <div className="Contenedor_Login">
      <div className="Cabeza_Login">
        <img src={Logo_Tlaxcala} alt="Logo Tlaxcala" className="Estilo_Logo" />
        <div className="Titulo_Login">Iniciar Sesión</div>
        <div className="Linea_Divisora_Login"></div>
      </div>

      <form onSubmit={handleSubmit}> {/* Agrega el evento onSubmit */}
        <div className="Contenedor_Inputs">
          <div className="Input">
            <img src={Icono_Usuario} alt="Icono Usuario" />
            <input
              type="text"
              placeholder="Nombre de Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)} // Actualiza el estado
            />
          </div>

          <div className="Input">
            <img src={Icono_Contraseña} alt="Icono Contraseña" />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Actualiza el estado
            />
          </div>
        </div>

        {/* Muestra un mensaje de error si hay un problema con el login */}
        {error && <p className="error-message">{error}</p>}

        <div>
          <button type="submit">
            <Boton>Entrar</Boton>
          </button>
        </div>
      </form>
    </div>
  );
}
