import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { Expediente } from "../pages/Expediente/Expediente";
import { Configuración } from "../pages/Configuración/Configuración";
import {Usuario} from "../pages/Usuario/Perfil";
import { Cuadro } from "../pages/Cuadro/Cuadro";
import { Productos } from "../Productos";

export function Rutas() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Expediente" element={<Expediente />} />
      <Route path="/Configuración" element={<Configuración />} />
      <Route path="/Usuario" element={<Usuario/>}/>
      <Route path="/Cuadro" element={<Cuadro/>}/>
      <Route path="/Seccion" element={<Productos/>}/>
    </Routes>
  );
}
