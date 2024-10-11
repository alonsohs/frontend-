import axios from "axios";

interface portada {
<<<<<<< HEAD
  num_expediente: string;
  asunto: string;
  num_legajos: string;
  num_fojas: string;
  valores_secundarios: string;
  fecha_apertura: string;
  fecha_cierre: string;
  archivo_tramite: string;
  archivo_concentracion: string;
  seccion: string;
  serie: string;
  subserie: string;
  ficha: string;
  catalogo: string;
=======
    num_expediente: string;
    asunto: string;
    num_legajos: string;
    num_fojas: string;
    valores_secundarios: string;
    fecha_apertura: string;
    fecha_cierre: string;
    archivo_tramite: string;
    archivo_concentracion: string;
    seccion: string;
    serie: string;
    subserie: string;
    ficha: string;
    catalogo: string;
  
>>>>>>> 17f20649193da9440aa83aa59c68d32315267a6a
}

export const portada_post = async (data: portada) => {
  try {
    const response = await axios.post(
      import.meta.env.VITE_API_URL + "/portada/portada/",
      data
    );

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

export const portada_get = async () => {
  try {
    const response = await axios.get(
      import.meta.env.VITE_API_URL + "/portada/portada/"
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
