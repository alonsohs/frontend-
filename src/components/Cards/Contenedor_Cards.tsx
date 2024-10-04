import React from "react";
import { Card } from "../../components/Cards/Card";
import Crear from "../../assets/Crear.jpg";
import Editar from "../../assets/Editar.jpg";
import Buscar from "../../assets/Buscar.jpg";

export const CardContainer: React.FC = () => {
  return (
    <div className="Contenedor_Card">
      <Card
        imageSrc={Crear}
        redirectUrl="/Crear_Expediente"
        title="Crear Expediente "
      />
      <Card
        imageSrc={Editar}
        redirectUrl="/editar-expediente"
        title="Editar Expediente"
      />
      <Card
        imageSrc={Buscar}
        redirectUrl="/consultar-expedientes"
        title="Buscar Expediente "
      />
    </div>
  );
};
