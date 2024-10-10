import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { Expediente } from "../pages/Expediente/Expediente";
import { AgregarUsuario } from "../pages/Usuario/AgregarUsuario";
import { Usuario } from "../pages/Usuario/Perfil";
import { Seccion } from "../pages/Cuadro/Seccion";
import { Serie } from "../pages/Cuadro/Serie";
import { Subserie } from "../pages/Cuadro/Subserie";
import { Productos } from "../Productos";
import { MiFormulario } from "../Post";
import { Crear_Expediente } from "../pages/Expediente/Crear_Expediente";
import { Ficha } from "../pages/Ficha/Crear_Ficha";
import { Ficha_Registro } from "../pages/Ficha/Ficha_Registro";
import { ListaUsers } from "../pages/Usuario/ListaUsers";
import { Catálogo } from "../pages/Catálogo/Catálogo";
import { Portada } from "../pages/Portada/Portada";
import { Catálogo_Registro } from "../pages/Catálogo/Catálogo_Registro";
import { DatosCatalogo } from "../pages/Configuración/DatosCatalogo";

export function Rutas() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Expediente" element={<Expediente />} />
      <Route path="/Agregar_Usuario" element={<AgregarUsuario />} />
      <Route path="/UserList" element={<ListaUsers />} />
      <Route path="/Usuario" element={<Usuario />} />
      <Route path="/Seccion" element={<Seccion />} />
      <Route path="/Test" element={<Productos />} />
      <Route path="/FormCuadro" element={<MiFormulario />} />
      <Route path="/Serie" element={<Serie />} />
      <Route path="/Subserie" element={<Subserie />} />
      <Route path="/Usuario" element={<Usuario />} />
      <Route path="/Crear_Expediente" element={<Crear_Expediente />} />
      <Route path="/Crear_Ficha" element={<Ficha />} />
      <Route path="/Ficha" element={<Ficha_Registro />} />
      <Route path="/Crear_Catálogo" element={<Catálogo />} />
      <Route path="/Crear_Portada" element={<Portada />} />
      <Route path="/Catálogo" element={<Catálogo_Registro />} />
      <Route path="/Datos_Catalogo" element={<DatosCatalogo />} />
    </Routes>
  );
}
