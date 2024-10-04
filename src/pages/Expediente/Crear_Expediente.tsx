import React, { useState } from "react";
import { Logo } from "../../components/Logo";
import { ControladorPasos } from "../../components/Multipasos/ControladorPasos";
import { Pasos } from "../../components/Multipasos/Pasos";
import { Ficha } from "../../pages/Multipasos_Expediente/Ficha";
import { Catálogo } from "../../pages/Multipasos_Expediente/Catálogo";
import { Portada } from "../../pages/Multipasos_Expediente/Portada";
import { Subir_Documentación } from "../../pages/Multipasos_Expediente/Subir_Documentación";
import { Resúmen_Expediente } from "../../pages/Multipasos_Expediente/Resúmen_Expediente";
import { Final } from "../../pages/Multipasos_Expediente/Final";

export const Crear_Expediente: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const steps: string[] = [
    "Ficha Técnica de Valoración Documental",
    "Catálogo de Disposición Documental",
    "Portada de Expediente",
    "Subir Documentación",
    "Resumen",
    "Final",
  ];

  const displayStep = (step: number): JSX.Element | null => {
    switch (step) {
      case 1:
        return <Ficha />;
      case 2:
        return <Catálogo />;
      case 3:
        return <Portada />;
      case 4:
        return <Subir_Documentación />;
      case 5:
        return <Resúmen_Expediente />;
      case 6:
        return <Final />;
      default:
        return null;
    }
  };

  const handleClick = (direction: "Atrás" | "Adelante") => {
    let newStep = currentStep;

    direction === "Adelante" ? newStep++ : newStep--;

    if (newStep > 0 && newStep <= steps.length) {
      setCurrentStep(newStep);
    }
  };

  return (
    <div>
      <Logo />
      <div className="Contenedor_CrearExpediente">
        <div className="C_PasosExpediente">
          <Pasos steps={steps} currentStep={currentStep} />
        </div>

        <div>{displayStep(currentStep)}</div>

        <div>
          <ControladorPasos
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        </div>
      </div>
    </div>
  );
};
