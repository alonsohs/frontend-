import axios from "axios";

interface user {
    id: string;
    username: string; 
    password: string;
    first_name: string;
    last_name: string;
    email: string;
    cargo: string;
    unidad_admin : string;
    
}





export const user_post = async (data: user) => {
    try {
      const response = await axios.post(
        import.meta.env.VITE_API_URL + "/users/register/",
        data
      );
  
      if (response.status === 201) {
        // Asume que se devuelve un 201 Created
        console.log("user creada exitosamente:", response.data);
        return response.data;
      } else {
        throw new Error("Error al crear el usuario " + response.statusText);
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


export const user_profile = async () => {
    try {
      const response = await axios.get(
        import.meta.env.VITE_API_URL + "/users/profile/"
      );
  
      if (response.status === 200) {
        // Asume que se devuelve la consulta
        console.log("users ", response.data);
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


  export const user_login = async () => {
    try {
      const response = await axios.post(
        import.meta.env.VITE_API_URL + "/users/login"
      );
  
      if (response.status === 200) {
        // Asume que se devuelve la consulta
        console.log("no accede ", response.data);
        return response.data;
      } else {
        throw new Error("no access " + response.statusText);
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



