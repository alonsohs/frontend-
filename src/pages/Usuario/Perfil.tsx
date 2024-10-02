import "../../Styles/Styles.css";
import Logo from "../../assets/Tlaxcala.png";
import Perfil from "../../assets/Perfil.png";
import { Boton } from "../../components/Botones/Botones";
import "../../../node_modules/remixicon/fonts/remixicon.css";
export function Usuario() {
  return (
    //Contenedor principal
    <div className="container">
      {/* Header */}
      <div className="Logo_img">
        <img src={Logo} alt="Logo" width={400} />
      </div>

      {/*Main-Profile card*/}
      <section className="userProfile card">
        <div className="profile">
          <figure>
            <img src={Perfil} alt="Perfil" width={250} height={250} />
          </figure>
        </div>
      </section>

      {/*Work & Skills Section*/}
      <section className="work_skills card">
        {/*Work container*/}
        <div className="work">
          <h1 className="heading">Informacion General</h1>
          <div className="Primary">
            <h1>Unidad Administriva</h1>
            <p>Unidad de Transparencia</p>
          </div>

          <div className="secondary">
            <h1>Cargo</h1>
            <p>Jefe de la unidad de Transparencia</p>
          </div>
        </div>
      </section>

      {/*Detalles del usuario*/}
      <section className="userDetails card">
        <div className="userName">
          <h1 className="name">Kirby Zamudio</h1>
          <p>Jefe de la Unidad de Transparencia</p>
        </div>

        <div className="rank">
          <h1 className="heading">Nombre de Usuario</h1>
          <h1>@Kirby_Zamudio</h1>
        </div>

        <div className="btns">
          <ul>
            <li className="Per">
              <a href="" className="Perfil">
                Perfil
              </a>
            </li>

            <li className="Contra">
              <a href="" className="Pass">
                Contraseña
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="timeline_about card">
        <div className="tabs">
          <ul>
            <li className="about active">
              <i className="ri-user-3-fill ri"></i>
              <span>Acerca de</span>
            </li>
          </ul>
        </div>

        <div className="contact_info">
          <h1 className="heading">Informacion de Contacto</h1>
          <ul>
            <li className="nombre_usuario">
              <h1 className="label">Nombre Completo:</h1>
              <span className="info">Kirby Alondra Lima Zamudio</span>
            </li>

            <li className="email">
              <h1 className="label">Correo Electronico:</h1>
              <span className="info">hello@rsmarquetech.com</span>
            </li>
          </ul>
        </div>

        <a href="/Home" className="Regresar ">
          <Boton>Regresar</Boton>
        </a>
      </section>
    </div>
  );
}
