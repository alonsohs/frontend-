export interface iInventario {

    num_consecutivo: string;
    serie: string;
    descripsion: string;
    observaciones: string;
    estatus: string;
    expediente: string;

}

export class Inventario implements iInventario{
    num_consecutivo: string = "";
    serie: string = "";
    descripsion: string = "";
    observaciones: string = "";
    estatus: string = "";
    expediente: string = "";
}