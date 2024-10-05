import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { Expediente } from "../pages/Expediente/Expediente";
import { Configuración } from "../pages/Configuración/Configuración";
import {  Usuario  } from "../pages/Usuario/Perfil";
import { Seccion } from "../pages/Cuadro/Seccion";
import { Serie } from "../pages/Cuadro/Serie";
import { Subserie } from "../pages/Cuadro/Subserie";
import { Productos } from "../Productos";
import { MiFormulario } from "../Post";
import { Crear_Expediente } from "../pages/Expediente/Crear_Expediente";

export function Rutas() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Expediente" element={<Expediente />} />
      <Route path="/Configuración" element={<Configuración />} />
      <Route path="/Usuario" element={<Usuario />} />
      <Route path="/Seccion" element={<Seccion />} />
      <Route path="/Test" element={<Productos />} />
      <Route path="/FormCuadro" element={<MiFormulario />} />
      <Route path="/Serie" element={<Serie />} />
      <Route path="/Subserie" element={<Subserie />} />
      <Route path="/Usuario" element={<Usuario />} />
      <Route path="/Crear_Expediente" element={<Crear_Expediente />} />
    </Routes>
  );
}
