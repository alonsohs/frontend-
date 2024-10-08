import "../../Styles/Styles.css";
import Logo from "../../assets/Tlaxcala.png";
import { Boton } from "../../components/Botones/Botones";
import { useState, useEffect } from "react";
import { serie_get, subserie_get, subserie_post } from "../../services/cuadro.service";
import { SubSerie, } from "../../Producto";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box } from "@mui/material";

export function Subserie() {
  const [subserie, setsubserie] = useState("");
  const [Descripcion, setDescripcion] = useState("");
  const [serie, setserie] = useState("");

  const [Subserie, setSubserie] = useState<SubSerie[]>([]);

  useEffect(() => {
    const fetchSerie = async () => {
      const items = await serie_get();
      setSubserie(items);
    };
    fetchSerie();
  }, []);

  useEffect(() => {
    const fetchSubserie = async () =>{ 
      const subserie = await subserie_get ();
      setSubserie(subserie);
    };
    fetchSubserie();
  }, []);

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const Subserie = {
      SubSerie: subserie,
      descripcion: Descripcion,
      serie: serie,
    };

    try {
      const result = await subserie_post(Subserie);
      console.log("Respuesta de la APi:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  //Add Table SubSerie 
  const colums : GridColDef[] = [
    //{field:"SubSerie", headerName : "Sub-Serie Codigo", width: 150 },
    {field:"descripcion", headerName : "Nombre Sub-Serie", width: 150 },
    {field:"serie", headerName : "A que Serie Pertenece", width: 150 },
  ];

  return (
    <body className="Body_Cuadro">
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossOrigin="anonymous"
      ></link>

      {/*Imagen de tlaxcala*/}
      <header className="Header_Logo">
        <div className="brandLogo">
          <img src={Logo} alt="Logo" width={300} />
        </div>

        <div className="H_Title">
          <h1 className="Header_Title">
            Cuadro General de clasificacion Archivistica
          </h1>
        </div>
      </header>

      {/*Subserie*/}
      <div
        className="multisteps-form_panel shadow p-4 rounded bg-white"
        data-animation="scaleIn"
      >
        <h3 className="multisteps-form_title">Subserie</h3>

        <form action="" onSubmit={handleSubmit}>
          <div className="multisteps-form_content">
            <div className="row">
              <div className="col-12 col-sm-6">
                <label>Serie</label>
                <select
                  className="multisteps-form_select form-control"
                  value={serie}
                  onChange={(e) => setserie(e.target.value)}
                >
                  {Subserie.map((subserie) => (
                    <option value={subserie.serie}> {subserie.serie}</option>
                  ))}
                </select>
              </div>

              <div className="col-12 col-sm-6">
                <label>Subserie</label>
                <input
                  className="multisteps-form_input form-control"
                  type="text"
                  placeholder="ID Subserie"
                  value={subserie}
                  onChange={(e) => setsubserie(e.target.value)}
                />
              </div>

              <div className="col-12 col-sm-6 mt-4 mt-sm-0">
                <label>Nombre Sub-Serie</label>
                <input
                  className="multisteps-form_input form-control"
                  type="text"
                  placeholder="Nombre"
                  value={Descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
                />
              </div>
            </div>

            <div className="row">
              <div className="button-row d-flex mt-4 col-12">
                <Boton>Enviar</Boton>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div //Show the table with information
        style  = {{height: 400}}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <DataGrid
         rows = {Subserie}
         columns={colums}
         getRowId={(x) => x.descripcion}
         disableRowSelectionOnClick
         //autoHeight
         density="compact"
         style={{
           width: '90%',
           border: '1px solid grey',
           borderRadius: '5px',
           margin: 'auto'
         }}
         />
            </Box>
          </div>
    </body>
  );
}
