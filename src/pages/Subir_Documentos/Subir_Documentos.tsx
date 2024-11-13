import React, { useState } from "react";
import { Upload, Eye, Pencil, Trash2 } from "lucide-react";
import { Box, Button, IconButton, Tooltip } from "@mui/material";
import { DataGrid, GridColDef, GridRowSelectionModel } from "@mui/x-data-grid";

export const Subir_Documentos = () => {
  const [documentos, setDocumentos] = useState([
    {
      id: 1,
      nombre: "Documento 1.pdf",
      fechaSubida: "2024-03-15",
      tipo: "PDF",
      tamaño: "2.5 MB",
    },
    {
      id: 2,
      nombre: "Reporte.docx",
      fechaSubida: "2024-03-14",
      tipo: "DOCX",
      tamaño: "1.8 MB",
    },
  ]);

  const [selectedRows, setSelectedRows] = useState<GridRowSelectionModel>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Manejador de subida de archivos
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const newDoc = {
        id: documentos.length + 1,
        nombre: file.name,
        fechaSubida: new Date().toISOString().split("T")[0],
        tipo: file.name.split(".").pop()?.toUpperCase() || "UNKNOWN",
        tamaño: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
      };
      setDocumentos([...documentos, newDoc]);
    }
  };

  // Definición de columnas
  const columns: GridColDef[] = [
    {
      field: "nombre",
      headerName: "Nombre del Documento",
      flex: 1,
      minWidth: 200,
      headerClassName: "table-header",
    },
    {
      field: "fechaSubida",
      headerName: "Fecha de Subida",
      flex: 1,
      minWidth: 150,
      headerClassName: "table-header",
    },
    {
      field: "tipo",
      headerName: "Tipo",
      flex: 1,
      minWidth: 100,
      headerClassName: "table-header",
    },
    {
      field: "tamaño",
      headerName: "Tamaño",
      flex: 1,
      minWidth: 100,
      headerClassName: "table-header",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-4 border-b flex justify-between items-center bg-gray-50">
            <div className="flex gap-2">
              <Tooltip title="Ver detalles">
                <span>
                  <IconButton
                    size="small"
                    className="text-blue-600 hover:text-blue-800"
                    disabled={selectedRows.length !== 1 || isLoading}
                  >
                    <Eye className="h-5 w-5" />
                  </IconButton>
                </span>
              </Tooltip>

              <Tooltip title="Editar">
                <span>
                  <IconButton
                    size="small"
                    className="text-green-600 hover:text-green-800"
                    disabled={selectedRows.length !== 1 || isLoading}
                  >
                    <Pencil className="h-5 w-5" />
                  </IconButton>
                </span>
              </Tooltip>

              <Tooltip title="Eliminar">
                <span>
                  <IconButton
                    size="small"
                    className="text-red-600 hover:text-red-800"
                    disabled={selectedRows.length !== 1 || isLoading}
                  >
                    <Trash2 className="h-5 w-5" />
                  </IconButton>
                </span>
              </Tooltip>
            </div>

            <div>
              <input
                type="file"
                id="fileUpload"
                className="hidden"
                onChange={handleFileUpload}
              />
              <Button
                variant="contained"
                startIcon={<Upload className="h-4 w-4" />}
                onClick={() => document.getElementById("fileUpload")?.click()}
                disabled={isLoading}
                sx={{
                  backgroundColor: "#441853",
                  "&:hover": {
                    backgroundColor: "#331340",
                  },
                }}
              >
                Subir Documento
              </Button>
            </div>
          </div>

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
              rows={documentos}
              columns={columns}
              onRowSelectionModelChange={(newSelection) => {
                setSelectedRows(newSelection);
              }}
              rowSelectionModel={selectedRows}
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
};
