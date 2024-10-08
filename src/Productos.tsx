import { useState, useEffect } from "react";
//import { seccion } from "./Producto";
import { Seccion_get } from "./services/cuadro.service";
import { serie_get, subserie_get } from "./services/cuadro.service";
import { ficha_post } from "./services/ficha.services";
import { Boton } from "./components/Botones/Botones";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
//import { ficha } from "./services/var.ficha";
import { seccion, serie,SubSerie } from "./Producto";
import { ficha_get } from "./services/ficha.services";
import { ficha } from "./services/var.ficha";


export const Productos = () => {
  //const [productos, setProductos] = useState<Producto[]>([]);
  
  const [id_ficha, setID] = useState("");
  const [area_resguardante, setResguar] = useState("");
  const [area_intervienen, setInervienen] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [soporte_docu, setSoporte] = useState("")
  const [id_seccion, setId_seccion] = useState("");
  const [id_serie, setId_serie] = useState("");
  const [id_subserie, setId_subserie] = useState("");

  const [secciones, setSeccion] = useState<seccion[]>([]);
  const [serie, setserie] = useState<serie[]>([]);
  const [subserie, setsubserie] = useState<SubSerie[]>([]);
  const [ficha, setFicha] = useState<ficha[]>([]);


  useEffect(() => {
    const fetchSeccion = async () => {
      const items = await Seccion_get();
      setSeccion(items);
    };
    fetchSeccion();
  }, []);

  useEffect(() => {
    const fetchSerie = async () => {
      const items = await serie_get();
      setserie(items);
    };
    fetchSerie();
  }, []);

  useEffect(() => {
    const fetchSubserie = async () => {
      const items = await subserie_get();
      setsubserie(items);
    };
    fetchSubserie();
  }, []);


  useEffect(()=> {
    const fetchFicha = async ()=>  {
      const items = await ficha_get();
      setFicha(items);
    };
    fetchFicha
  })

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const ficha = {
      id_ficha: id_ficha,
      area_resguardante: area_resguardante,
      area_intervienen: area_intervienen,
      soporte_docu: soporte_docu,
      descripcion: descripcion,
      id_seccion : id_seccion,
      id_serie: id_serie,
      id_subserie : id_subserie 
    };

    try {
      const result = await ficha_post(ficha);
      console.log("Respuesta de la APi:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const columns: GridColDef[] = [
    { field: "id_ficha", headerName: "Num. de Ficha", width: 150 },
    { field: "area_resguardante", headerName: "Area Resguardante", width: 150 },
    { field: "area_interviene", headerName: "Areas que Interviene", width: 150 },
    { field: "soporte_docu", headerName: "Soporte Documental (Formato)", width: 150 },
    { field: "descripcion", headerName: "Descripción", width: 150 },
    { field: "id_seccion", headerName: "Seccion a la que pertenece", width: 150 },
    { field: "id_serie", headerName: "Serie a la que pertenece", width: 150 },    
    { field: "id_subserie", headerName: "Subserie a la que pertenece", width: 150 },


  ];

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <select
          name="seccion"
          id="seccion"
          value={id_seccion}
          onChange={(e) => setId_seccion(e.target.value)}
        >
          {" "}
          Seccion
          {secciones.map((seccion) => (
            <option value={seccion.id_seccion}> {seccion.id_seccion}</option>
          ))}
        </select>
        <select
          name="serie"
          id="serie"
          value={id_serie}
          onChange={(e) => setId_serie(e.target.value)}
        >
          {" "}
          Serie 
          {serie.map((serie) => (
            <option value={serie.serie}> {serie.serie}</option>
          ))}
        </select>

        <select name="subserie"
          id="subserie"
          value={id_subserie}
          onChange={(e) => setId_subserie(e.target.value)}>
          Subserie
          {subserie.map((subserie) => (
            <option value={subserie.SubSerie}> {subserie.SubSerie}</option>
          ))}
        </select>


        <label>ficha</label>
        <input type="text" value={id_ficha} onChange={(e) => setID(e.target.value)} />
        <label>area resgardante </label>
        <input
          type="text"
          value={area_resguardante}
          onChange={(e) => setResguar(e.target.value)}
        />
        <label>area intervienen</label>
        <input
          type="text"
          value={area_intervienen}
          onChange={(e) => setInervienen(e.target.value)}
        />
        <label>Descripcion</label>
        <input
          type="text"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <label>Soporte documental</label>
        <input
          type="text"
          value={soporte_docu}
          onChange={(e) => setSoporte(e.target.value)}
        />


        <Boton>Enviar</Boton>
      </form>
      <div style={{ height: 300, width: "100%" }}>
        <DataGrid
          rows={ficha}
          columns={columns}
          getRowId={(x) => x.id_ficha}
        />
      </div>
      {/*<select name="serie" id="serie">
        {serie.map((serie) => (
          <option value={serie.serie}>{serie.serie}</option>
        ))}
      </select>*/}
        
    </div>
  );
};
