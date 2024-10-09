import axios from "axios";

interface catalogo {
    id_catalogo : string;
    catalogo: string;
    archivo_tramite :string;
    archivo_concentracion: string;
    destino_expe: string;
    type_access: string;
    valores_documentales: string;
    observaciones:string;
    id_seccion : string;
    id_serie : string;
    id_subserie: string;
}

export const catalogo_post =async (data:catalogo) => {
    try {
        const response = await axios.post(
          import.meta.env.VITE_API_URL + "/catalogo/Catalogo/",
          data
        );
    
        if (response.status === 201) {
          // Asume que se devuelve un 201 Created
          console.log("catalogo creado exitosamente:", response.data);
          return response.data;
        } else {
          throw new Error("Error al crear catalogo " + response.statusText);
        }
      } catch (error: any) {
        if (axios.isAxiosError(error)) {
          console.error("Error de Axios:", error.message);
        } else {
          console.error("Error inesperado:", error);
        }
        return null;
      }
};

export const catalogo_get = async () => {
    try {
        const response = await axios.get(
          import.meta.env.VITE_API_URL + "/catalogo/Catalogo/"
        );
    
        if (response.status === 200) {
          // Asume que se devuelve la consulta
          console.log("catalogo ", response.data);
          return response.data;
        } else {
          throw new Error("no consultado" + response.statusText);
        }
      } catch (error: any) {
        if (axios.isAxiosError(error)) {
          console.error("Error de Axios:", error.message);
        } else {
          console.error("Error inesperado:", error);
        }
        return null;
      }
};

