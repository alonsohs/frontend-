import { Logo } from "../../components/Logo";
import { iPortada } from "../../services/var.portada";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { portada_get } from "../../services/portada.services";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";

export function Portada_Registro() {
  const [portada, setPortada] = useState<iPortada[]>([]);

  useEffect(() => {
    const fetchPortada = async () => {
      const items = await portada_get();
      setPortada(items);
    };
    fetchPortada();
  }, []);

  const columns: GridColDef[] = [
    {
      field: "num_expediente",
      headerName: "No. Expediente",
      flex: 1,
      minWidth: 150,
      headerClassName: "table-header",
    },
    {
      field: "asunto",
      headerName: "Asunto",
      flex: 1.5,
      minWidth: 150,
      headerClassName: "table-header",
    },
    {
      field: "num_legajos",
      headerName: "Número de Legajos",
      flex: 1,
      minWidth: 150,
      headerClassName: "table-header",
    },
    {
      field: "num_fojas",
      headerName: "Número de Fojas",
      flex: 1,
      minWidth: 150,
      headerClassName: "table-header",
    },
    {
      field: "valores_secundarios",
      headerName: "Valores Secundarios",
      flex: 1.2,
      minWidth: 150,
      headerClassName: "table-header",
    },
    {
      field: "fecha_apertura",
      headerName: "Fecha de Apertura",
      flex: 1,
      minWidth: 150,
      headerClassName: "table-header",
    },
    {
      field: "fecha_cierre",
      headerName: "Fecha de Cierre",
      flex: 1,
      minWidth: 150,
      headerClassName: "table-header",
    },
    {
      field: "archivo_tramite",
      headerName: "Estancia en Archivo de Trámite",
      flex: 1.5,
      minWidth: 200,
      headerClassName: "table-header",
    },
    {
      field: "archivo_concentracion",
      headerName: "Estancia en Archivo de Concentración",
      flex: 1.5,
      minWidth: 200,
      headerClassName: "table-header",
    },
    {
      field: "seccion",
      headerName: "Sección",
      flex: 1,
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
    {
      field: "subserie",
      headerName: "Subserie",
      flex: 1,
      minWidth: 150,
      headerClassName: "table-header",
    },
    {
      field: "ficha",
      headerName: "Ficha",
      flex: 1,
      minWidth: 150,
      headerClassName: "table-header",
    },
    {
      field: "catalogo",
      headerName: "Catálogo",
      flex: 1,
      minWidth: 150,
      headerClassName: "table-header",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="p-4 flex flex-col items-center">
        <Logo />
        <h1 className="text-2xl font-bold text-gray-800 text-center mt-4">
          Registro de Portadas
        </h1>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <Box
            sx={{
              height: 600,
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
              rows={portada}
              columns={columns}
              getRowId={(x) => x.id_portada}
              disableRowSelectionOnClick
              density="comfortable"
              initialState={{
                pagination: {
                  paginationModel: { pageSize: 10 },
                },
              }}
              pageSizeOptions={[5, 10, 25, 50]}
              className="w-full"
            />
          </Box>
        </div>
      </main>
    </div>
  );
}

export default Portada_Registro;
