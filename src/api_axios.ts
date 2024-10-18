import axios from 'axios';

// Crear una instancia de Axios
const api = axios.create({
  baseURL:  import.meta.env.VITE_API_URL , // URL base de tu API
});

// Interceptor para agregar el token a cada petición
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Obtener el token del localStorage
    if (token) {
      config.headers['Authorization'] = `Token ${token}`; // Agregar el token al header
      console.log(config.headers)
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
