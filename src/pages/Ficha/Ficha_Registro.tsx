import { Logo } from "../../components/Logo";
import { ficha } from "../../services/var.ficha";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { ficha_get } from "../../services/ficha.services";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";

export function Ficha_Registro() {
  const [ficha, setFicha] = useState<ficha[]>([]);

  useEffect(() => {
    const fetchFicha = async () => {
      const items = await ficha_get();
      setFicha(items);
    };
    fetchFicha();
  }, []);

  const columns: GridColDef[] = [
    {
      field: "id_ficha",
      headerName: "Num. de Ficha",
      flex: 1,
      minWidth: 150,
      headerClassName: "table-header",
    },
    {
      field: "area_resguardante",
      headerName: "Área Resguardante",
      flex: 1.2,
      minWidth: 150,
      headerClassName: "table-header",
    },
    {
      field: "area_interviene",
      headerName: "Áreas que Intervienen",
      flex: 1.2,
      minWidth: 150,
      headerClassName: "table-header",
    },
    {
      field: "soporte_docu",
      headerName: "Soporte Documental (Formato)",
      flex: 1.5,
      minWidth: 200,
      headerClassName: "table-header",
    },
    {
      field: "descripcion",
      headerName: "Descripción",
      flex: 1.5,
      minWidth: 200,
      headerClassName: "table-header",
    },
    {
      field: "id_seccion",
      headerName: "Sección a la que pertenece",
      flex: 1.2,
      minWidth: 150,
      headerClassName: "table-header",
    },
    {
      field: "id_serie",
      headerName: "Serie a la que pertenece",
      flex: 1.2,
      minWidth: 150,
      headerClassName: "table-header",
    },
    {
      field: "id_subserie",
      headerName: "Subserie a la que pertenece",
      flex: 1.2,
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
              rows={ficha}
              columns={columns}
              getRowId={(x) => x.id_ficha}
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

export default Ficha_Registro;
