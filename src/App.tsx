import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { Boton } from "./components/Botones/Botones";
import { Principal } from "./pages/Principal/Principal";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/Login" />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Boton" element={<Boton />} />
        <Route path="/Principal" element={<Principal />} />
      </Routes>
    </BrowserRouter>
  );
}
