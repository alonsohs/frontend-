import Logo from "../../assets/Tlaxcala.png";
import Perfil from "../../assets/Perfil.png";
import { Boton } from "../../components/Botones/Botones";
export function Usuario() {
  return(
    //Contenedor principal 
    <div className="container">
      {/* Header */}
      <div className="Logo">
        <img src={Logo} alt="Logo" />
      </div>
      {/*Main card*/}
      <section className="userProfile card">
        <figure><img src={Perfil} alt="Perfil" width={250} height={250}/></figure>
      </section>
      <section className="work_skills card">
        <h1 className="heading">Informacion General</h1>
        <div className="Primary">
          <h1>Unidad Administriva</h1>
          <p>Unidad de Transparencia</p>
        </div>
        <div className="secondary">
          <h1>Cargo</h1>
          <p>Jefe de la unidad de Transparencia</p>
        </div>
      </section>

      {/*Detalles del usuario*/}
      <section className="userDetails card">
        <div className="userName">
          <h1 className="name">Kirby Zamudio</h1>
          <div className="map">
            <i className="ri-map-pin-fill ri"></i>
          </div>
          <p>Jefe de la Unidad de Transparencia</p>
        </div>

        <div className="rank">
          <h1 className="heading">Nombre de Usuario</h1>
          <h1>@Kirby_Zamudio</h1>
          <i className="ri-star-fill rate"></i>
          <div className="rating">
            <i className="ri-star-fill rate"></i>
            <i className="ri-star-fill rate"></i>
            <i className="ri-star-fill rate"></i>
            <i className="ri-star-fill rate"></i>
            <i className="ri-star-fill underrate"></i>
          </div>
        </div>

        <div className="btns">
          <ul>
            <li className="sendMsg">
              <i className="ri-chat-4-fill ri"></i>
              <a href="">Perfil</a>
            </li>

            <li className="sendMsg active">
              <i className="ri-check-fill ri"></i>
              <a href="">Contraseña</a>
            </li>
          </ul>
        </div>
      </section>
      <section className="timeline_about card">
        <div className="tabs">
          <ul>
            <li className="about active">
              <i className="ri-user3-fill ri"></i>
              <span>Acerca de</span>
            </li>
          </ul>
        </div>

        <div className="contact_Info">
          <h1 className="heading">Informacion de Contacto</h1>
          <ul>
            <li className="nombre_usuario">
              <h1 className="label">Nombre Completo:</h1>
              <span className="info">Kirby Alondra Lima Zamudio</span>
            </li>

            <li className="phone">
              <h1 className="label">Telefono:</h1>
              <span className="info">+11 234 567 890</span>
            </li>

            <li className="address">
              <h1 className="label">Direccion:</h1>
              <span className="info">S34 E 65th Street <br /> New York, NY 10651-78 156-187-60</span>
            </li>

            <li className="email">
              <h1 className="label">Correo Electronico:</h1>
              <span className="info">hello@rsmarquetech.com</span>
            </li>
          </ul>

          <a href=""><Boton>Regresar</Boton></a>
        </div>
      </section>
    </div>
  );
}
