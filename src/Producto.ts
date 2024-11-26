export interface seccion{
    id_seccion: string;
    codigo: string;
    descripcion: string;
}

export interface serie {
    serie: string;
    descripcion: string;
    codigo_serie: string;
    id_seccion: string;
}

export interface SubSerie{
    SubSerie: string;
    descripcion: string;
    id_serie: string;
}