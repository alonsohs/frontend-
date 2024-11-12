import { Logo } from "../../components/Logo";
import { iPortada } from "../../services/var.portada";
import { DataGrid, GridColDef, GridRowSelectionModel } from "@mui/x-data-grid";
import { portada_get } from "../../services/portada.services";
import { useEffect, useState } from "react";
import { Box, Button, IconButton, Tooltip } from "@mui/material";
import { Eye, Pencil, Trash2, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SearchFilter_Portada from "./SearchFilter_Portada";

export function Portada_Registro() {
  const navigate = useNavigate();
  const [iPortada, setIPortada] = useState<iPortada[]>([]);
  const [selectedRows, setSelectedRows] = useState<GridRowSelectionModel>([]);
  const [filteredIPortada, setFilteredIPortada] = useState<iPortada[]>([]);

  useEffect(() => {
    const fetchIPortada = async () => {
      const items = await portada_get();
      setIPortada(items);
      setFilteredIPortada(items);
    };
    fetchIPortada();
  }, []);

  const handleFilterChange = (filteredData: iPortada[]) => {
    setFilteredIPortada(filteredData);
  };

  const handleView = () => {
    const selectedId = selectedRows[0];
    console.log("Viewing item:", selectedId);
  };

  const handleEdit = () => {
    const selectedId = selectedRows[0];
    console.log("Editing item:", selectedId);
  };

  const handleDelete = () => {
    const selectedId = selectedRows[0];
    console.log("Deleting item:", selectedId);
  };

  const handleCreate = () => {
    navigate("/Crear_Portada");
  };

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
    /*  {
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
    },*/
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
    /*  {
      field: "subserie",
      headerName: "Subserie",
      flex: 1,
      minWidth: 150,
      headerClassName: "table-header",
    }, */
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
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Toolbar */}
          <div className="p-4 border-b flex justify-between items-center bg-gray-50">
            <div className="flex gap-2">
              <Tooltip title="Ver detalles">
                <span>
                  <IconButton
                    onClick={handleView}
                    size="small"
                    className="text-blue-600 hover:text-blue-800"
                    disabled={selectedRows.length !== 1}
                  >
                    <Eye className="h-5 w-5" />
                  </IconButton>
                </span>
              </Tooltip>

              <Tooltip title="Editar">
                <span>
                  <IconButton
                    onClick={handleEdit}
                    size="small"
                    className="text-green-600 hover:text-green-800"
                    disabled={selectedRows.length !== 1}
                  >
                    <Pencil className="h-5 w-5" />
                  </IconButton>
                </span>
              </Tooltip>

              <Tooltip title="Eliminar">
                <span>
                  <IconButton
                    onClick={handleDelete}
                    size="small"
                    className="text-red-600 hover:text-red-800"
                    disabled={selectedRows.length !== 1}
                  >
                    <Trash2 className="h-5 w-5" />
                  </IconButton>
                </span>
              </Tooltip>
            </div>

            <Button
              variant="contained"
              startIcon={<Plus className="h-4 w-4" />}
              onClick={handleCreate}
              sx={{
                backgroundColor: "#441853",
                "&:hover": {
                  backgroundColor: "#331340",
                },
              }}
            >
              Nuevo
            </Button>
          </div>

          <SearchFilter_Portada
            onFilterChange={handleFilterChange}
            iPortada={iPortada}
          />

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
              rows={filteredIPortada}
              columns={columns}
              getRowId={(x) => x.id_expediente}
              onRowSelectionModelChange={(newSelection) => {
                setSelectedRows(newSelection);
              }}
              density="comfortable"
              initialState={{
                pagination: {
                  paginationModel: { pageSize: 10 },
                },
              }}
              pageSizeOptions={[5, 10, 25, 50]}
              className="w-full"
              checkboxSelection
            />
          </Box>
        </div>
      </main>
    </div>
  );
}

export default Portada_Registro;
