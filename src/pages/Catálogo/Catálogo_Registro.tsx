import { Logo } from "../../components/Logo";
import { catalogo_get } from "../../services/catalogo.service";
import { catalogo } from "../../services/var.catalogo";
import { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

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
    { field: "id_catalogo", headerName: "ID Catálogo", width: 150 },
    { field: "catalogo", headerName: "Número de Catálogo", width: 150 },
    {
      field: "archivo_tramite",
      headerName: "Estancia en Archivo de Trámite",
      width: 150,
    },
    {
      field: "archivo_concentracion",
      headerName: "Estancia en Archivo de Concentración ",
      width: 150,
    },
    { field: "destino_expe", headerName: "Destino del Expediente", width: 150 },
    {
      field: "type_access",
      headerName: "Tipo de Acceso",
      width: 150,
    },
    {
      field: "valores_documentales",
      headerName: "Valores Documentales",
      width: 150,
    },
    {
      field: "observaciones",
      headerName: "Observaciones",
      width: 150,
    },
    {
      field: "id_seccion",
      headerName: "Seccion",
      width: 150,
    },
    {
      field: "id_serie",
      headerName: "Serie",
      width: 150,
    },
    {
      field: "id_subserie",
      headerName: "Subserie",
      width: 150,
    },
  ];

  return (
    <div>
      <Logo />
      <div style={{ height: 300, width: "100%" }}>
        <DataGrid
          rows={catalogo}
          columns={columns}
          getRowId={(x) => x.id_catalogo}
        />
      </div>
    </div>
  );
}
