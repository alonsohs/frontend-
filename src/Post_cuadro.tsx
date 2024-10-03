import axios from 'axios'

interface Serie {
  id_seccion: string;
  codigo: string;
  descripcion: string;
}

export const serie_post = async (data: Serie) => {
  try {
    const response = await axios.post(import.meta.env.VITE_API_URL + '/cuadro/seccion/', data);

    if (response.status === 201) { // Asume que se devuelve un 201 Created
      console.log('Serie creada exitosamente:', response.data);
      return response.data;
    } else {
      throw new Error('Error al crear la serie: ' + response.statusText);
    }
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error('Error de Axios:', error.message);
    } else {
      console.error('Error inesperado:', error);
    }
    return null;
  }
};