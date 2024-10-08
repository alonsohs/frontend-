import React from "react";
import { Card } from "./Card";
import Ficha from "../../assets/Ficha.png";
import Catálogo from "../../assets/Catálogo.png";
import Portada from "../../assets/Portada.png";
import Subir from "../../assets/Subir.png";
export const Cards_IA: React.FC = () => {
  return (
    <div className="Contenedor_Card">
      <Card
        imageSrc={Ficha}
        redirectUrl="/Crear_Ficha"
        title="Ficha Técnica de Valoración Documental "
      />
      <Card
        imageSrc={Catálogo}
        redirectUrl="/Crear_Catálogo"
        title="Catálogo de Disposición Documental"
      />
      <Card
        imageSrc={Portada}
        redirectUrl="/Crear_Portada"
        title="Portada de Expediente  "
      />
      <Card
        imageSrc={Subir}
        redirectUrl="/Subir_Documentos"
        title="Subir Documentación  "
      />
    </div>
  );
};
