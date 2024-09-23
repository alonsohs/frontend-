import { useState } from "react";
import { Rutas } from "./Rutas/Rutas";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Sidebar } from "./components/Sidebar/Sidebar";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <BrowserRouter>
      <Container className={sidebarOpen ? "sidebarState active" : ""}>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <Rutas />
      </Container>
    </BrowserRouter>
  );
}

// Estilos
const Container = styled.div`
  display: grid;
  grid-template-columns: 90px auto;
  transition: all 0.3s;

  &.active {
    grid-template-columns: 300px auto;
  }
`;
