export interface iGuia {
    id_guia : string;
    descripcion : string;
    volumen : string;
    ubicacion_fisica: string;
    num_expediente: string;
}


export class Guia implements iGuia {
    id_guia : string = "";
    descripcion : string = "";
    volumen : string = "";
    ubicacion_fisica: string = "";
    num_expediente: string = "";
}
