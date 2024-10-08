import axios from "axios";

interface ficha {
    id_ficha: string;
    area_resguardante: string; 
    area_intervienen: string;
    descripcion: string;
    soporte_docu: string;
    id_seccion : string;
    id_serie : string;
    id_subserie: string;
}

export const ficha_post = async (data: ficha) => {
    try {
      const response = await axios.post(
        import.meta.env.VITE_API_URL + "/ficha_tec/ficha_tecnica/",
        data
      );
  
      if (response.status === 201) {
        // Asume que se devuelve un 201 Created
        console.log("ficha creada exitosamente:", response.data);
        return response.data;
      } else {
        throw new Error("Error al crear la ficha " + response.statusText);
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