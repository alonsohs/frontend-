import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import Logo from "../../assets/Tlaxcala.png";
import { Boton } from "../../components/Botones/Botones";
import { seccion_post, Seccion_get } from "../../services/cuadro.service";
import { seccion } from "../../Producto";
import Swal from "sweetalert2";

export function Seccion() {
  const [ID, setID] = useState("");
  const [Codigo, setCode] = useState("");
  const [Descripcion, setDescripcion] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [seccion, setSeccion] = useState<seccion[]>([]);

  useEffect(() => {
    const fetchSeccion = async () => {
      const items = await Seccion_get();
      setSeccion(items);
    };
    fetchSeccion();
  }, []);

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (!ID.trim() || !Codigo.trim() || !Descripcion.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Error",
        text: "Debes llenar todos los campos para enviar el formulario",
      });
      return;
    }
    setIsLoading(true);

    const Seccion = {
      id_seccion: ID,
      codigo: Codigo,
      descripcion: Descripcion,
    };

    try {
      const result = await seccion_post(Seccion);
      console.log("Respuesta de la APi:", result);

      Swal.fire({
        icon: "success",
        title: "¡Exito!",
        text: "Se ha agregado la sección con exito",
      });

      setID("");
      setCode("");
      setDescripcion("");

      // Actualizar la tabla después de agregar
      const updatedItems = await Seccion_get();
      setSeccion(updatedItems);
    } catch (error) {
      console.error("Error:", error);

      Swal.fire({
        icon: "error",
        title: "Ooops",
        text: "Algo salio mal. Por favor intente de nuevo",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const columns: GridColDef[] = [
    {
      field: "id_seccion",
      headerName: "Seccion Código",
      flex: 1,
      minWidth: 150,
      headerClassName: "table-header",
    },
    {
      field: "codigo",
      headerName: "Nombre Sección",
      flex: 1.5,
      minWidth: 200,
      headerClassName: "table-header",
    },
    {
      field: "descripcion",
      headerName: "Descripción",
      flex: 2,
      minWidth: 250,
      headerClassName: "table-header",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="p-4 flex flex-col items-center">
        <div className="w-64 mb-4">
          <img src={Logo} alt="Logo" className="w-full h-auto" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          Cuadro General de Clasificación Archivística
        </h1>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <form onSubmit={handleSubmit} className="p-6">
            <h3 className="text-xl font-semibold mb-6">Sección</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  ID Sección
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  type="text"
                  placeholder="ID Sección"
                  value={ID}
                  onChange={(e) => setID(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Código
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  type="text"
                  placeholder="Código"
                  value={Codigo}
                  onChange={(e) => setCode(e.target.value)}
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Descripción
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  type="text"
                  placeholder="Descripción"
                  value={Descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
                />
              </div>
            </div>

            <div className="mt-6">
              <Boton disabled={isLoading} className="w-full md:w-auto">
                {isLoading ? "Enviando..." : "Enviar"}
              </Boton>
            </div>
          </form>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
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
              rows={seccion}
              columns={columns}
              getRowId={(x) => x.id_seccion}
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
      </main>
    </div>
  );
}

export default Seccion;
