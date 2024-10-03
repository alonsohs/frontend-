import { useState } from 'react';
import { serie_post } from './Post_cuadro';


export function MyComponent() {

    const [ID, setNombre] = useState('');
    const [Codigo, setEmail] = useState('');
    const [Descripcion, setDescripcion] = useState ('')

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault(); 
    
    const  Secion = {
        id_seccion: ID,
        codigo: Codigo,
        descripcion: Descripcion
    };

    try {
      const result = await serie_post(Secion);
      console.log('Respuesta de la API:', result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
    <label>ID_Seccion:</label>
    <input type="text" value={ID} onChange={(e) => setNombre(e.target.value)} />
    <label>Codigo:</label>
    <input type="text" value={Codigo} onChange={(e) => setEmail(e.target.value)} />
    <label>Descripcion:</label>
    <input type="text" value={Descripcion} onChange={(e) => setDescripcion(e.target.value)}/>
    <button type="submit">Crear Usuario</button>
</form>
);
}
export default MyComponent;