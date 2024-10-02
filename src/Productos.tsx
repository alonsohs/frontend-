import axios from 'axios';
import {useState, useEffect} from 'react';
import {Producto} from './Producto';


export const Productos = () => {
    const [productos, setProductos] = useState<Producto[]>([]);

    useEffect(() => {
        const fetchProductos = async () => {
            const response = await axios.get('https://backend-1-ck69.onrender.com/cuadro/seccion/');
            setProductos(response.data);
        };
        fetchProductos();
    }, []);
    return (
        <div>
            {productos.map((producto) => (
            <div key = {producto.id_seccion} {...producto}>
                <p>
                    Seccion: {producto.id_seccion}
                </p>
                <p>
                    Codigo: {producto.codigo}
                </p>
                <p>
                    Descripcion: {producto.descripcion}
                </p>
            </div>
            ))}
        </div>
);
};