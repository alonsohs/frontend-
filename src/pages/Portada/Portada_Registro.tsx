import { Logo } from "../../components/Logo";
import { iPortada } from "../../services/var.portada";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { portada_get } from "../../services/portada.services";
import { useEffect, useState } from "react";

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
    { field: "num_expediente", headerName: "No. Expediente ", width: 150 },
    { field: "asunto", headerName: "Asunto", width: 150 },
    {
      field: "num_legajos",
      headerName: "Número de Legajos",
      width: 150,
    },
    {
      field: "num_fojas",
      headerName: "Número de Fojas",
      width: 150,
    },
    {
      field: "valores_secundarios",
      headerName: "Valores Secundarios",
      width: 150,
    },
    {
      field: "fecha_apertura",
      headerName: "Fecha de Apertura",
      width: 150,
    },
    { field: "fecha_cierre", headerName: "Fecha de Cierre", width: 150 },
    {
      field: "archivo_tramite",
      headerName: "Estancia en Archivo de Trámite",
      width: 150,
    },
    {
      field: "archivo_concentracion",
      headerName: "Estancia en Archivo de Concentración",
      width: 150,
    },
    {
      field: "seccion",
      headerName: "Sección",
      width: 150,
    },
    {
      field: "serie",
      headerName: "Serie",
      width: 150,
    },
    {
      field: "subserie",
      headerName: "Subserie",
      width: 150,
    },
    {
      field: "ficha",
      headerName: "Ficha",
      width: 150,
    },
    {
      field: "catalogo",
      headerName: "Catálogo",
      width: 150,
    },
  ];

  return (
    <div>
      <Logo />

      <div style={{ height: 300, width: "100%" }}>
        <DataGrid
          rows={portada}
          columns={columns}
          getRowId={(x) => x.id_portada}
        />
      </div>
    </div>
  );
}
