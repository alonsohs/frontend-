import { useState, useEffect } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import Logo from "../../assets/Tlaxcala.png";
import { Boton } from "../../components/Botones/Botones";
import {
  serie_get,
  subserie_get,
  subserie_post,
} from "../../services/cuadro.service";
import { SubSerie } from "../../Producto";
import Swal from "sweetalert2";

export function Subserie() {
  const [subserie, setsubserie] = useState("");
  const [Descripcion, setDescripcion] = useState("");
  const [serie, setserie] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [Subserie, setSubserie] = useState<SubSerie[]>([]);

  useEffect(() => {
    const fetchSerie = async () => {
      const items = await serie_get();
      setSubserie(items);
    };
    fetchSerie();
  }, []);

  useEffect(() => {
    const fetchSubserie = async () => {
      const subserie = await subserie_get();
      setSubserie(subserie);
    };
    fetchSubserie();
  }, []);

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (!subserie.trim() || !Descripcion.trim() || !serie.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Error",
        text: "Debes llenar todos los campos para enviar el formulario",
      });
      return;
    }
    setIsLoading(true);

    const SubserieData = {
      SubSerie: subserie,
      descripcion: Descripcion,
      serie: serie,
    };

    try {
      const result = await subserie_post(SubserieData);
      console.log("Respuesta de la APi:", result);

      Swal.fire({
        icon: "success",
        title: "¡Exito!",
        text: "Se ha creado la subserie con exito",
      });

      setsubserie("");
      setDescripcion("");
      setserie("");

      const updatedSubserie = await subserie_get();
      setSubserie(updatedSubserie);
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

  const columns: GridColDef[] = [
    {
      field: "SubSerie",
      headerName: "Sub-Serie Código",
      flex: 1,
      minWidth: 150,
      headerClassName: "table-header",
    },
    {
      field: "descripcion",
      headerName: "Nombre Sub-Serie",
      flex: 1.5,
      minWidth: 150,
      headerClassName: "table-header",
    },
    {
      field: "serie",
      headerName: "Serie",
      flex: 1,
      minWidth: 150,
      headerClassName: "table-header",
    },
  ];

  return (
    <body>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossOrigin="anonymous"
      ></link>
      <img className="Logo_imgRU" src={Logo} alt="" width={"25%"} />
      <div className="layoutAuthentication">
        <div className="layoutAuthentication_content">
          <main>
            <div className="container-fluid">
              <div className="row justify-content-center">
                <div className="col-lg-7">
                  <div className="card shadow-lg border-0 rounded-lg mt-5">
                    <div className="card-header">
                      <h3 className="text-center font-weight-light my-4">
                        Cuadro General de Clasificación Archivística
                      </h3>
                    </div>
                    <div className="card-body">
                      <form onSubmit={handleSubmit}>
                        <div className="row mb-3">
                          <div className="col-md-6">
                            <div className="form-floating">
                              <select
                                className="form-control"
                                id="inputSerie"
                                value={serie}
                                onChange={(e) => setserie(e.target.value)}
                              >
                                <option value="">Seleccione una opción</option>
                                {Subserie.map((subserie) => (
                                  <option
                                    key={subserie.serie}
                                    value={subserie.serie}
                                  >
                                    {subserie.serie}
                                  </option>
                                ))}
                              </select>
                              <label htmlFor="inputSerie">Serie</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-floating">
                              <input
                                className="form-control"
                                id="inputSubserie"
                                type="text"
                                placeholder="ID Subserie"
                                value={subserie}
                                onChange={(e) => setsubserie(e.target.value)}
                              />
                              <label htmlFor="inputSubserie">ID Subserie</label>
                            </div>
                          </div>
                        </div>

                        <div className="form-floating mb-3">
                          <input
                            className="form-control"
                            id="inputDescripcion"
                            type="text"
                            placeholder="Nombre Sub-Serie"
                            value={Descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
                          />
                          <label htmlFor="inputDescripcion">
                            Nombre Sub-Serie
                          </label>
                        </div>

                        <div className="mt-4 mb-0">
                          <div className="d-grid">
                            <Boton disabled={isLoading}>
                              {isLoading ? "Enviando..." : "Enviar"}
                            </Boton>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container-fluid mt-5">
              <div className="row justify-content-center">
                <div className="col-lg-7">
                  <div className="card shadow-lg border-0 rounded-lg">
                    <div className="card-body">
                      <Box
                        sx={{
                          height: 400,
                          width: "100%",
                          "& .table-header": {
                            backgroundColor: "#f8fafc",
                            color: "#1f2937",
                            fontWeight: 600,
                          },
                          "& .MuiDataGrid-root": {
                            border: "none",
                            "& .MuiDataGrid-cell": {
                              borderBottom: "1px solid #f1f5f9",
                            },
                            "& .MuiDataGrid-columnHeaders": {
                              borderBottom: "2px solid #e2e8f0",
                            },
                            "& .MuiDataGrid-virtualScroller": {
                              backgroundColor: "#ffffff",
                            },
                          },
                        }}
                      >
                        <DataGrid
                          rows={Subserie}
                          columns={columns}
                          getRowId={(x) => x.descripcion}
                          disableRowSelectionOnClick
                          density="comfortable"
                          initialState={{
                            pagination: {
                              paginationModel: { pageSize: 5 },
                            },
                          }}
                          pageSizeOptions={[5, 10, 25]}
                        />
                      </Box>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </body>
  );
}

export default Subserie;
