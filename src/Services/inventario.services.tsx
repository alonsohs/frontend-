import axios from "axios";
import api from '../api_axios';

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
        const response = await axios.post( "/inventario/inventario/",
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
      const response = await axios.get("/inventario/inventario/"
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


export const inventario_put = async (id: string, data: invetario) => {
    try {
      const response = await api.put(`/inventario/inventario/${id}/`, data);
      if (response.status === 200) {
        console.log("Catalogo actualizado exitosamente:", response.data);
        return response.data;
      } else {
        throw new Error("Error al actualizar catalogo " + response.statusText);
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
  
export const inventario_delete = async (id: string) => {
    try {
      const response = await api.delete(`/inventario/inventario/${id}/`);
      if (response.status === 204) {
        console.log("Catalogo eliminado exitosamente");
        return true;
      } else {
        throw new Error("Error al eliminar catalogo " + response.statusText);
      }
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        console.error("Error de Axios:", error.message);
      } else {
        console.error("Error inesperado:", error);
      }
      return false;
    }
  };
  