import { Logo } from "../../components/Logo";
import { Cards_IA } from "../../components/Cards/Cards_IA";
import { Boton } from "../../components/Botones/Botones";

export const Crear_Expediente = () => {
  return (
    <div>
      <Logo />
      <Cards_IA />
      <div className="Boton_Crear_Expediente">
        <a href="/Expediente">
          <Boton> Regresar </Boton>
        </a>
      </div>
    </div>
  );
};
