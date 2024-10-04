import axios from 'axios';
import {useState, useEffect} from 'react';
import {Producto} from './Producto';
import { Serie } from './Producto';
import {Seccion_get} from './Services/cuadro.service'
import {serie_get} from './Services/cuadro.service'


export const Productos = () => {
    const [productos, setProductos] = useState<Producto[]>([]);
    const [secciones, setSeccion] = useState<Producto[]>([]);
    const [serie, setSerie] = useState<Serie[]>([]);



    useEffect(() => {
        const fetchProductos = async () => {
            const response = await axios.get(import.meta.env.VITE_API_URL + '/cuadro/seccion/');
            setProductos(response.data);
        };
        fetchProductos();
    }, []);

    useEffect(() => {
        const fetchSeccion = async () => {
            const items =await Seccion_get ();
            setSeccion(items)
        }
        fetchSeccion();
    }, []);

    useEffect(() => {
        const fetchSerie = async () => {
            const series =await serie_get ();
            setSerie(series)
        }
        fetchSerie();
    }, []);

    return (
        <div>
            <select name="seccion" id="seccion">
                {secciones.map ((seccion)=> (
                    <option value={seccion.id_seccion}> {seccion.id_seccion}</option>
                ))
                }
            </select>

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

            <select name="serie" id="serie">
                {serie.map((serie)=> (
                    <option value={serie.serie}>{serie.serie}</option>
                ))
                }
            </select>
        </div>
);
};