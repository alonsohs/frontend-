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

export const seccion_post = async (data: ficha) => {
    try {
      const response = await axios.post(
        import.meta.env.VITE_API_URL + "/ficha_tec/ficha_tecnica//",
        data
      );
  
      if (response.status === 201) {
        // Asume que se devuelve un 201 Created
        console.log("Serie creada exitosamente:", response.data);
        return response.data;
      } else {
        throw new Error("Error al crear la serie: " + response.statusText);
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
  
export const Seccion_get = async () => {
    try {
      const response = await axios.get(
        import.meta.env.VITE_API_URL + "/cuadro/seccion/"
      );
  
      if (response.status === 200) {
        // Asume que se devuelve la consulta
        console.log("secciones", response.data);
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
  
export const serie_get = async () => {
    try {
      const response = await axios.get(
        import.meta.env.VITE_API_URL + "/cuadro/serie/"
      );
  
      if (response.status === 200) {
        // Asume que se devuelve la consulta
        console.log("series", response.data);
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
  
