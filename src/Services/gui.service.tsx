import axios from "axios";
import api from "../api_axios";

interface guia {
  id_guia: string;
  descripcion: string;
  volumen: string;
  ubicacion_fisica: string;
  num_expediente: string;
}

export const guia_post = async (data: guia) => {
  try {
    const response = await api.post("/guia_docu/guia_doc/", data);

    if (response.status === 201) {
      // Asume que se devuelve un 201 Created
      console.log("portada creado exitosamente:", response.data);
      return response.data;
    } else {
      throw new Error("Error al crear portada  " + response.statusText);
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

export const guia_get = async () => {
  try {
    const response = await api.get("/guia_docu/guia_doc/");

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
