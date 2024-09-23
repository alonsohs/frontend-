import "../../Styles/Styles.css";
import Logo_Tlaxcala from "../../assets/Tlaxcala.png";
import Icono_Usuario from "../../assets/Usuario.png";
import Icono_Correo from "../../assets/Correo.png";
import Icono_Contraseña from "../../assets/Contraseña.png";
import { Boton } from "../../components/Botones/Botones";

export function Login() {
  return (
    <div className="Contenedor_Login">
      <div className="Cabeza_Login">
        <img src={Logo_Tlaxcala} alt="Logo Tlaxcala" className="Estilo_Logo" />
        <div className="Titulo_Login">Iniciar Sesión</div>
        <div className="Linea_Divisora_Login"></div>
      </div>

      <div className="Contenedor_Inputs">
        <div className="Input">
          <img src={Icono_Usuario} alt="" />
          <input type="text" placeholder="Nombre de Usuario " />
        </div>

        <div className="Input">
          <img src={Icono_Correo} alt="" />
          <input type="email" placeholder="Correo Electrónico " />
        </div>

        <div className="Input">
          <img src={Icono_Contraseña} alt="" />
          <input type="password" placeholder="Contraseña" />
        </div>
      </div>
      <a href="../Principal" style={{marginLeft: 150}}><Boton>Entrar</Boton></a>
    </div>
  );
}
