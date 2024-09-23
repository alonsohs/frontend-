import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { Perfil } from "../pages/Usuario/Perfil";
import { Expediente } from "../pages/Expediente/Expediente";
import { Configuración } from "../pages/Configuración/Configuración";

export function Rutas() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Perfil" element={<Perfil />} />
      <Route path="/Expediente" element={<Expediente />} />
      <Route path="/Configuración" element={<Configuración />} />
    </Routes>
  );
}
