export interface ClienteModel {
    id: number;
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    fechaNacimiento: string;
    edad: number;
    fechaProbableMuerte: string;
}

export interface ClienteInput {
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    fechaNacimiento: string;
}

export interface ClienteKpi {
    promedioEdad: number;
    desviacionEstandarEdad: number;
}