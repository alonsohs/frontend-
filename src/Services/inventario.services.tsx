import axios from "axios";


interface invetario{
    num_consecutivo: string;
    serie: string;
    descripsion: string;
    observaciones: string;
    estatus: string;
    expediente: string;
}

export const invetario_post = async (data:invetario) => {
    try {
        const response = await axios.post(
          import.meta.env.VITE_API_URL + "/inventario/inventario/",
          data
        );
    
        if (response.status === 201) {
          // Asume que se devuelve un 201 Created
          console.log("inventario creado exitosamente:", response.data);
          return response.data;
        } else {
          throw new Error("Error al crear inventario  " + response.statusText);
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

export const inventario_get = async () => {
    try {
      const response = await axios.get(
        import.meta.env.VITE_API_URL + "/inventario/inventario/"
      );
  
      if (response.status === 200) {
        // Asume que se devuelve la consulta
        console.log("inventarios ", response.data);
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