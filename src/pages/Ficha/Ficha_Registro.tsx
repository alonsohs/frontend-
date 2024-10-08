import { Logo } from "../../components/Logo";
import { ficha } from "../../services/var.ficha";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { ficha_get } from "../../services/ficha.services";
import { useEffect, useState } from "react";

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
    { field: "id_ficha", headerName: "Num. de Ficha", width: 150 },
    { field: "area_resguardante", headerName: "Area Resguardante", width: 150 },
    {
      field: "area_interviene",
      headerName: "Areas que Interviene",
      width: 150,
    },
    {
      field: "soporte_docu",
      headerName: "Soporte Documental (Formato)",
      width: 150,
    },
    { field: "descripcion", headerName: "Descripción", width: 150 },
    {
      field: "id_seccion",
      headerName: "Seccion a la que pertenece",
      width: 150,
    },
    { field: "id_serie", headerName: "Serie a la que pertenece", width: 150 },
    {
      field: "id_subserie",
      headerName: "Subserie a la que pertenece",
      width: 150,
    },
  ];

  return (
    <div>
      <Logo />

      <div style={{ height: 300, width: "100%" }}>
        <DataGrid rows={ficha} columns={columns} getRowId={(x) => x.id_ficha} />
      </div>
    </div>
  );
}
