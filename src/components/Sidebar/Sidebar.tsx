import React, { useState } from "react";
import styled from "styled-components";
import Iconotipo_Tlaxcala from "../../assets/Iconotipo_Tlaxcala.png";
import "../../Styles/Styles.css";
import { Variables } from "../../Styles/Variables";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFolderOpen,
  AiOutlineFile,
} from "react-icons/ai";
import { SiInternetarchive } from "react-icons/si";
import { LuSettings } from "react-icons/lu";
import { GiExitDoor } from "react-icons/gi";
import { NavLink, useNavigate } from "react-router-dom";
import { HiOutlineDocumentDuplicate } from "react-icons/hi2";
import { RiTableLine } from "react-icons/ri";
import { RiArchiveStackLine } from "react-icons/ri";
import { logout } from "../../services/auth.service";
import Icon from "../../assets/right-arrow.png";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface MenuItem {
  label: string;
  icon: React.ReactNode;
  to: string;
  subMenu?: MenuItem[];
  onClick?: string;
}

interface MenuItemProps extends MenuItem {
  sidebarOpen: boolean;
  handleLogout?: () => void;
}

export function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLogout = () => {
    logout();
    navigate("/Login");
  };

  return (
    <Container isOpen={sidebarOpen}>
      <button className="Boton_Siderbar" onClick={toggleSidebar}>
        <img src={Icon} alt="Icono" className="Icono" />
      </button>

      <div className="Contenedor_Iconotipo">
        <div className="Estilo_Iconotipo">
          <img src={Iconotipo_Tlaxcala} alt="Iconotipo Tlaxcala" />
        </div>
      </div>

      {LinksArray.map((item) => (
        <MenuItemComponent
          key={item.label}
          {...item}
          sidebarOpen={sidebarOpen}
          handleLogout={handleLogout}
        />
      ))}

      <Divider />

      {linksArray.map((item) => (
        <MenuItemComponent
          key={item.label}
          {...item}
          sidebarOpen={sidebarOpen}
          handleLogout={handleLogout}
        />
      ))}
    </Container>
  );
}

const LinksArray: MenuItem[] = [
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
    to: "/Instrumentos_Archivisticos",
    subMenu: [
      {
        label: "Inventario",
        icon: <RiTableLine />,
        to: "/Inventario",
      },
      {
        label: "Guía",
        icon: <RiTableLine />,
        to: "/Guía",
      },
      {
        label: "Ficha",
        icon: <RiTableLine />,
        to: "/Ficha",
      },
      {
        label: "Catálogo",
        icon: <RiTableLine />,
        to: "/Catálogo",
      },
      {
        label: "Portada",
        icon: <RiTableLine />,
        to: "/Portada",
      },
    ],
  },
  {
    label: "Cuadro General",
    icon: <SiInternetarchive />,
    to: "/Seccion",
    subMenu: [
      {
        label: "Sección",
        icon: <HiOutlineDocumentDuplicate />,
        to: "/Seccion",
      },
      {
        label: "Serie",
        icon: <HiOutlineDocumentDuplicate />,
        to: "/Serie",
      },
      {
        label: "Subserie",
        icon: <HiOutlineDocumentDuplicate />,
        to: "/Subserie",
      },
    ],
  },
];

const linksArray: MenuItem[] = [
  {
    label: "Herramientas Admin  ",
    icon: <LuSettings />,
    to: "/AgregarUsuario",
    subMenu: [
      {
        label: "Agregar usuarios",
        icon: <AiOutlineUser />,
        to: "/Agregar_Usuario",
      },
      {
        label: "Lista de Usuarios",
        icon: <AiOutlineUser />,
        to: "UserList",
      },
      {
        label: "Datos Catalogo",
        icon: <RiArchiveStackLine />,
        to: "/Datos_Catalogo",
      },
    ],
  },
  {
    label: "Cerrar Sesión  ",
    icon: <GiExitDoor />,
    to: "/Login",
    onClick: "logout",
  },
];

const MenuItemComponent: React.FC<MenuItemProps> = ({
  label,
  icon,
  to,
  subMenu,
  sidebarOpen,
  onClick,
  handleLogout,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  if (subMenu) {
    return (
      <div className="Contenedor_Links">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="Links"
          style={{ cursor: "pointer" }}
        >
          <div className="Iconos_Links">{icon}</div>
          {sidebarOpen && <span>{label}</span>}
        </div>
        {isOpen && sidebarOpen && (
          <ul className="Submenu">
            {subMenu.map((item) => (
              <li key={item.label}>
                <NavLink to={item.to} className="Links SubmenuItem">
                  <div className="Iconos_Links">{item.icon}</div>
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  if (onClick === "logout") {
    return (
      <div className="Contenedor_Links">
        <div
          onClick={handleLogout}
          className="Links"
          style={{ cursor: "pointer" }}
        >
          <div className="Iconos_Links">{icon}</div>
          {sidebarOpen && <span>{label}</span>}
        </div>
      </div>
    );
  }

  return (
    <div className="Contenedor_Links">
      <NavLink
        to={to}
        className={({ isActive }) => `Links${isActive ? " active" : ""}`}
      >
        <div className="Iconos_Links">{icon}</div>
        {sidebarOpen && <span>{label}</span>}
      </NavLink>
    </div>
  );
};

const Container = styled.div<{ isOpen: boolean }>`
  position: sticky;
  top: 0;
  height: 150vh;
  color: #ff;
  background: #1a1a1a;

  .Boton_Siderbar {
    border: none;
    padding: 10px;
    position: absolute;
    top: 80px;
    right: ${({ isOpen }) => (isOpen ? "-18px" : "-10px")};
    height: 32px;
    background: white;
    color: black;
    box-shadow: 0 0 4px #eaeaea;
    cursor: pointer;
    transition: all 0.3s ease;
    transform: ${({ isOpen }) => (isOpen ? "rotate(0deg)" : "rotate(180deg)")};
  }

  .Icono {
    width: 10px;
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
    height: auto;
    padding: 0 15%;
    :hover {
      background: #2a2a2a;
    }

    .Links {
      display: flex;
      align-items: center;
      height: auto;
      text-decoration: none;
      padding: calc(${Variables.smSpacing} - 2px) 0;
      color: #eaeaea;

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

  .Submenu {
    list-style-type: none;
    padding-left: ${Variables.mdSpacing};
  }

  .SubmenuItem {
    padding: ${Variables.smSpacing} 0;
  }
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: #fff;
  margin: ${Variables.lgSpacing} 0;
`;

export default Sidebar;
