import axios from "axios";
import { useState, useEffect } from "react";
import { Producto } from "./Producto";
import { Serie } from "./Producto";
import { Seccion_get } from "./services/cuadro.service";
import { serie_get } from "./services/cuadro.service";
import { serie_post } from "./services/cuadro.service";
import { Boton } from "./components/Botones/Botones";

export const Productos = () => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [secciones, setSeccion] = useState<Producto[]>([]);
  const [serie, setSerie] = useState<Serie[]>([]);
  const [ID, setID] = useState("");
  const [Serie, setSe] = useState("");
  const [Codigo, setCode] = useState("");
  const [Descripcion, setDescripcion] = useState("");

  useEffect(() => {
    const fetchSeccion = async () => {
      const items = await Seccion_get();
      setSeccion(items);
    };
    fetchSeccion();
  }, []);

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const serie = {
      id_serie: ID,
      serie: Serie,
      codigo: Codigo,
      descripcion: Descripcion,
    };

    try {
      const result = await serie_post(serie);
      console.log("Respuesta de la APi:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <select name="seccion" id="seccion">
          {" "}
          Seccion
          {secciones.map((seccion) => (
            <option value={seccion.id_seccion}> {seccion.id_seccion}</option>
          ))}
        </select>
        <label>ID serie</label>
        <input type="text" value={ID} onChange={(e) => setID(e.target.value)} />
        <label>Serie</label>
        <input
          type="text"
          value={Serie}
          onChange={(e) => setSe(e.target.value)}
        />
        <label>Codigo Serie</label>
        <input
          type="text"
          value={Codigo}
          onChange={(e) => setCode(e.target.value)}
        />
        <label>Descripcion</label>
        <input
          type="text"
          value={Descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <Boton>Enviar</Boton>
      </form>

      {productos.map((producto) => (
        <div key={producto.id_seccion} {...producto}>
          <p>Seccion: {producto.id_seccion}</p>
          <p>Codigo: {producto.codigo}</p>
          <p>Descripcion: {producto.descripcion}</p>
        </div>
      ))}

      {/*<select name="serie" id="serie">
        {serie.map((serie) => (
          <option value={serie.serie}>{serie.serie}</option>
        ))}
      </select>*/}
    </div>
  );
};
