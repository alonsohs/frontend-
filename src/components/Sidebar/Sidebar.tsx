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
import { NavLink } from "react-router-dom";
import { HiOutlineDocumentDuplicate } from "react-icons/hi2";
import { IoIosArrowDropright } from "react-icons/io";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface MenuItem {
  label: string;
  icon: React.ReactNode;
  to: string;
  subMenu?: MenuItem[];
}

interface MenuItemProps extends MenuItem {
  sidebarOpen: boolean;
}

export function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Container isOpen={sidebarOpen}>
      <button className="Boton_Siderbar" onClick={toggleSidebar}>
        <IoIosArrowDropright />
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
        />
      ))}

      <Divider />

      {linksArray.map((item) => (
        <MenuItemComponent
          key={item.label}
          {...item}
          sidebarOpen={sidebarOpen}
        />
      ))}
    </Container>
  );
}

// Links principales
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
  },
  {
    label: "Cuadro General",
    icon: <SiInternetarchive />,
    to: "/Seccion",
    subMenu: [
      {
        label: "Sección",
        icon: <HiOutlineDocumentDuplicate />,
        to: "/Cuadro/Sección",
      },
      {
        label: "Serie",
        icon: <HiOutlineDocumentDuplicate />,
        to: "/Cuadro/Serie",
      },
      {
        label: "Subserie",
        icon: <HiOutlineDocumentDuplicate />,
        to: "/Cuadro/Subserie",
      },
    ],
  },
];

// Links secundarios
const linksArray: MenuItem[] = [
  {
    label: "Configuración  ",
    icon: <LuSettings />,
    to: "/Configuracion",
  },
  {
    label: "Cerrar Sesión  ",
    icon: <GiExitDoor />,
    to: "/Login",
  },
];

// Componente MenuItemComponent
const MenuItemComponent: React.FC<MenuItemProps> = ({
  label,
  icon,
  to,
  subMenu,
  sidebarOpen,
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

// Estilos de la sidebar
const Container = styled.div<{ isOpen: boolean }>`
  position: sticky;
  top: 0;
  height: 150vh;
  color: #fff;
  background: #1a1a1a;

  .Boton_Siderbar {
    position: absolute;
    top: 80px;
    right: ${({ isOpen }) => (isOpen ? "-18px" : "-10px")};
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #eaeaea;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 4px #eaeaea;
    color: black;
    cursor: pointer;
    transition: all 0.3s ease;
    transform: ${({ isOpen }) => (isOpen ? "rotate(0deg)" : "rotate(180deg)")};
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
