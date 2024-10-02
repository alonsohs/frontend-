import styled from "styled-components";
import Iconotipo_Tlaxcala from "../../assets/Iconotipo_Tlaxcala.png";
import "../../Styles/Styles.css";
import { Variables } from "../../Styles/Variables";
import {
  AiOutlineLeft,
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFolderOpen,
  AiOutlineFile,
} from "react-icons/ai";
import {SiInternetarchive} from "react-icons/si";
import { LuSettings } from "react-icons/lu";
import { GiExitDoor } from "react-icons/gi";
import { NavLink } from "react-router-dom";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  const Modificar_SidebarOpen = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Container isOpen={sidebarOpen}>
      <button className="Boton_Siderbar" onClick={Modificar_SidebarOpen}>
        <AiOutlineLeft />
      </button>

      <div className="Contenedor_Iconotipo">
        <div className="Estilo_Iconotipo">
          <img src={Iconotipo_Tlaxcala} />
        </div>
      </div>

      {LinksArray.map(({ icon, label, to }) => (
        <div className="Contenedor_Links" key={label}>
          <NavLink
            to={to}
            className={({ isActive }) => `Links${isActive ? `  active` : ``}`}
          >
            <div className="Iconos_Links">{icon}</div>
            {sidebarOpen && <span>{label}</span>}
          </NavLink>
        </div>
      ))}

      <Divider />

      {linksArray.map(({ icon, label, to }) => (
        <div className="Contenedor_Links" key={label}>
          <NavLink
            to={to}
            className={({ isActive }) => `Links${isActive ? `  active` : ``}`}
          >
            <div className="Iconos_Links">{icon}</div>
            {sidebarOpen && <span>{label}</span>}
          </NavLink>
        </div>
      ))}
    </Container>
  );
}

//Links principales
const LinksArray = [
  {
    label: "Home ",
    icon: <AiOutlineHome />,
    to: "/Home",
  },
  {
    label: "Mi Perfil ",
    icon: <AiOutlineUser />,
    to: "/Usuario",
  },
  {
    label: "Crear Expediente ",
    icon: <AiOutlineFolderOpen />,
    to: "/Expediente",
  },
  {
    label: "Instrumentos Archivísticos ",
    icon: <AiOutlineFile />,
    to: "/Instrumentos_Archivísticos ",
  },
  {
    label: "Cuadro General",
    icon: <SiInternetarchive/>,
    to: "/Cuadro",
  },
];

//Links secundarios
const linksArray = [
  {
    label: "Configuración  ",
    icon: <LuSettings />,
    to: "/Configuración",
  },
  {
    label: "Cerrar Sesión  ",
    icon: <GiExitDoor />,
    to: "/Login",
  },
];

//Estilos de la sidebar
const Container = styled.div<{ isOpen: boolean }>`
  position: sticky;
  padding-top: 20px;
  top: 0;
  height: 100vh;
  color: #fff;
  background: #1a1a1a;

  .Boton_Siderbar {
    position: absolute;
    top: ${Variables.xxlSpacing};
    right: -18px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #2a2a2a;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 4px #fff;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s;
    transform: ${({ isOpen }) => (isOpen ? `rotate(0deg)` : `rotate(180deg)`)};
    border: none;
  }

  .Contenedor_Iconotipo {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: ${Variables.lgSpacing};
    padding-top: 25px;
    cursor: pointer;
    transition: all 0.3s;
    transform: ${({ isOpen }) => (isOpen ? `scale(0.9)` : `scale(1.0)`)};

    img {
      max-width: 100%;
      height: auto;
    }
  }

  .Estilo_Iconotipo img {
    width: 50px;
    height: auto;
  }

  .Contenedor_Links {
    margin: 8px 0;
    padding: 0 15%;
    :hover {
      background: #2a2a2a;
    }

    .Links {
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: calc(${Variables.smSpacing}-2px) 0;
      color: #fff;

      .Iconos_Links {
        padding: ${Variables.smSpacing} ${Variables.mdSpacing};
        display: flex;

        svg {
          font-size: 25px;
        }
      }

      &.active {
        .Iconos_Links {
          svg {
            color: #2a2a2a;
          }
        }
      }
    }
  }
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: #fff;
  margin: ${Variables.lgSpacing};
`;
