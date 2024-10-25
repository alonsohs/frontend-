import { Logo } from "../../components/Logo";
import { catalogo_get } from "../../services/catalogo.service";
import { catalogo } from "../../services/var.catalogo";
import { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box } from "@mui/material";

export function Catálogo_Registro() {
  const [catalogo, setCatalogo] = useState<catalogo[]>([]);

  useEffect(() => {
    const fetchCatalogo = async () => {
      const items = await catalogo_get();
      setCatalogo(items);
    };
    fetchCatalogo();
  }, []);

  const columns: GridColDef[] = [
    {
      field: "id_catalogo",
      headerName: "ID Catálogo",
      flex: 1,
      minWidth: 150,
      headerClassName: "table-header",
    },
    {
      field: "catalogo",
      headerName: "Número de Catálogo",
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
      field: "destino_expe",
      headerName: "Destino del Expediente",
      flex: 1,
      minWidth: 150,
      headerClassName: "table-header",
    },
    {
      field: "type_access",
      headerName: "Tipo de Acceso",
      flex: 1,
      minWidth: 150,
      headerClassName: "table-header",
    },
    {
      field: "valores_documentales",
      headerName: "Valores Documentales",
      flex: 1,
      minWidth: 150,
      headerClassName: "table-header",
    },
    {
      field: "observaciones",
      headerName: "Observaciones",
      flex: 1,
      minWidth: 150,
      headerClassName: "table-header",
    },
    {
      field: "id_seccion",
      headerName: "Sección",
      flex: 1,
      minWidth: 150,
      headerClassName: "table-header",
    },
    {
      field: "id_serie",
      headerName: "Serie",
      flex: 1,
      minWidth: 150,
      headerClassName: "table-header",
    },
    {
      field: "id_subserie",
      headerName: "Subserie",
      flex: 1,
      minWidth: 150,
      headerClassName: "table-header",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="p-4 flex flex-col items-center">
        <Logo />
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
              rows={catalogo}
              columns={columns}
              getRowId={(x) => x.id_catalogo}
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

export default Catálogo_Registro;
