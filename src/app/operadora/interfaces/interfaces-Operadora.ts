export interface OperadoraFormulario {
    nombres: string ;
    apellidos: string ;
    email: string ;
    telefono: string ;
    nombreOpe: string ;
    rucOpe: string ;
    telefono1Ope: string ;
    telefono2Ope: string ;
    direccionOpe: string ;
    observacionOpe?: string ;
}

export interface Operadora {
    idOperadora?: number;
    nombre : string ;
    ruc : string ;
    telefono1: string ;
    telefono2 : string ;
    direccion : string ;
    responsable?: Responsable;
    observacion ?: string ;
}

// export interface Operadora_Contrato {
//     idOperadora: number ;
//     nombreOperadora: string ;
// }

export interface Responsable {
    nombres : string ;
    apellidos : string ;
    email : string ;
    telefono : string ;
}

export interface listadoOperadora {
    position: string;
    nombre: string;
    ruc: string;
    telefono1: string;
    telefono2: string;
    representante: string;
  }
  