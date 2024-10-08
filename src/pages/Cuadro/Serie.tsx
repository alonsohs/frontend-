import "../../Styles/Styles.css";
import Logo from "../../assets/Tlaxcala.png";
import { Boton } from "../../components/Botones/Botones";
import { useEffect, useState } from "react";
import { Seccion_get, serie_get } from "../../services/cuadro.service";
import { seccion } from "../../Producto";
import { serie } from "../../Producto"
import { serie_post } from "../../services/cuadro.service";
<<<<<<< HEAD
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box } from "@mui/material";


=======
import "sweetalert2/src/sweetalert2.scss";
import Swal from "sweetalert2";
>>>>>>> 7b90fc63565c1fe54a76f62b1a2b02f9bd0329c0

export function Serie() {
  const [ID, setID] = useState("");
  const [Serie, setSerie] = useState("");
  const [Codigo, setCode] = useState("");
  const [Descripcion, setDescripcion] = useState("");
  const [ID_seccion, setId_seccion] = useState("");
  
  
  const [secciones, setSeccion] = useState<seccion[]>([]);
<<<<<<< HEAD
  const [series, setSerieGet] = useState<serie[]>([]);
=======
  const [isLoading, setIsLoading] = useState(false);
>>>>>>> 7b90fc63565c1fe54a76f62b1a2b02f9bd0329c0

  useEffect(() => {
    const fetchSeccion = async () => {
      try {
        const items = await Seccion_get();
        console.log(items);

        setSeccion(items);
      } catch (error) {
        console.error("Error al obtener las secciones:", error);
      }
    };
    fetchSeccion();
  }, []);


  useEffect (() =>{
    const fetchSerie = async () => {
      const serie = await serie_get();
      setSerieGet (serie);
    };
    fetchSerie(); 
  }, []); 

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (
      !ID.trim() ||
      !Serie.trim() ||
      !Codigo.trim() ||
      !Descripcion.trim() ||
      !ID_seccion.trim()
    ) {
      Swal.fire({
        icon: "warning",
        title: "Error",
        text: "Debes llenar todos los campos para enviar el formulario",
      });
      return;
    }
    setIsLoading(true);

    const serie = {
      id_serie: ID,
      serie: Serie,
      codigo_serie: Codigo,
      descripcion: Descripcion,
      id_seccion: ID_seccion,
    };

    try {
      const result = await serie_post(serie);
      console.log("Respuesta de la APi:", result);

      Swal.fire({
        icon: "success",
        title: "¡Exito!",
        text: "Se ha creado la serie con exito",
      });

      setID("");
      setSerie("");
      setCode("");
      setDescripcion("");
      setId_seccion("");
    } catch (error) {
      console.error("Error:", error);

      Swal.fire({
        icon: "error",
        title: "Oops",
        text: "Algo salio mal. Por favor intente de nuevo",
      });
    } finally {
      setIsLoading(false);
    }
  };

  //Add Table Section
  const columns :GridColDef[] = [
    {field:"id_serie", headerName : "Serie Codigo", width: 150 },
    {field:"serie", headerName : "Nombre Serie", width: 150 },
    {field:"codigo_serie", headerName : "Codigo", width: 150 },
    {field:"descripcion", headerName : "Descripción", width: 250 },
    {field:"id_seccion", headerName : "A que Seccion Pertenece", width: 250 },
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

      {/*Serie*/}

      <div
        className="multisteps-form_panel shadow p-4 rounded bg-white"
        data-animation="scaleIn"
      >
        <h3 className="multisteps-form_title">Serie</h3>
        <form action="" onSubmit={handleSubmit}>
          <div className="multisteps-form_content">
            <div className="form-row" mt-4>
              {/*Id seccion*/}
              <div className="col-6 col-sm-3 mt-4 mt-4 mt-sm-0">
                <label>Seccion</label>
                <select
                  name="seccion"
                  id="seccion"
                  value={ID_seccion}
                  onChange={(e) => setId_seccion(e.target.value)}
                >
                  <option value="">Seleccione una opción</option>
                  {secciones.map((seccion) => (
                    <option value={seccion.id_seccion}>
                      {seccion.id_seccion}
                    </option>
                  ))}
                </select>
              </div>

              {/*ID Serie*/}
              <div className="col">
                <label>ID Serie</label>
                <input
                  className="multisteps-form_input form-control"
                  type="Select-box"
                  placeholder="ID Serie"
                  value={ID}
                  onChange={(e) => setID(e.target.value)}
                />
              </div>

              {/*Serie*/}
              <div className="col">
                <label>Serie</label>
                <input
                  className="multisteps-form_input form-control"
                  type="Select-box"
                  placeholder="Serie"
                  value={Serie}
                  onChange={(e) => setSerie(e.target.value)}
                />
              </div>

              {/*Codigo*/}
              <div className="col">
                <label>Codigo</label>
                <input
                  className="multisteps-form_input form-control"
                  type="Select-box"
                  placeholder="Codigo"
                  value={Codigo}
                  onChange={(e) => setCode(e.target.value)}
                />
              </div>

              {/*Descripcion*/}
              <div className="form-row mt-4">
                <div className="col">
                  <label>Descripcion</label>
                  <input
                    className="multisteps-form_input form-control"
                    type="text"
                    placeholder="Descripcion"
                    value={Descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                  />
                </div>
              </div>

              {/*Botones Anterior y Siguiente*/}
              <div className="button-row d-flex mt-4">
                <Boton disabled={isLoading}>
                  {isLoading ? "Enviando..." : "Enviar"}
                </Boton>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div //Show the table with information
             style  = {{height: 400}}>
             <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
         <DataGrid
         rows = {series}
         columns={columns}
         getRowId={(x) => x.serie}
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
