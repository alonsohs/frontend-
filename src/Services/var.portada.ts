export interface iPortada {
    
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
}

export class Portada implements iPortada {
    num_expediente: string = "";
    asunto: string = "";
    num_legajos: string= "";
    num_fojas: string= "";
    valores_secundarios: string = "";
    fecha_apertura: string = "";
    fecha_cierre: string = "";
    archivo_tramite: string = "";
    archivo_concentracion: string = "";
    seccion: string = "";
    serie: string = "";
    subserie: string = "";
    ficha: string = "";
    catalogo: string = "";
}