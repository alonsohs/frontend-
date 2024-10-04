import axios from "axios";
import { useState, useEffect } from "react";
<<<<<<< HEAD
import { seccion } from "./Producto";
import { Serie } from "./Producto";
import { Seccion_get } from "./Services/cuadro.service";
//import { serie_get } from "./services/cuadro.service";
import { serie_post } from "./Services/cuadro.service";
import { Boton } from "./components/Botones/Botones";
import { DataGrid, GridColDef } from '@mui/x-data-grid';


export const Productos = () => {
  //const [productos, setProductos] = useState<Producto[]>([]);
  const [secciones, setSeccion] = useState<seccion[]>([]);
  const [serie, setSerie] = useState<Serie[]>([]);
  const [id_seccion, setId_seccion] = useState("");
=======
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
>>>>>>> eefc4dce919d884c99bad0a732faa258d148d107
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
<<<<<<< HEAD
      codigo_serie: Codigo,
      descripcion: Descripcion,
      id_seccion: id_seccion
=======
      codigo: Codigo,
      descripcion: Descripcion,
>>>>>>> eefc4dce919d884c99bad0a732faa258d148d107
    };

    try {
      const result = await serie_post(serie);
      console.log("Respuesta de la APi:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };
<<<<<<< HEAD

  const columns: GridColDef[] = [
    { field: 'codigo', headerName: 'codigo', width: 150 },
    { field: 'descripcion', headerName: 'descripcion', width: 150 },
  ];
  

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <select name="seccion" id="seccion"value={id_seccion} onChange={(e) => setId_seccion(e.target.value)} >
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

      <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={secciones} columns={columns} getRowId={(x)=> x.id_seccion}/>

    </div>

    
=======
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

>>>>>>> eefc4dce919d884c99bad0a732faa258d148d107
      {/*<select name="serie" id="serie">
        {serie.map((serie) => (
          <option value={serie.serie}>{serie.serie}</option>
        ))}
      </select>*/}
<<<<<<< HEAD
    </div>
  );
};
=======
    </div>
  );
};
>>>>>>> eefc4dce919d884c99bad0a732faa258d148d107
